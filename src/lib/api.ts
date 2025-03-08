import { GenerateImageParams, GenerateImageResponse, APIKeyStore, ImageData } from './types';
import { API_CONFIG, LOCAL_STORAGE_KEY } from '../config/config';
import { toast } from 'sonner';

export const saveApiKey = (apiKey: string): void => {
  if (!apiKey) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return;
  }
  
  const data: APIKeyStore = {
    key: apiKey,
    timestamp: Date.now()
  };
  
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  toast.success('API key saved successfully');
};

export const getApiKey = (): string | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return null;
  
  try {
    const parsed: APIKeyStore = JSON.parse(data);
    // Key is valid for 30 days
    const isValid = (Date.now() - parsed.timestamp) < (30 * 24 * 60 * 60 * 1000);
    return isValid ? parsed.key : null;
  } catch (e) {
    return null;
  }
};

export const clearApiKey = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  toast.info('API key cleared');
};

// Helper function to poll for image status
const pollImageStatus = async (imageId: string, apiKey: string): Promise<ImageData> => {
  const maxAttempts = 50; // Maximum polling attempts
  const delay = 3000; // 3 seconds between polls
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    console.log(`Polling image status (attempt ${attempt + 1}/${maxAttempts})...`);
    
    try {
      const response = await fetch(`https://api.letz.ai/images/${imageId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data: ImageData = await response.json();
      
      if (data.status === 'ready') {
        console.log('Image generation complete!', data);
        return data;
      } else if (data.status === 'failed') {
        throw new Error('Image generation failed');
      }
      
      // If not ready or failed, wait before next poll
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (error) {
      console.error('Error polling image status:', error);
      throw error;
    }
  }
  
  throw new Error('Timeout waiting for image generation');
};

export const generateImage = async (params: GenerateImageParams): Promise<GenerateImageResponse> => {
  const { prompt, apiKey } = params;
  
  if (!prompt || !apiKey) {
    return { 
      success: false, 
      error: !prompt ? 'Prompt is required' : 'API key is required' 
    };
  }
  
  try {
    console.log('Generating image with parameters:', {
      prompt,
      ...API_CONFIG
    });
    
    // Step 1: Initiate image generation
    const generateResponse = await fetch('https://api.letz.ai/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt,
        width: params.width || API_CONFIG.width,
        height: params.height || API_CONFIG.height,
        quality: params.quality || API_CONFIG.quality,
        creativity: params.creativity || API_CONFIG.creativity,
        hasWatermark: params.watermark !== undefined ? params.watermark : API_CONFIG.watermark,
        systemVersion: params.systemVersion || API_CONFIG.systemVersion,
        mode: params.mode || API_CONFIG.mode
      })
    });
    
    if (!generateResponse.ok) {
      throw new Error(`API error: ${generateResponse.status}`);
    }
    
    const generateData: ImageData = await generateResponse.json();
    const imageId = generateData.id;
    
    if (!imageId) {
      throw new Error('No image ID returned from API');
    }
    
    // Step 2: Poll for image status until ready
    const finalImageData = await pollImageStatus(imageId, apiKey);
    
    // Step 3: Return the image URL from the imageVersions object
    if (finalImageData.imageVersions && 
        (finalImageData.imageVersions.original || finalImageData.imageVersions['1920x1920'])) {
      return {
        success: true,
        imageId: finalImageData.id,
        imageUrl: finalImageData.imageVersions.original || 
                 finalImageData.imageVersions['1920x1920'] || 
                 finalImageData.imageVersions['640x640']
      };
    } else {
      throw new Error('No image URL found in response');
    }
    
  } catch (error) {
    console.error('Error generating image:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate image. Please try again.'
    };
  }
};

// Function to interrupt image generation
export const interruptImageGeneration = async (imageId: string, apiKey: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://api.letz.ai/images/${imageId}/interruption`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    
    return response.status === 204;
  } catch (error) {
    console.error('Error interrupting image generation:', error);
    return false;
  }
};

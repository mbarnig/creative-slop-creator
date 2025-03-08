
import { GenerateImageParams, GenerateImageResponse, APIKeyStore } from './types';
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

export const generateImage = async (params: GenerateImageParams): Promise<GenerateImageResponse> => {
  const { prompt, apiKey } = params;
  
  if (!prompt || !apiKey) {
    return { 
      success: false, 
      error: !prompt ? 'Prompt is required' : 'API key is required' 
    };
  }
  
  // For demonstration purposes, we're mocking the API call
  // In a real application, this would be replaced with actual API call
  try {
    console.log('Generating image with parameters:', {
      prompt,
      ...API_CONFIG
    });
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock response - in real implementation this would be the actual API call
    // const response = await fetch('https://api.letzai.com/generate', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({
    //     prompt,
    //     width: params.width || API_CONFIG.width,
    //     height: params.height || API_CONFIG.height,
    //     quality: params.quality || API_CONFIG.quality,
    //     creativity: params.creativity || API_CONFIG.creativity,
    //     watermark: params.watermark !== undefined ? params.watermark : API_CONFIG.watermark,
    //     systemVersion: params.systemVersion || API_CONFIG.systemVersion,
    //     mode: params.mode || API_CONFIG.mode
    //   })
    // });
    
    // Placeholder for successful response
    // Replace with randomized placeholder image path for demo
    return {
      success: true,
      imageUrl: '/images/placeholder.png'
    };
    
  } catch (error) {
    console.error('Error generating image:', error);
    return {
      success: false,
      error: 'Failed to generate image. Please try again.'
    };
  }
};

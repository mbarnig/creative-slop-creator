
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { generateImage } from '../lib/api';
import { CategoryType } from '../lib/types';
import { PROMPT_TEMPLATES } from '../config/config';

interface ImageDisplayProps {
  selectedCategory: CategoryType | null;
  values: string[];
  apiKey: string | null;
  onClear: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ 
  selectedCategory, 
  values, 
  apiKey,
  onClear
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  
  const getPrompt = (): string => {
    if (!selectedCategory) return '';
    
    const template = PROMPT_TEMPLATES.find(p => p.id === selectedCategory);
    if (!template) return '';
    
    let prompt = template.template;
    values.forEach((value, index) => {
      prompt = prompt.replace(`{${index}}`, value || `placeholder ${index}`);
    });
    
    return prompt;
  };
  
  const handleGenerate = async () => {
    if (!selectedCategory) {
      toast.error('Please select a category');
      return;
    }
    
    if (!apiKey) {
      toast.error('Please enter your API key');
      return;
    }
    
    // Check if all required fields are filled
    const hasEmptyRequiredField = values.some((value, index) => {
      const fieldLabel = PROMPT_TEMPLATES.find(p => p.id === selectedCategory)?.template.includes(`{${index}}`);
      return fieldLabel && !value;
    });
    
    if (hasEmptyRequiredField) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    const prompt = getPrompt();
    if (!prompt) {
      toast.error('Failed to generate prompt');
      return;
    }
    
    setIsGenerating(true);
    
    try {
      const result = await generateImage({
        prompt,
        apiKey
      });
      
      if (result.success && result.imageUrl) {
        setGeneratedImageUrl(result.imageUrl);
        toast.success('Image generated successfully');
      } else {
        toast.error(result.error || 'Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleClear = () => {
    setGeneratedImageUrl(null);
    onClear();
  };
  
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-400">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6">
          <h2 className="text-xl font-medium mb-4">Generated Image</h2>
          
          <div className="space-y-6">
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !selectedCategory || !apiKey}
                className="gap-2 min-w-28"
              >
                <Play size={16} />
                {isGenerating ? 'Generating...' : 'Start'}
              </Button>
              
              <Button
                onClick={handleClear}
                variant="outline"
                disabled={isGenerating || (!selectedCategory && !generatedImageUrl)}
                className="gap-2 min-w-28"
              >
                <XCircle size={16} />
                Clear
              </Button>
            </div>
            
            <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden bg-accent/30">
              {isGenerating ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              ) : generatedImageUrl ? (
                <img
                  src={generatedImageUrl}
                  alt="Generated image"
                  className="w-full h-full object-cover animate-fadeIn"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center flex-col p-8">
                  <img
                    src="/images/placeholder.png"
                    alt="Placeholder"
                    className="w-full h-full object-contain opacity-50"
                  />
                  <p className="text-sm text-muted-foreground absolute bottom-4">
                    Select a category and fill the form to generate an image
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;

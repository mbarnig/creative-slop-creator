
import React, { useMemo } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategoryType } from '../lib/types';
import { PROMPT_TEMPLATES } from '../config/config';

interface PromptDisplayProps {
  selectedCategory: CategoryType | null;
  values: string[];
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ 
  selectedCategory, 
  values 
}) => {
  const generatedPrompt = useMemo(() => {
    if (!selectedCategory) return '';
    
    const template = PROMPT_TEMPLATES.find(p => p.id === selectedCategory);
    if (!template) return '';
    
    let prompt = template.template;
    values.forEach((value, index) => {
      prompt = prompt.replace(`{${index}}`, value || `[${index}]`);
    });
    
    return prompt;
  }, [selectedCategory, values]);
  
  if (!selectedCategory || !generatedPrompt) {
    return null;
  }
  
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-400">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="glass-card">
          <AccordionItem value="prompt" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
              Generated Prompt
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="p-4 bg-secondary/50 backdrop-blur-xs rounded-md text-foreground/90 font-mono text-sm overflow-x-auto">
                {generatedPrompt}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PromptDisplay;


import React, { useState } from 'react';
import Header from '@/components/Header';
import IntroSection from '@/components/IntroSection';
import CategorySelector from '@/components/CategorySelector';
import DynamicForm from '@/components/DynamicForm';
import PromptDisplay from '@/components/PromptDisplay';
import ApiKeyInput from '@/components/ApiKeyInput';
import ImageDisplay from '@/components/ImageDisplay';
import Gallery from '@/components/Gallery';
import { CategoryType } from '@/lib/types';
import { CATEGORIES } from '@/config/config';

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [formValues, setFormValues] = useState<string[]>(['', '', '']);
  const [apiKey, setApiKey] = useState<string | null>(null);
  
  const handleSelectCategory = (category: CategoryType) => {
    setSelectedCategory(category);
    // Reset form values when changing categories
    setFormValues(['', '', '']);
  };
  
  const handleFormChange = (index: number, value: string) => {
    const newValues = [...formValues];
    newValues[index] = value;
    setFormValues(newValues);
  };
  
  const handleClear = () => {
    setSelectedCategory(null);
    setFormValues(['', '', '']);
  };
  
  return (
    <div className="min-h-screen pb-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto">
        <Header />
        
        <div className="space-y-6">
          <IntroSection />
          
          <CategorySelector 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleSelectCategory} 
          />
          
          {selectedCategory && (
            <DynamicForm 
              selectedCategory={selectedCategory} 
              values={formValues} 
              onChange={handleFormChange} 
            />
          )}
          
          {selectedCategory && (
            <PromptDisplay 
              selectedCategory={selectedCategory} 
              values={formValues} 
            />
          )}
          
          <ApiKeyInput onApiKeyChange={setApiKey} />
          
          <ImageDisplay 
            selectedCategory={selectedCategory}
            values={formValues}
            apiKey={apiKey}
            onClear={handleClear}
          />
          
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Index;

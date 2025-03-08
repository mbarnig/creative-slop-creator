
import React from 'react';
import { CATEGORIES } from '../config/config';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CategoryType } from '../lib/types';

interface CategorySelectorProps {
  selectedCategory: CategoryType | null;
  onSelectCategory: (category: CategoryType) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-200">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6">
          <h2 className="text-xl font-medium mb-4">Select a Category</h2>
          
          <RadioGroup 
            value={selectedCategory || undefined} 
            onValueChange={(value) => onSelectCategory(value as CategoryType)}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className={`
                  relative flex items-center space-x-2 rounded-md px-3 py-2 cursor-pointer
                  border transition-all duration-200 ease-in-out
                  ${selectedCategory === category.id 
                    ? 'border-primary/50 bg-primary/5' 
                    : 'border-border hover:border-primary/30 hover:bg-accent/50'}
                `}
              >
                <RadioGroupItem 
                  value={category.id} 
                  id={category.id}
                  className="sr-only"
                />
                <Label
                  htmlFor={category.id}
                  className="cursor-pointer flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          {selectedCategory && (
            <div className="mt-4 text-sm text-muted-foreground animate-fadeIn">
              {CATEGORIES.find(c => c.id === selectedCategory)?.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;

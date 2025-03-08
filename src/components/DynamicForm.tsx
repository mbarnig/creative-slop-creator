
import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../config/config';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CategoryType } from '../lib/types';

interface DynamicFormProps {
  selectedCategory: CategoryType | null;
  values: string[];
  onChange: (index: number, value: string) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ 
  selectedCategory, 
  values, 
  onChange 
}) => {
  const [fields, setFields] = useState<
    { label: string; placeholder: string; maxLength: number }[]
  >([]);
  
  useEffect(() => {
    if (selectedCategory) {
      const category = CATEGORIES.find(c => c.id === selectedCategory);
      if (category) {
        setFields(category.fields);
      }
    } else {
      setFields([]);
    }
  }, [selectedCategory]);
  
  if (!selectedCategory || fields.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-300">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6">
          <h2 className="text-xl font-medium mb-4">Enter Details</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {fields.map((field, index) => (
              <div key={index} className={field.label === '-' ? 'hidden' : ''}>
                <Label htmlFor={`field-${index}`} className="mb-2 block">
                  {field.label}
                </Label>
                <Input
                  id={`field-${index}`}
                  type="text"
                  placeholder={field.placeholder}
                  value={values[index] || ''}
                  onChange={(e) => onChange(index, e.target.value)}
                  maxLength={field.maxLength}
                  className="w-full transition-all bg-background/80 backdrop-blur-sm focus:bg-background"
                  disabled={field.label === '-'}
                />
                <div className="text-xs text-muted-foreground mt-1 text-right">
                  {values[index]?.length || 0}/{field.maxLength}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;


import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { INTRODUCTION_TEXT } from '../config/config';

const IntroSection: React.FC = () => {
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-100">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="glass-card">
          <AccordionItem value="introduction" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
              Introduction
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-foreground/80 leading-relaxed">
              <Markdown className="prose prose-sm dark:prose-invert max-w-none">
                {INTRODUCTION_TEXT}
              </Markdown>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default IntroSection;

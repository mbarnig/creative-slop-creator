
import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TECHNICAL_INFO_TEXT } from '../config/config';

const TechnicalInfo: React.FC = () => {
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-500">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="glass-card">
          <AccordionItem value="technical-info" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
              Technical Information
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-foreground/80 leading-relaxed">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <Markdown
                  options={{
                    overrides: {
                      h1: { component: 'h1', props: { className: 'text-2xl font-bold mt-6 mb-4' } },
                      h2: { component: 'h2', props: { className: 'text-xl font-bold mt-5 mb-3' } },
                      h3: { component: 'h3', props: { className: 'text-lg font-bold mt-4 mb-2' } },
                      p: { component: 'p', props: { className: 'mb-4' } },
                      ul: { component: 'ul', props: { className: 'list-disc pl-5 mb-4' } },
                      li: { component: 'li', props: { className: 'mb-1' } },
                      a: { component: 'a', props: { className: 'text-primary hover:underline' } },
                      blockquote: { component: 'blockquote', props: { className: 'border-l-4 border-gray-300 pl-4 italic my-4' } },
                      code: { component: 'code', props: { className: 'bg-gray-100 rounded px-1 py-0.5 text-sm font-mono' } },
                      pre: { 
                        component: 'pre', 
                        props: { 
                          className: 'bg-gray-100 rounded p-3 my-4 overflow-x-auto text-sm font-mono' 
                        } 
                      },
                    }
                  }}
                >
                  {TECHNICAL_INFO_TEXT}
                </Markdown>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TechnicalInfo;

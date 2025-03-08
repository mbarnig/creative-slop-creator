
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GALLERY_ITEMS } from '../config/config';

const Gallery: React.FC = () => {
  return (
    <div className="w-full mb-8 opacity-0 animate-fadeIn delay-400">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="glass-card">
          <AccordionItem value="gallery" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
              Slop Examples
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {GALLERY_ITEMS.map((item) => (
                  <div 
                    key={item.id} 
                    className="rounded-lg overflow-hidden bg-background/20 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Gallery;

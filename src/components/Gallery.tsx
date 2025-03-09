
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GALLERY_ITEMS } from '../config/config';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

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
                    <div className="aspect-square relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => openImageModal(item.image)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="bg-white/80 hover:bg-white"
                          onClick={() => openImageModal(item.image)}
                        >
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
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

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background/95 backdrop-blur-md">
          <div className="relative w-full max-h-[90vh] overflow-auto">
            <DialogClose className="absolute top-2 right-2 z-10">
              <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 hover:bg-background">
                <X className="h-4 w-4" />
              </Button>
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Full size image" 
                className="w-full h-auto object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;

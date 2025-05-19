
import React from "react";
import ImageSlider from "./ImageSlider";
import { cn } from "@/lib/utils";

interface NoiseSectionProps {
  title: string;
  description?: string;
  leftImage: string;
  rightImage: string;
  leftAlt: string;
  rightAlt: string;
  className?: string;
  enableSlider?: boolean;
}

const NoiseSection: React.FC<NoiseSectionProps> = ({
  title,
  leftImage,
  rightImage,
  leftAlt,
  rightAlt,
  className,
  enableSlider = false
}) => {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        
        {!enableSlider ? (
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <div className="w-full sm:w-1/2 max-w-md">
              <img 
                src={leftImage} 
                alt={leftAlt}
                className="w-full h-auto object-contain rounded-md shadow-md" 
              />
            </div>
            <div className="w-full sm:w-1/2 max-w-md">
              <img 
                src={rightImage} 
                alt={rightAlt}
                className="w-full h-auto object-contain rounded-md shadow-md" 
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <ImageSlider
              leftImage={leftImage}
              rightImage={rightImage}
              leftAlt={leftAlt}
              rightAlt={rightAlt}
              enableSlider={enableSlider}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default NoiseSection;

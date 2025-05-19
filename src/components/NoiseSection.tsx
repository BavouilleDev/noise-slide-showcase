
import React from "react";
import ImageSlider from "./ImageSlider";
import { cn } from "@/lib/utils";

interface NoiseSectionProps {
  title: string;
  description: string;
  leftImage: string;
  rightImage: string;
  leftAlt: string;
  rightAlt: string;
  className?: string;
}

const NoiseSection: React.FC<NoiseSectionProps> = ({
  title,
  description,
  leftImage,
  rightImage,
  leftAlt,
  rightAlt,
  className
}) => {
  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex justify-center">
          <ImageSlider
            leftImage={leftImage}
            rightImage={rightImage}
            leftAlt={leftAlt}
            rightAlt={rightAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default NoiseSection;

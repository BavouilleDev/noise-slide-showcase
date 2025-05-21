
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  leftImage: string;
  rightImage: string;
  leftAlt: string;
  rightAlt: string;
  className?: string;
  enableSlider?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  leftImage,
  rightImage,
  leftAlt,
  rightAlt,
  className,
  enableSlider = false
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableSlider) return;
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !enableSlider) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!enableSlider) return;
    
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  useEffect(() => {
    // Add mouseup event to document to handle cases where user releases mouse outside component
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!enableSlider) {
    return null;
  }

  return (
    <div 
      className={cn("relative w-full max-w-3xl h-[400px] select-none", className)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Right image (background) */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={rightImage} 
          alt={rightAlt}
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      
      {/* Left image (revealed by slider) with clip-path */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
        }}
      >
        <img 
          src={leftImage} 
          alt={leftAlt}
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>
      
      {/* Slider line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      />
      
      {/* Slider handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: `translateX(-50%) translateY(-50%)` }}
      >
        <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ImageSlider;

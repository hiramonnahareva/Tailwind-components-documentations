
import React from "react";    

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023",
  "https://images.unsplash.com/photo-1493238792000-8113da705763",
]; 

const ImageHover = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="flex w-[800px] h-[300px] gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="group flex-1 overflow-hidden rounded-xl transition-all duration-500 hover:flex-[3]"
          >
            <img
              src={img}
              alt="car"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 scale-105"
            />
          </div> 
        ))}
      </div>
    </div> 
  );
}; 

export default ImageHover; 

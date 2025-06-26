
import React from 'react';
import { Play } from 'lucide-react';

interface HeroBannerProps {
  onSignUp: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onSignUp }) => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="RRR - Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          RRR
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed drop-shadow-lg">
          A fictional story about two legendary revolutionaries and their journey away from home 
          before they started fighting for their country in 1920s. An epic tale of friendship, 
          courage, and revolution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
            <Play className="w-5 h-5 fill-current" />
            <span>Play</span>
          </button>
          <button 
            onClick={onSignUp}
            className="netflix-button px-8 py-3"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

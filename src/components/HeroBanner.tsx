
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
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
          alt="Featured Content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Stranger Things
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed drop-shadow-lg">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
          terrifying supernatural forces, and one strange little girl.
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

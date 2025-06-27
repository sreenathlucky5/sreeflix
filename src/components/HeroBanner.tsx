
import React from 'react';
import { Play } from 'lucide-react';

interface HeroBannerProps {
  onSignUp: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onSignUp }) => {
  return (
    <div className="position-relative d-flex align-items-center" style={{ height: '70vh' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="RRR - Featured Movie"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-gradient"></div>
      </div>
      
      <div className="position-relative container-fluid px-3 px-md-5" style={{ zIndex: 10, maxWidth: '600px' }}>
        <h1 className="display-1 fw-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          RRR
        </h1>
        <p className="fs-5 mb-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          A fictional story about two legendary revolutionaries and their journey away from home 
          before they started fighting for their country in 1920s. An epic tale of friendship, 
          courage, and revolution.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3">
          <button className="btn btn-light d-flex align-items-center justify-content-center fw-bold px-4 py-2">
            <Play className="me-2" size={20} fill="currentColor" />
            <span>Play</span>
          </button>
          <button 
            onClick={onSignUp}
            className="netflix-button btn px-4 py-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

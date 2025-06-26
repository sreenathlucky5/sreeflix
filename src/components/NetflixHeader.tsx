
import React from 'react';

interface NetflixHeaderProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const NetflixHeader: React.FC<NetflixHeaderProps> = ({ onSignIn, onSignUp }) => {
  return (
    <header className="relative z-50 px-4 md:px-12 py-4 bg-transparent">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-[#E50914] text-2xl md:text-3xl font-black">
            NETFLIX
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSignIn}
            className="hidden md:block text-white hover:text-gray-300 transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={onSignUp}
            className="netflix-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default NetflixHeader;


import React from 'react';

interface NetflixHeaderProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const NetflixHeader: React.FC<NetflixHeaderProps> = ({ onSignIn, onSignUp }) => {
  return (
    <header className="position-relative" style={{ zIndex: 50 }}>
      <div className="container-fluid px-3 px-md-5 py-3" style={{ background: 'transparent' }}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="text-danger fs-2 fs-md-1 fw-bold me-4">
              NETFLIX
            </div>
            <nav className="d-none d-md-flex">
              <a href="#" className="text-white text-decoration-none me-4 hover-effect">Home</a>
              <a href="#" className="text-white text-decoration-none me-4 hover-effect">TV Shows</a>
              <a href="#" className="text-white text-decoration-none me-4 hover-effect">Movies</a>
              <a href="#" className="text-white text-decoration-none me-4 hover-effect">New & Popular</a>
              <a href="#" className="text-white text-decoration-none me-4 hover-effect">My List</a>
            </nav>
          </div>
          
          <div className="d-flex align-items-center">
            <button 
              onClick={onSignIn}
              className="d-none d-md-block btn btn-link text-white text-decoration-none me-3"
            >
              Sign In
            </button>
            <button 
              onClick={onSignUp}
              className="netflix-button btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NetflixHeader;

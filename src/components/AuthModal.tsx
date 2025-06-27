
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitchMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onSwitchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth attempt:', { mode, email, password });
    onClose();
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1050 }}>
      <div className="bg-dark p-4 rounded mx-3" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#141414' }}>
        <button 
          onClick={onClose}
          className="btn btn-link position-absolute top-0 end-0 m-3 text-secondary p-0"
          style={{ fontSize: '1.5rem' }}
        >
          <X size={24} />
        </button>
        
        <h2 className="fs-2 fw-bold text-white mb-4">
          {mode === 'login' ? 'Sign In' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg"
              style={{ 
                backgroundColor: '#333', 
                border: '1px solid #666', 
                color: 'white',
                borderRadius: '4px'
              }}
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg"
              style={{ 
                backgroundColor: '#333', 
                border: '1px solid #666', 
                color: 'white',
                borderRadius: '4px'
              }}
              required
            />
          </div>
          
          {mode === 'signup' && (
            <div className="mb-3">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control form-control-lg"
                style={{ 
                  backgroundColor: '#333', 
                  border: '1px solid #666', 
                  color: 'white',
                  borderRadius: '4px'
                }}
                required
              />
            </div>
          )}
          
          <button 
            type="submit"
            className="netflix-button btn w-100 py-3 fs-5"
          >
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <span className="text-secondary">
            {mode === 'login' ? "New to Netflix? " : "Already have an account? "}
          </span>
          <button 
            onClick={onSwitchMode}
            className="btn btn-link text-white p-0 text-decoration-underline"
          >
            {mode === 'login' ? 'Sign up now' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

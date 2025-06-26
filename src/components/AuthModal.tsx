
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-[#141414] p-8 rounded-lg w-full max-w-md mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6">
          {mode === 'login' ? 'Sign In' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-[#333] text-white rounded border border-gray-600 focus:border-white focus:outline-none transition-colors"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-[#333] text-white rounded border border-gray-600 focus:border-white focus:outline-none transition-colors"
              required
            />
          </div>
          
          {mode === 'signup' && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-4 bg-[#333] text-white rounded border border-gray-600 focus:border-white focus:outline-none transition-colors"
                required
              />
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full netflix-button py-4 text-lg"
          >
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-gray-400">
            {mode === 'login' ? "New to Netflix? " : "Already have an account? "}
          </span>
          <button 
            onClick={onSwitchMode}
            className="text-white hover:underline transition-colors"
          >
            {mode === 'login' ? 'Sign up now' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

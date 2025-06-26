
import React, { useState } from 'react';
import NetflixHeader from '../components/NetflixHeader';
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';
import AuthModal from '../components/AuthModal';

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleSignIn = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  // Sample content data
  const contentCategories = [
    {
      title: "Trending Now",
      content: [
        { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop" },
        { id: 2, title: "The Crown", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop" },
        { id: 3, title: "Ozark", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop" },
        { id: 4, title: "Dark", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=450&fit=crop" },
        { id: 5, title: "Money Heist", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=450&fit=crop" },
      ]
    },
    {
      title: "Netflix Originals",
      content: [
        { id: 6, title: "House of Cards", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop" },
        { id: 7, title: "Orange is the New Black", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop" },
        { id: 8, title: "Narcos", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop" },
        { id: 9, title: "The Witcher", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=450&fit=crop" },
        { id: 10, title: "Bridgerton", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=450&fit=crop" },
      ]
    },
    {
      title: "Action & Adventure",
      content: [
        { id: 11, title: "Extraction", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop" },
        { id: 12, title: "6 Underground", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop" },
        { id: 13, title: "The Old Guard", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop" },
        { id: 14, title: "Red Notice", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=450&fit=crop" },
        { id: 15, title: "Army of the Dead", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=450&fit=crop" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <NetflixHeader onSignIn={handleSignIn} onSignUp={handleSignUp} />
      <HeroBanner onSignUp={handleSignUp} />
      
      <div className="px-4 md:px-12 pb-8 space-y-8">
        {contentCategories.map((category, index) => (
          <ContentRow 
            key={index}
            title={category.title}
            content={category.content}
          />
        ))}
      </div>

      {showAuthModal && (
        <AuthModal 
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
        />
      )}
    </div>
  );
};

export default Index;

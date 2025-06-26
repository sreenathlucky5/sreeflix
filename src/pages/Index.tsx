
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

  // Movie poster style content data with actual movie-like images
  const contentCategories = [
    {
      title: "Trending Now",
      content: [
        { id: 1, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&crop=faces" },
        { id: 2, title: "Inception", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&crop=faces" },
        { id: 3, title: "The Matrix", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop" },
        { id: 4, title: "Interstellar", image: "https://images.unsplash.com/photo-1446776656981-33add2d4a28c?w=300&h=450&fit=crop" },
        { id: 5, title: "Blade Runner 2049", image: "https://images.unsplash.com/photo-1518837695072-80d6fb74dd2d?w=300&h=450&fit=crop" },
        { id: 6, title: "Mad Max: Fury Road", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop" },
      ]
    },
    {
      title: "Netflix Originals",
      content: [
        { id: 7, title: "Stranger Things", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" },
        { id: 8, title: "The Crown", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=450&fit=crop" },
        { id: 9, title: "Ozark", image: "https://images.unsplash.com/photo-1489599328009-11fd0f049c1d?w=300&h=450&fit=crop" },
        { id: 10, title: "House of Cards", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=450&fit=crop" },
        { id: 11, title: "Orange is the New Black", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=450&fit=crop" },
        { id: 12, title: "The Witcher", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" },
      ]
    },
    {
      title: "Action & Adventure",
      content: [
        { id: 13, title: "John Wick", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop" },
        { id: 14, title: "The Avengers", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop" },
        { id: 15, title: "Mission Impossible", image: "https://images.unsplash.com/photo-1489599328009-11fd0f049c1d?w=300&h=450&fit=crop" },
        { id: 16, title: "Fast & Furious", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=450&fit=crop" },
        { id: 17, title: "Wonder Woman", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop" },
        { id: 18, title: "Black Panther", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" },
      ]
    },
    {
      title: "Sci-Fi & Fantasy",
      content: [
        { id: 19, title: "Dune", image: "https://images.unsplash.com/photo-1446776656981-33add2d4a28c?w=300&h=450&fit=crop" },
        { id: 20, title: "Star Wars", image: "https://images.unsplash.com/photo-1518837695072-80d6fb74dd2d?w=300&h=450&fit=crop" },
        { id: 21, title: "Avatar", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
        { id: 22, title: "Guardians of the Galaxy", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop" },
        { id: 23, title: "Doctor Strange", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" },
        { id: 24, title: "Thor", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop" },
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

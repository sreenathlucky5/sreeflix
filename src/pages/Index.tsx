
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

  // Movie poster style content data with proper poster images
  const contentCategories = [
    {
      title: "Trending Now",
      content: [
        { id: 1, title: "RRR", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=450&fit=crop&crop=top" },
        { id: 2, title: "Pushpa", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop&crop=top" },
        { id: 3, title: "Baahubali 2", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop&crop=top" },
        { id: 4, title: "KGF Chapter 2", image: "https://images.unsplash.com/photo-1489599328009-11fd0f049c1d?w=300&h=450&fit=crop&crop=top" },
        { id: 5, title: "Top Gun: Maverick", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=450&fit=crop&crop=top" },
        { id: 6, title: "Avatar: The Way of Water", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&crop=top" },
        { id: 7, title: "Black Panther", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop&crop=top" },
        { id: 8, title: "Spider-Man", image: "https://images.unsplash.com/photo-1518837695072-80d6fb74dd2d?w=300&h=450&fit=crop&crop=top" },
      ]
    },
    {
      title: "Telugu Movies",
      content: [
        { id: 9, title: "Ala Vaikunthapurramuloo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=top" },
        { id: 10, title: "Arjun Reddy", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=450&fit=crop&crop=top" },
        { id: 11, title: "Rangasthalam", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop&crop=top" },
        { id: 12, title: "Geetha Govindam", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop&crop=top" },
        { id: 13, title: "Sarileru Neekevvaru", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=450&fit=crop&crop=top" },
        { id: 14, title: "Jersey", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=450&fit=crop&crop=top" },
      ]
    },
    {
      title: "Netflix Originals",
      content: [
        { id: 15, title: "Stranger Things", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=450&fit=crop&crop=top" },
        { id: 16, title: "The Crown", image: "https://images.unsplash.com/photo-1534329539061-64caeb388c42?w=300&h=450&fit=crop&crop=top" },
        { id: 17, title: "Ozark", image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=300&h=450&fit=crop&crop=top" },
        { id: 18, title: "House of Cards", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop&crop=top" },
        { id: 19, title: "Orange is the New Black", image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=300&h=450&fit=crop&crop=top" },
        { id: 20, title: "The Witcher", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop&crop=top" },
      ]
    },
    {
      title: "Hollywood Blockbusters",
      content: [
        { id: 21, title: "John Wick", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop&crop=top" },
        { id: 22, title: "The Avengers", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop&crop=top" },
        { id: 23, title: "Mission Impossible", image: "https://images.unsplash.com/photo-1489599328009-11fd0f049c1d?w=300&h=450&fit=crop&crop=top" },
        { id: 24, title: "Fast & Furious", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=450&fit=crop&crop=top" },
        { id: 25, title: "Wonder Woman", image: "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=300&h=450&fit=crop&crop=top" },
        { id: 26, title: "Batman", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop&crop=top" },
      ]
    },
    {
      title: "Action & Adventure",
      content: [
        { id: 27, title: "Dune", image: "https://images.unsplash.com/photo-1446776656981-33add2d4a28c?w=300&h=450&fit=crop&crop=top" },
        { id: 28, title: "Star Wars", image: "https://images.unsplash.com/photo-1518837695072-80d6fb74dd2d?w=300&h=450&fit=crop&crop=top" },
        { id: 29, title: "Avatar", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&crop=top" },
        { id: 30, title: "Guardians of the Galaxy", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop&crop=top" },
        { id: 31, title: "Doctor Strange", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop&crop=top" },
        { id: 32, title: "Thor", image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1dff?w=300&h=450&fit=crop&crop=top" },
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

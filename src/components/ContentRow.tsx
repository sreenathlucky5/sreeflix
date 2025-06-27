
import React from 'react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
}

interface ContentRowProps {
  title: string;
  content: ContentItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, content }) => {
  // Add defensive check for content array
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="mb-5">
      <h2 className="fs-2 fw-bold text-white mb-4 px-3 px-md-0">
        {title}
      </h2>
      <div className="d-flex overflow-auto scrollbar-hide px-3 px-md-0 pb-4" style={{ gap: '0.5rem' }}>
        {content.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 position-relative"
            style={{ width: '150px', cursor: 'pointer' }}
          >
            <div className="position-relative bg-secondary rounded overflow-hidden content-card" style={{ aspectRatio: '2/3' }}>
              <img 
                src={item.image}
                alt={item.title}
                className="w-100 h-100 object-fit-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&crop=top";
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3 hover-overlay">
                <h3 className="text-white fw-semibold small lh-sm hover-title" style={{ 
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .content-card:hover .hover-overlay {
          background-color: rgba(0,0,0,0.7) !important;
        }
        
        .content-card:hover .hover-title {
          opacity: 1 !important;
        }
        
        .hover-overlay {
          background-color: transparent;
          transition: background-color 0.3s;
        }
        
        @media (min-width: 768px) {
          .content-card {
            width: 200px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentRow;

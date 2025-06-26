
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
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white px-4 md:px-0">
        {title}
      </h2>
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide px-4 md:px-0 pb-4">
        {content.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-[150px] md:w-[200px] group cursor-pointer"
          >
            <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-gray-800 transform transition-all duration-300 group-hover:scale-110 group-hover:z-10">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop&crop=top";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-3">
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;

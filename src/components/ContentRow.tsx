
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
  return (
    <div className="space-y-2">
      <h2 className="text-xl md:text-2xl font-bold text-white px-4 md:px-0">
        {title}
      </h2>
      <div className="content-row px-4 md:px-0">
        {content.map((item) => (
          <div 
            key={item.id}
            className="content-card group relative"
          >
            <img 
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;

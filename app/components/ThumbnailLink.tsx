// components/ThumbnailLink.tsx
import React from 'react';

interface ThumbnailLinkProps {
  href: string;
  imgSrc: string;
  label: string;
}

const ThumbnailLink: React.FC<ThumbnailLinkProps> = ({ href, imgSrc, label }) => {
  return (
    <a href={href} className="block w-30 h-20">
      <img src={imgSrc} alt={label} className="w-full h-full object-cover border-2 border-gray-300"/>
      <p className="text-center">{label}</p>
    </a>
  );
};

export default ThumbnailLink;

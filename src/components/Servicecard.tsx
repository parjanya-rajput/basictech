import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconPlaceholder: React.ReactNode;
  gradientDirection: 'ltr' | 'rtl';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconPlaceholder, gradientDirection }) => {
  // Dynamic gradient class based on direction (left-to-right or right-to-left)
  const gradientClass =
    gradientDirection === 'rtl'
      ? 'bg-gradient-to-r from-blue-100/80 to-green-100/80' // Right-to-left gradient
      : 'bg-gradient-to-l from-blue-100/80 to-green-100/80'; // Left-to-right gradient

  return (
    <div className={`rounded-xl p-6 ${gradientClass} transition-transform hover:scale-105`}>
      {/* Icon container */}
      <div className="h-12 w-12 mb-4">
        {/* Placeholder div for the icon with background, rounded corners, and centering */}
        <div className="h-full w-full bg-blue-200/50 rounded-md flex items-center justify-center text-black">
          {/* Render the icon placeholder passed as a prop */}
          {iconPlaceholder}
        </div>
      </div>
      {/* Title */}
      <h3 className="text-blue-800 font-medium mb-2 font-agrandir-heavy">{title}</h3>
      {/* Description */}
      <p className="text-sm text-blue-600/70 font-agrandir">{description}</p>
    </div>
  );
};

export default ServiceCard;
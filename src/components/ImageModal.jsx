import React from 'react';

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-7xl max-h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{ maxHeight: 'calc(100vh - 8rem)' }}
        />
      </div>
    </div>
  );
}
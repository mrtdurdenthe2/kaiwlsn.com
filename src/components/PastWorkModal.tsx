'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WorkItem } from '@/lib/pastWork';

type PastWorkModalProps = {
  item: WorkItem;
  onClose: () => void;
};

export default function PastWorkModal({ item, onClose }: PastWorkModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Lock scroll
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalStyle; };
  }, []);

  // Trigger blur fade-in on mount
  useEffect(() => {
    // Wait for next frame to ensure initial class applied
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 transition-all duration-300 ease-out ${isVisible ? 'backdrop-blur-md' : 'backdrop-blur-0'} flex items-center justify-center z-50`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl max-w-xl w-full mx-4"
        onClick={handleContentClick}
      >
        <div className="relative w-full h-64 sm:h-80 lg:h-96">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-500 hover:text-gray-700 ml-4 focus:outline-none"
            >
              ×
            </button>
          </div>
          <p className="mt-4 text-gray-600">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

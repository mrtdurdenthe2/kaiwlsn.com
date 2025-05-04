'use client';

import { useState } from 'react';
import ShowcaseUI from '@/components/ShowcaseUI';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { motion } from 'motion/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function ExpandableShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative w-full bg-white border border-gray-300 rounded-[14px] p-4">
      <div
        className={`w-full overflow-hidden transition-[max-height] duration-300 ease-out ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-[300px]'
        }`}
      >
        <ShowcaseUI />
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3"
      >
        <ProgressiveBlur blurIntensity={1} className="h-full w-full rounded-b-[14px]" />
      </motion.div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`${inter.className} absolute bottom-2 right-2 bg-white text-black text-[14px] font-normal rounded px-3 py-1 shadow-md`}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}

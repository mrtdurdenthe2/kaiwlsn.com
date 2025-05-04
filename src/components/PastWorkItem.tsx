'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WorkItem } from '@/lib/pastWork';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

type PastWorkItemProps = {
  item: WorkItem;
  onClick: () => void;
};

export default function PastWorkItem({ item, onClick }: PastWorkItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative overflow-hidden cursor-pointer box-border border border-[#EDEDED] rounded-[14px] w-[682px] h-[372px] p-[26px] px-[45px] flex justify-center items-center flex-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className="relative w-full h-full">
        <Image src={item.imageUrl} alt={item.title} fill className="object-cover rounded-[11px]" />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-20 rounded-[11px] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, easing: 'easeOut' }}
        >
          <ProgressiveBlur
            direction="bottom"
            className="relative w-full h-full rounded-[11px]"
            blurLayers={3}
            blurIntensity={2}
          />
        </motion.div>
      </div>
      <button
        onClick={onClick}
        className="absolute left-[610px] top-[304px] z-10 w-[46px] h-[46px] p-[11px] flex items-center justify-center gap-[10px] bg-[#FDFDFD] shadow-[0px_4px_41.1px_rgba(0,0,0,0.25)] rounded-[14px] opacity-0 transition-opacity group-hover:opacity-100"
      >
        <ArrowsPointingOutIcon className="w-[24px] h-[24px] stroke-[#323232]" />
      </button>
    </div>
  );
}

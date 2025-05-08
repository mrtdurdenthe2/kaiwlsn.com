"use client";

import { GlowEffect } from '@/components/ui/glow-effect';
import { Inter, Victor_Mono } from 'next/font/google';
import ExpandableShowcase from '@/components/ExpandableShowcase';
import { motion } from 'motion/react';
import { TextEffect } from '@/components/ui/text-effect';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });
const victorMono = Victor_Mono({ subsets: ['latin'], weight: ['200', '300'] });

// Variants for staggered entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.21 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Create a motion-enabled section elements
const MotionSection = motion.create('section');

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col items-center p-4 sm:p-0`}>
      <MotionSection
        className="relative w-full max-w-[516px] flex flex-col items-start p-0 gap-[32px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name and Age row */}
        <div className="flex flex-row items-end p-0 gap-[12px] sm:gap-[18px] w-full max-w-[288px] h-auto sm:h-[61px]">
          <motion.div variants={itemVariants}>
            <TextEffect
              per="char"
              preset="fade-in-blur"
              as="div"
              speedReveal={1}
              speedSegment={0.4}
              className={`${victorMono.className} flex-none flex items-center font-[300] text-5xl sm:text-7xl leading-tight sm:leading-[94px] text-black`}
            >
              Kai
            </TextEffect>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.2, duration: 0.5 }} variants={itemVariants} className="relative flex-none z-0">
            <GlowEffect className="z-[-1]"
              colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={0.94}
            />
            <div
              className="flex-none box-border inline-flex items-center justify-center p-[2px] gap-[10px] order-1 shadow-[0px_4px_61px_#DCDCDC,_inset_0px_2px_1.3px_rgba(255,255,255,0.6),_inset_0px_-2px_2px_rgba(255,255,255,0.6)] rounded-full"
              style={{
                background: 'linear-gradient(0deg, #FFFFFF 0%, #CFCFCF 51%, #FFFFFF 100%)',
              }}
            >
              <div className="flex-none inline-flex justify-center items-center px-[9px] sm:px-[11px] py-[3px] sm:py-[5px] gap-[10px] bg-[#F1F1F1] shadow-[0px_4px_61px_#DCDCDC,_inset_0px_2px_1.3px_rgba(255,255,255,0.6),_inset_0px_-2px_2px_rgba(255,255,255,0.6)] rounded-full">
                <TextEffect per="char" preset="fade" as="span" className={`${victorMono.className} flex items-center font-[200] text-lg sm:text-xl leading-snug sm:leading-[27px] text-black`}>v18</TextEffect>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Description */}
        <motion.div variants={itemVariants} className="w-full">
          <TextEffect per="word" preset="fade-in-blur" as="p" speedReveal={4} speedSegment={0.3} className={`${inter.className} w-full font-[400] text-sm sm:text-[14px] leading-normal sm:leading-[19px] text-[#313131] m-0`}>
            is an interface designer and frontend engineer from England, interested in
            machine learning, running businesses, and a bunch of other nerd stuff.

            however, he&apos;d rather you judge him based on his work
          </TextEffect>
        </motion.div>
        <div className="flex flex-col items-start w-full gap-[10px]">
          <motion.div variants={itemVariants} className="w-full">
            <TextEffect
              per="char"
              preset="fade-in-blur"
              speedReveal={3.2}
              speedSegment={0.3}
              as="p"
              delay={0.7}
              className={`${inter.className} text-lg sm:text-xl font-normal text-black mb-2`}
            >
              Latest Piece
            </TextEffect>
          </motion.div>
          {/* Expandable UI Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.7, duration: 1 }}
            className="w-full"
          >
            <ExpandableShowcase />
          </motion.div>
        </div>
      </MotionSection>
    </main>
  );
}

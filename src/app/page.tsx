"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowTopRightIcon } from '@/components/icons';
import { TextEffect } from '@/components/ui/text-effect';

  
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

// Procedural data for Projects
type ProjectItem = {
  title: string;
  description?: string;
  href: string;
};

const projects: ProjectItem[] = [
  { title: 'corewatch', description: 'Rust-based web analytics server', href: 'https://github.com/mrtdurdenthe2/corewatch' },
  { title: 'shortlife', description: 'CLI based timer that counts down till a certain age',href: 'https://github.com/mrtdurdenthe2/shortlife' },
  { title: 'progessiveblurcn', description: 'Simple, true progressive blur component', href: 'https://github.com/mrtdurdenthe2/progessiveblurcn' },
];

const signaturePaths = [
  'M30.8439 80.5C37.2466 55.7284 44.3228 28.1498 49 11',
  'M30.8439 80.5C39.5916 76.2023 55.7472 66.4325 68.3923 54',
  'M30.8439 80.5C29.3785 86.1692 27.9223 91.8485 26.5 97.4512',
  'M68.3923 54C73.8915 48.5932 82.7267 36.6829 86 30.5',
  'M68.3923 54C60.7214 67.7049 46.9388 89.7052 34.5462 112.983',
  'M34.5462 112.983C22.0722 136.414 11.0066 161.138 9 180C10.0421 169.788 18.1923 130.177 26.5 97.4512',
  'M34.5462 112.983C32.1156 108.098 29.4429 102.92 26.5 97.4512',
  'M34.5462 112.983C57.5549 159.223 58.8822 179.236 62.5 172C65.7873 165.425 71.4187 154.585 77.702 144.5',
  'M77.702 144.5C89.5769 125.441 105.566 103.725 121 93C119.833 106 117.5 132.3 117.5 133.5',
  'M77.702 144.5C77.8014 158.5 85.9 175.9 117.5 133.5',
  'M117.5 133.5C117.5 151.5 126 162.2 158 89C161.2 175.4 172.167 149.833 177.5 125',
  'M150.5 38.5C153.167 29.3333 164 8.99999 177.5 9',
];

export default function Home() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    pathRefs.current.forEach((path, index) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      // Force layout so dash array is applied before animation
      path.getBBox();
      path.style.transition = 'stroke-dashoffset 1s ease-out';
      path.style.transitionDelay = `${index * 0.01}s`;
      path.style.strokeDashoffset = '0';
    });
    const svg = svgRef.current;
    if (svg) {
      svg.style.visibility = 'visible';
    }
  }, []);

  return (
    <main className={`${inter.className} flex justify-center items-start min-h-screen px-6`}>
      <div className="flex flex-col items-end gap-[36px] pt-15">
        <div className="flex flex-col items-center sm:items-end gap-[36px] w-full">
          <div className="flex flex-col items-start gap-[31px] w-full">
            <div className="relative w-[84px] h-[83px]">
              <svg
                ref={svgRef}
                viewBox="0 0 186 182"
                style={{ visibility: 'hidden' }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <title>Animated signature outline</title>
                <defs>
                  <mask id="revealMask">
                    <rect width="100%" height="100%" fill="black" />
                    {signaturePaths.map((d, index) => (
                      <path
                        key={`signature-segment-${index}`}
                        ref={(el) => {
                          pathRefs.current[index] = el;
                        }}
                        d={d}
                        stroke="white"
                        strokeWidth={17}
                        fill="none"
                      />
                    ))}
                  </mask>
                </defs>
                <image
                  href="/signature.png"
                  width={186}
                  height={182}
                  preserveAspectRatio="xMidYMid meet"
                  mask="url(#revealMask)"
                />
              </svg>
            </div>
            <TextEffect
              as="p"
              per="word"
              preset="fade-in-blur"
              speedReveal={19}
              speedSegment={0.66}
              className="font-[450] text-[15px] leading-[136.43%] text-[#313131] w-full sm:w-[477px] sm:text-left"
            >
              is an 18-year-old, product-orientated software engineer from England - who&apos;s interested in Rust and the TS ecosystem, and also does UI design every now and again. 
            </TextEffect>

            <motion.section
              initial={{ opacity: 0, y: 20, filter: 'blur(30px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2}}
              className="self-start w-full sm:w-[477px] space-y-[6.5px]"
            >
              <div className="flex items-center gap-3">
                <h2 className="font-normal text-[14px] text-[#8b8b8b]">Projects</h2>
                <span className="h-px flex-1 bg-[#ececec]" aria-hidden="true" />
              </div>
              <ul className="space-y-0.5">
                {projects.map((p, i) => (
                  <li key={`${p.title}-${i}`} className="w-full">
                    <Link href={p.href} className="group flex flex-col w-full py-0.5">
                      <span className="flex items-center justify-between w-full">
                        <span className="text-[16px] flex items-center gap-2">
                          <span className="font-[450] text-[#313131] transition-colors group-hover:text-blue-600">{p.title}</span>
                          {p.description && (
                            <span className="text-[#8b8b8b] text-[14px] hidden sm:inline transition-colors group-hover:text-[#313131]">
                              <span className="inline-block w-[0.9em]" aria-hidden="true" />
                              {p.description}
                            </span>
                          )}
                        </span>
                        <ArrowTopRightIcon className="text-[#8b8b8b] transition-colors group-hover:text-[#313131] flex-shrink-0" />
                      </span>
                      {p.description && (
                        <span className="text-[#8b8b8b] text-[14px] sm:hidden transition-colors group-hover:text-[#313131]">
                          {p.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}

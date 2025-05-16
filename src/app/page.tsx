"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { GithubLogoIcon,  FolderIcon} from '@phosphor-icons/react';
import { useRef, useLayoutEffect } from 'react';
import { TextEffect } from '@/components/ui/text-effect';
import { motion } from 'motion/react';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      // Force a layout so the animation triggers correctly
      path.getBBox();
      path.style.transition = 'stroke-dashoffset 2s ease-in';
      path.style.strokeDashoffset = '0';
    }
    const svg = svgRef.current;
    if (svg) {
      svg.style.visibility = 'visible';
    }
  }, []);

  return (
    <main className={`${inter.className} flex justify-center items-center min-h-screen px-6`}>
      <div className="flex flex-col items-end gap-[36px]">
        <div className="flex flex-col items-center sm:items-end gap-[36px] w-full">
          <div className="flex flex-col items-start gap-[31px] w-full">
            <div className="relative w-[167px] h-[165px]">
              <svg ref={svgRef} viewBox="0 0 186 182" style={{ visibility: 'hidden' }} className="absolute top-0 left-0 w-full h-full">
                <defs>
                  <mask id="revealMask">
                    <rect width="100%" height="100%" fill="black" />
                    <path
                      ref={pathRef}
                      d="M30.8439 80.5C37.2466 55.7284 44.3228 28.1498 49 11M30.8439 80.5C39.5916 76.2023 55.7472 66.4325 68.3923 54M30.8439 80.5C29.3785 86.1692 27.9223 91.8485 26.5 97.4512M68.3923 54C73.8915 48.5932 82.7267 36.6829 86 30.5M68.3923 54C60.7214 67.7049 46.9388 89.7052 34.5462 112.983M34.5462 112.983C22.0722 136.414 11.0066 161.138 9 180C10.0421 169.788 18.1923 130.177 26.5 97.4512M34.5462 112.983C32.1156 108.098 29.4429 102.92 26.5 97.4512M34.5462 112.983C57.5549 159.223 58.8822 179.236 62.5 172C65.7873 165.425 71.4187 154.585 77.702 144.5M77.702 144.5C89.5769 125.441 105.566 103.725 121 93C119.833 106 117.5 132.3 117.5 133.5M77.702 144.5C77.8014 158.5 85.9 175.9 117.5 133.5M117.5 133.5C117.5 151.5 126 162.2 158 89C161.2 175.4 172.167 149.833 177.5 125M150.5 38.5C153.167 29.3333 164 8.99999 177.5 9"
                      stroke="white"
                      strokeWidth={17}
                      fill="none"
                    />
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
              className="font-normal text-[14px] leading-[136.43%] text-[#313131] w-full sm:w-[477px] sm:text-left"
            >
              is an interface designer and frontend engineer from England, interested in functional design, Rust, running businesses, and a bunch of other nerd stuff. He is currently running designwithvalinor.com - a design agency currently on hold due to school work :/
            </TextEffect>
            <div className="flex flex-row items-center gap-[17px] self-end">
              <motion.div initial={{ opacity: 0, y: 10, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.2, duration: 0.5 }}>
                <Link href="https://github.com/mrtdurdenthe2" className="flex flex-row items-center gap-[4px] p-[9px] sm:p-0 rounded-[9px] outline-1 outline-black/6 sm:outline-none sm:rounded-none">
                  <GithubLogoIcon size={16} weight="duotone" className="text-[#717171]" />
                  <span className="font-normal text-[14px] leading-[136.43%] no-underline sm:underline text-[#717171] hover:text-black transition-colors duration-200">
                    Github
                  </span>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3, duration: 0.5 }}>
                <Link href="/currentproject" className="flex flex-row items-center gap-[4px] p-[9px] sm:p-0 rounded-[9px] outline-1 outline-black/6 sm:outline-none sm:rounded-none">
                  <FolderIcon size={16} weight="duotone" className="text-[#717171]" />
                  <span className="font-normal text-[14px] leading-[136.43%] no-underline sm:underline text-[#717171] hover:text-black transition-colors duration-200">
                    Recent project
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

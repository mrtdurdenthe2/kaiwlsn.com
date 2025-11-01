"use client";

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'motion/react';
import { Fragment, type ComponentType, useState } from 'react';

type NavIconProps = {
  size?: number;
  className?: string;
};

const iconStrokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function HomeIcon({ size = 24, className }: NavIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...iconStrokeProps}
    >
      <path d="M3.5 10.5 12 3l8.5 7.5" />
      <path d="M5.5 11.5V20a1 1 0 0 0 1 1h4.5v-4.5h2V21H17a1 1 0 0 0 1-1v-8.5" />
    </svg>
  );
}

function SuitcaseIcon({ size = 24, className }: NavIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...iconStrokeProps}
    >
      <rect x="3.5" y="7.5" width="17" height="11.5" rx="2" />
      <path d="M9 5.5h6a1 1 0 0 1 1 1V7.5H8V6.5a1 1 0 0 1 1-1Z" />
      <path d="M3.5 13h17" />
    </svg>
  );
}

function BookIcon({ size = 24, className }: NavIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...iconStrokeProps}
    >
      <path d="M5.5 5.5h5.25a2.25 2.25 0 0 1 2.25 2.25V20H7.75a2.25 2.25 0 0 0-2.25 2.25V5.5Z" />
      <path d="M18.5 5.5h-5.25A2.25 2.25 0 0 0 11 7.75V20h5.25a2.25 2.25 0 0 1 2.25 2.25V5.5Z" />
      <path d="M11 9.5h-4" />
      <path d="M18.5 9.5h-4" />
    </svg>
  );
}

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export function NavBar() {
    const pathname = usePathname();
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const activeId = hoveredId ?? pathname;

    // Define navigation items
    const navItems: { href: string; text: string; icon: ComponentType<NavIconProps> }[] = [
        { href: "/", text: "Home", icon: HomeIcon },
        { href: "/pastwork", text: "Past Work", icon: SuitcaseIcon },
        { href: "/blog", text: "Blog", icon: BookIcon }
    ];

    return (
        <LayoutGroup>
            <motion.div
                onMouseLeave={() => setHoveredId(null)}
                className={`${inter.className} box-border flex flex-row justify-center items-center pt-[4px] pr-[10px] pb-[4px] pl-[4px] gap-[21px] bg-[#F3F3F3] border border-[#EDEDED] rounded-[14px]`}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0, duration: 0.3 }}
            >
                {navItems.map((item, index) => {
                    const isSelected = pathname === item.href;
                    const isActive = activeId === item.href;
                    const Icon = item.icon;
                    return (
                        <Fragment key={item.href}>
                            <Link
                                href={item.href}
                                data-id={item.href}
                                className="relative"
                                onMouseEnter={() => setHoveredId(item.href)}
                            >
                            <div className={`relative z-10 inline-flex items-center pt-[5px] pr-[8px] pb-[5px] pl-[8px] ${
                                isSelected ? 'gap-[10px] rounded-[10px]' : 'gap-[13px] rounded-[3.83681px]'
                            }`}>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-background"
                                        className="absolute inset-0 bg-white/80 rounded-[10px] -z-10 pointer-events-none"
                                        transition={{ type: 'spring', duration: 0.3 }}
                                    />
                                )}
                                {isSelected && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 24, opacity: 1 }}
                                        transition={{ type: 'spring', duration: 0.3 }}
                                        className="flex-shrink-0 flex items-center justify-center"
                                    >
                                        <Icon size={24} />
                                    </motion.span>
                                )}
                                <span
                                    className={`font-normal text-[20px] leading-[26px] tracking-[-0.03em] whitespace-nowrap ${
                                        isSelected ? 'text-black' : 'text-[#313131]'
                                    }`}
                                >
                                    {item.text}
                                </span>
                            </div>
                            </Link>
                            {index === 0 && (
                                <div className="w-[14px] h-0 border border-white -rotate-90 flex-none" />
                            )}
                        </Fragment>
                    );
                })}
            </motion.div>
        </LayoutGroup>
    );
}

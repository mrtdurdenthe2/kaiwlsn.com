"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { motion, LayoutGroup } from 'motion/react';
import { House, Suitcase, BookOpen } from '@phosphor-icons/react';
import React, { Fragment, useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export function NavBar() {
    const pathname = usePathname();
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const activeId = hoveredId ?? pathname;

    // Define navigation items
    const navItems: { href: string; text: string; icon: React.ComponentType<{ size?: number; weight?: string }> }[] = [
        { href: "/", text: "Home", icon: House },
        { href: "/pastwork", text: "Past Work", icon: Suitcase },
        { href: "/blog", text: "Blog", icon: BookOpen }
    ];

    return (
        <LayoutGroup>
            <motion.div
                onMouseLeave={() => setHoveredId(null)}
                className={`${inter.className} box-border flex flex-row justify-center items-center pt-[4px] pr-[10px] pb-[4px] pl-[4px] gap-[21px] bg-[#F3F3F3] border border-[#EDEDED] rounded-[14px]`}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.5, duration: 0.6 }}
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
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                                    />
                                )}
                                {isSelected && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 24, opacity: 1 }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                                        className="flex-shrink-0 flex items-center justify-center"
                                    >
                                        <Icon size={24} weight="fill" />
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

"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export function NavBar() {
    const pathname = usePathname();

    // Define navigation items
    const navItems = [
        { href: "/", text: "Home" },
        { href: "/currentproject", text: "Current Project" },
        { href: "/pastwork", text: "Past Work" },
        { href: "/blog", text: "Blog" }
    ];

    return (
        <div className={`${inter.className} flex flex-row justify-center items-center p-[2px] bg-gradient-to-b from-white via-[#D3D3D3] to-white shadow-[0px_4px_61px_#DCDCDC,0px_4px_89.3px_rgba(0,0,0,0.1),inset_0px_2px_1.3px_rgba(255,255,255,0.6),inset_0px_-2px_2px_rgba(255,255,255,0.6)] rounded-[14px] max-w-full`}>
            <div className="box-border flex flex-row flex-wrap justify-center items-center py-[4px] px-[1px] gap-[32px] bg-white rounded-[14px]">
                <AnimatedBackground
                    defaultValue={pathname}
                    enableHover
                    className="rounded-[6px] bg-[#F4F4F4]"
                    transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3
                    }}
                >
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            key={item.href}
                            data-id={item.href}
                            className="group mx-2"
                        >
                            <div className="flex flex-row justify-center items-center px-[10px] py-[7px] h-[38px]">
                                <span className="font-normal text-[20px] leading-[24px] flex items-center tracking-[-0.03em] text-center whitespace-nowrap text-[#626262] group-data-[checked=true]:text-black">
                                    {item.text}
                                </span>
                            </div>
                        </Link>
                    ))}
                </AnimatedBackground>
            </div>
        </div>
    );
}

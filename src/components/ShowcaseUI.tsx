'use client';

import Image from 'next/image';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { Check } from 'lucide-react';

export default function ShowcaseUI() {
    return (
        <div className="relative overflow-hidden flex flex-col justify-center items-center">
            <style jsx global>{`
                @keyframes blurIn {
                    0% {
                        opacity: 0;
                        filter: blur(20px);
                        transform: scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        filter: blur(0);
                        transform: scale(1);
                    }
                }

                .blur-in-animation {
                    animation: blurIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            <div className="blur-in-animation box-border flex flex-row items-center p-9 gap-2.5 w-[420px] bg-[radial-gradient(175.12%_26.19%_at_50.07%_-1.48%,#001D37_0%,#000000_100%)] border border-[#373737] border-opacity-60 rounded-[14px]">
                <div className="flex flex-col items-center p-0 gap-[46px] w-full">
                    {/* Logo Header */}
                    <div className="flex flex-col items-center p-0 gap-7 w-[170px]">
                        <div className="w-[170px] h-[46px] bg-[url('/logo.png')] bg-contain bg-no-repeat" />
                        <span className="font-geist font-bold flex items-center justify-center text-center bg-gradient-to-r from-white to-white bg-clip-text text-transparent w-full">
                            Create your account
                        </span>
                    </div>

                    {/* Form Content */}
                    <div className="flex flex-col items-start p-0 gap-[26px] w-full">
                        {/* Google Sign Up Button */}
                        <button className="box-border flex flex-row justify-center items-center py-[11px] px-[14px] gap-2.5 w-full h-12 bg-white border border-[#373737] border-opacity-60 rounded-xl">
                            <GoogleIcon />
                            <span className="font-geist font-normal flex items-center text-[#565656]">
                                Sign up with Google
                            </span>
                        </button>

                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-500"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-black px-2 text-gray-300">
                                    or continue with email
                                </span>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="flex flex-col items-center p-0 gap-[30px] w-full">
                            {/* Email Field */}
                            <div className="flex flex-col items-start p-0 gap-2 w-full">
                                <label className="font-geist font-normal text-xs leading-4 flex items-center text-[#CBCBCB]">
                                    Email
                                </label>
                                <div className="box-border flex flex-row items-center py-3.5 px-4 gap-2.5 w-full h-12 bg-[#0F0F0F] border border-[#373737] border-opacity-60 rounded-xl">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full bg-transparent border-none outline-none text-white font-geist font-normal"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col items-start p-0 gap-2 w-full">
                                <label className="font-geist font-normal text-xs leading-4 flex items-center text-[#CBCBCB]">
                                    Password
                                </label>
                                <div className="box-border relative flex items-center py-3.5 px-4 gap-2.5 w-full h-12 bg-[#0F0F0F] border border-[#373737] border-opacity-60 rounded-xl">
                                    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#34A853]/30 to-transparent rounded-r-xl" />
                                    <input
                                        type="password"
                                        value="password"
                                        readOnly
                                        className="relative flex-1 bg-transparent border-none outline-none text-white font-geist font-normal"
                                    />
                                    <Check className="relative w-5 h-5 text-[#34A853]" />
                                </div>
                            </div>

                            {/* Sign Up Button */}
                            <button className="flex flex-row justify-center items-center py-[15px] px-0 gap-2.5 w-full h-[55px] bg-gradient-to-t from-[#0074DD] to-[#0074DD] shadow-[inset_0px_2px_0px_rgba(255,255,255,0.25)] rounded-xl cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[inset_0px_2px_0px_rgba(255,255,255,0.4),0px_4px_10px_rgba(0,116,221,0.3)] active:scale-[0.98] active:shadow-[inset_0px_1px_0px_rgba(255,255,255,0.15)]">
                                <span className="font-geist font-semibold flex items-center justify-center text-center text-white">
                                    Sign up →
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

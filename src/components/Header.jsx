"use client";
import React from "react";
import Link from "next/link";
import "animate.css";
import { Button } from "@heroui/react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="">
            <div className="relative h-[60vh] md:h-[70vh] lg:h-[70vh] w-full  mx-auto mb-6 md:mb-10  overflow-hidden shadow-2xl">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1673014202612-44eb31c40140?q=80&w=1170&auto=format&fit=crop"
                        alt="Tiles Banner"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative h-full flex items-center justify-center md:justify-start text-white">

                    <div className="max-w-2xl text-center md:text-left px-4 md:px-10 lg:px-16">

                        {/* Brand */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate__animated animate__fadeInDown">
                            Tiles <br />
                            <span className="text-[#E07A5F] text-xl sm:text-2xl md:text-3xl tracking-widest animate__animated animate__fadeInUp animate__delay-1s">
                                Gallery
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base md:text-lg mt-4 mb-6 text-gray-200 animate__animated animate__fadeInUp animate__delay-1s">
                            Discover handcrafted tile designs that bring warmth, texture,
                            and timeless beauty to your spaces.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-2s">

                            <Link href="/tiles">
                                <Button className="bg-[#E07A5F] text-white px-6 py-3 hover:scale-105 transition-transform w-full sm:w-auto">
                                    Browse Collection
                                </Button>
                            </Link>

                            <Link href="#">
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black transition w-full sm:w-auto"
                                >
                                    Learn More
                                </Button>
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 w-48 md:w-72 h-48 md:h-72 bg-[#E07A5F]/20 blur-3xl rounded-full animate-pulse" />

            </div>
        </div>
    );
};

export default Header;
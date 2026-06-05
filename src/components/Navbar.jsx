"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import NavLinks from "./NavLinks";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const userInfo = session?.user;

    console.log(userInfo);

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/signin');
    };

    return (
        <nav className="bg-[#F5F5DC] border-b border-[#e5e5d8] relative z-50">
            <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[#3D2B1F] text-2xl"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>

                    <Link href="/" className="leading-tight">
                        <h1 className="text-2xl font-bold text-[#3D2B1F]">
                            Tiles
                        </h1>
                        <p className="text-sm text-[#E07A5F] tracking-widest">
                            Gallery
                        </p>
                    </Link>
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex gap-8 md:ml-20">
                    <NavLinks />
                </div>

                {/* RIGHT SIDE AUTH */}
                <div className="flex gap-3 items-center">

                    {!session ? (
                        <>
                            <Link href="/signin">
                                <button className="px-4 py-2 text-sm text-[#E07A5F] font-bold rounded-2xl hover:opacity-80 transition">
                                    Login
                                </button>
                            </Link>

                            <Link href="/signup">
                                <button className="px-4 py-2 text-sm bg-[#E07A5F] text-white font-bold rounded-2xl hover:opacity-90 transition">
                                    SignUp
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* profile avatar use */}
                            <Link href="/my-profile" className="flex items-center gap-2">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        alt={userInfo.name}
                                        src={userInfo?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>{userInfo?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </Link>

                            {/* logout btn*/}
                            <Button
                                onClick={handleSignOut}
                                size="sm"
                                className="bg-[#3D2B1F] text-white"
                            >
                                Logout
                            </Button>
                        </>
                    )}

                </div>
            </div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#F5F5DC] border-r border-[#e5e5d8] shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-[#3D2B1F] text-2xl"
                    >
                        <HiOutlineX />
                    </button>
                </div>

                <div className="flex flex-col px-6 gap-6 mt-6">
                    <NavLinks onClick={() => setOpen(false)} />
                </div>
            </div>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40"
                />
            )}
        </nav>
    );
}
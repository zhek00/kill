"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left flex items-center px-4 py-3 hover:bg-[#fff5f5] text-red-600 font-medium transition-colors"
        >
            <LogOut size={18} className="mr-3" /> Sair
        </button>
    );
};

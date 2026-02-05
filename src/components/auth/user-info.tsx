"use client";

import { useSession, signOut } from "next-auth/react";
import { User, ChevronDown, LogOut } from "lucide-react";
import Link from "next/link";

export default function UserInfo() {
    const { data: session } = useSession();

    return (
        <>
            <div className="flex flex-col items-end mr-2">
                <span className="text-[11px] leading-tight">Olá,</span>
                <span className="text-[13px] font-bold leading-tight truncate max-w-[120px]">
                    {session?.user?.name || "visitante"}
                </span>
            </div>
            <div className="flex items-center">
                <User size={24} className="mr-1" />
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </div>

            <div className="absolute top-full right-0 mt-0 w-56 bg-white text-[#333] shadow-lg rounded-sm py-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                {session ? (
                    <ul className="text-[13px] font-medium">
                        <li className="px-4 py-2 border-b border-[#f0f0f0] text-[#999] text-[11px] uppercase tracking-wider">
                            Minha Conta
                        </li>
                        <li><Link href="/minha-conta/pedidos" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Meus Pedidos</Link></li>
                        <li><Link href="/minha-conta/dados" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Meus Dados</Link></li>
                        <li className="border-t border-[#f0f0f0] mt-1">
                            <button onClick={() => signOut()} className="w-full text-left px-4 py-2 hover:bg-[#F5F5F5] transition-colors flex items-center text-red-600">
                                <LogOut size={14} className="mr-2" /> Sair
                            </button>
                        </li>
                    </ul>
                ) : (
                    <ul className="text-[13px] font-medium">
                        <li><Link href="/usuario/cadastrar" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Cadastre-se</Link></li>
                        <li><Link href="/usuario/entrar" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Entrar</Link></li>
                        <li><Link href="/usuario/senha" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Esqueceu sua senha?</Link></li>
                    </ul>
                )}
            </div>
        </>
    );
}

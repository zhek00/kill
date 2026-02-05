"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ShoppingCart, ChevronDown, User, HelpCircle, Menu, X } from "lucide-react";
import UserInfo from "@/components/auth/user-info";

/**
 * Header component for Ingressos Sul & Serra.
 * Features a fixed gold navigation bar with logo, search bar, and user tools.
 */
export default function Header() {
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/Logo_Tche_Geral_Branco-1.png";

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#D4AF37] text-white shadow-md">
            <div className="container mx-auto max-w-[1200px] h-[70px] flex items-center justify-between px-4 md:px-0">

                {/* Logo Section */}
                <div className="flex-shrink-0 cursor-pointer">
                    <a href="/" className="flex flex-col items-start leading-none">
                        <span className="text-[20px] md:text-[24px] font-black tracking-tighter text-white uppercase italic">
                            Sul & Serra
                        </span>
                        <span className="text-[14px] md:text-[16px] font-bold tracking-widest text-[#B8860B] uppercase">
                            Passeios
                        </span>
                    </a>
                </div>

                {/* Search Bar Section */}
                <div className="hidden lg:flex flex-grow max-w-[500px] mx-8 relative">
                    <form action="/busca" className="w-full relative group">
                        <input
                            type="text"
                            name="q"
                            placeholder="O que você procura?"
                            className="w-full h-[42px] pl-5 pr-14 rounded-full border-2 border-transparent bg-white/95 text-[#333] text-[14px] outline-none font-medium placeholder:text-[#737373] focus:bg-white focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                        />
                        <button
                            type="submit"
                            className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-[#D4AF37] text-white p-2 rounded-full hover:bg-[#B8860B] transition-all shadow-sm"
                            aria-label="Buscar"
                        >
                            <Search size={18} strokeWidth={2.5} />
                        </button>
                    </form>
                </div>

                {/* Right Menu Section */}
                <div className="flex items-center space-x-6">

                    {/* Help Dropdown */}
                    <div
                        className="hidden md:flex items-center cursor-pointer relative py-2"
                        onMouseEnter={() => setIsHelpOpen(true)}
                        onMouseLeave={() => setIsHelpOpen(false)}
                    >
                        <span className="text-[14px] font-semibold mr-1">Ajuda</span>
                        <ChevronDown size={18} className={`transition-transform duration-200 ${isHelpOpen ? 'rotate-180' : ''}`} />

                        {isHelpOpen && (
                            <div className="absolute top-full left-0 mt-0 w-48 bg-white text-[#333] shadow-lg rounded-sm py-2 animate-in fade-in slide-in-from-top-1">
                                <ul className="text-[13px] font-medium">
                                    <li><a href="/sac" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">SAC</a></li>
                                    <li><a href="/cancelamento" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Cancelar cupons</a></li>
                                    <li><a href="/faq" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Dúvidas frequentes</a></li>
                                    <li><a href="/termos" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Termos e Condições</a></li>
                                    <li><a href="/sobre" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Sobre</a></li>
                                    <li><a href="/parceiro" className="block px-4 py-2 hover:bg-[#F5F5F5] transition-colors">Área do parceiro</a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <a href="/carrinho" className="relative p-2 hover:opacity-80 transition-opacity" aria-label="Carrinho">
                        <ShoppingCart size={24} />
                    </a>

                    {/* User Section */}
                    {/* User Section */}
                    <div className="hidden md:flex items-center cursor-pointer relative py-2 group">
                        <UserInfo />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Search - Visible only on mobile */}
            <div className="lg:hidden px-4 pb-3">
                <form action="/busca" className="relative group">
                    <input
                        type="text"
                        name="q"
                        placeholder="O que você procura?"
                        className="w-full h-[38px] pl-5 pr-12 rounded-full border border-transparent bg-white/95 text-[#333] text-[13px] outline-none font-medium placeholder:text-[#737373] focus:bg-white focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                    />
                    <button
                        type="submit"
                        className="absolute right-[4px] top-1/2 -translate-y-1/2 bg-[#D4AF37] text-white p-1.5 rounded-full"
                        aria-label="Buscar"
                    >
                        <Search size={16} strokeWidth={2.5} />
                    </button>
                </form>
            </div>

            {/* Mobile Sidebar Navigation */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[110px] bg-white z-[60] text-[#333] overflow-y-auto animate-in slide-in-from-right duration-300">
                    <nav className="p-4">
                        <ul className="space-y-4 font-semibold text-[15px]">
                            <li><a href="/usuario/cadastrar" className="flex items-center p-2 border-b border-[#eee]"><User size={20} className="mr-3 text-[#D4AF37]" /> Cadastre-se</a></li>
                            <li><a href="/usuario/entrar" className="flex items-center p-2 border-b border-[#eee]"><User size={20} className="mr-3 text-[#D4AF37]" /> Entre</a></li>
                            <li><a href="/usuario/inscrever" className="flex items-center p-2 border-b border-[#eee]"><ShoppingCart size={20} className="mr-3 text-[#D4AF37]" /> Receber ofertas</a></li>

                            <li className="pt-4">
                                <div className="flex items-center p-2 font-bold uppercase text-[12px] text-[#737373]">Ajuda</div>
                                <ul className="pl-4 space-y-3 mt-2 text-[14px]">
                                    <li><a href="/sac" className="block py-1 hover:text-[#D4AF37]">SAC</a></li>
                                    <li><a href="/cancelamento" className="block py-1 hover:text-[#D4AF37]">Cancelar cupons</a></li>
                                    <li><a href="/faq" className="block py-1 hover:text-[#D4AF37]">Dúvidas frequentes</a></li>
                                    <li><a href="/termos" className="block py-1 hover:text-[#D4AF37]">Termos e Condições</a></li>
                                    <li><a href="/sobre" className="block py-1 hover:text-[#D4AF37]">Sobre</a></li>
                                    <li><a href="/parceiro" className="block py-1 hover:text-[#D4AF37]">Área do parceiro</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
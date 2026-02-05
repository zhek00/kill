import React from 'react';
import Image from 'next/image';
import { MapPin, Heart } from 'lucide-react';
import Link from 'next/link';

export interface ProductCardProps {
    slug: string;
    image: string;
    discount?: number | null;
    location: string;
    title: string;
    originalPrice?: string | null;
    currentPrice: string;
    savings?: string | null;
    isExclusive?: boolean;
    megaPromo?: boolean;
    installments?: string | null;
    idv?: string | null;
}

export default function ProductCard({
    slug,
    image,
    discount,
    location,
    title,
    originalPrice,
    currentPrice,
    savings,
    isExclusive,
    megaPromo,
    installments,
    idv
}: ProductCardProps) {
    const href = `/oferta/lazer/${location ? location.toLowerCase() : 'geral'}/${slug}${idv ? `?idv=${idv}` : ''}`;

    return (
        <div className="bg-white rounded-[8px] overflow-hidden flex flex-col h-full card-shadow relative group border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            {/* Image Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Link href={href}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Top Badges */}
                <div className="absolute top-0 left-0 p-2 flex flex-col gap-1 z-10">
                    {isExclusive && (
                        <div className="bg-[#4BB05D] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                            Exclusivo
                        </div>
                    )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 z-10 text-white/80 hover:text-white drop-shadow-md">
                    <Heart size={20} />
                </button>

                {/* Bottom Image Badges */}
                <div className="absolute bottom-2 left-2 flex gap-2 items-center">
                    {megaPromo && (
                        <div className="bg-[#EF4444] text-white text-[10px] font-black px-1.5 py-1 rounded-[4px] leading-tight text-center flex flex-col items-center">
                            <span className="text-[12px]">MEGA</span>
                            <span className="mt-[-2px]">PROMO</span>
                        </div>
                    )}
                </div>

                {/* Discount Badge */}
                {discount && (
                    <div className="absolute bottom-[-15px] right-2 z-20">
                        <div className="bg-[#FF8F00] text-white font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center text-[12px] shadow-md border-2 border-white">
                            -{discount}%
                        </div>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-[15px] flex flex-col flex-grow pt-5">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                    <MapPin size={12} />
                    <span className="text-[11px] font-semibold uppercase">{location}</span>
                </div>

                <Link href={href}>
                    <h3 className="text-[#333333] text-[14px] font-semibold leading-[1.4] mb-4 line-clamp-2 h-[40px] uppercase hover:text-[#4BB05D] transition-colors">
                        {title}
                    </h3>
                </Link>

                <div className="mt-auto">
                    <div className="flex justify-between items-end mb-4">
                        {/* Left Pricing - Info badges */}
                        <div className="flex flex-col gap-1">
                            {installments && (
                                <div className="bg-[#D4AF37] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm flex flex-col items-center leading-tight">
                                    <span>EM ATÉ</span>
                                    <span className="text-[11px]">{installments}</span>
                                </div>
                            )}
                            {savings && (
                                <div className="flex flex-col">
                                    <span className="text-[#737373] text-[8px] uppercase font-bold">Economize</span>
                                    <span className="text-[#333333] text-[12px] font-bold">R$ {savings}</span>
                                </div>
                            )}
                        </div>

                        {/* Right Pricing - Actual Price */}
                        <div className="text-right">
                            <span className="text-[#737373] text-[8px] uppercase font-bold block mb-[-2px]">A partir de</span>
                            <div className="flex flex-col items-end">
                                {originalPrice && (
                                    <span className="text-[#737373] text-[12px] line-through">R$ {originalPrice}</span>
                                )}
                                <span className="text-[#333333] text-[20px] font-bold leading-none">R$ {currentPrice}</span>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={href}
                        className="w-full bg-[#4BB05D] hover:bg-[#3E8E41] text-white font-bold py-3 rounded-[4px] text-[14px] uppercase text-center block transition-colors"
                    >
                        Comprar
                    </Link>
                </div>
            </div>
        </div>
    );
}

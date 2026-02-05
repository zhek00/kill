import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, MapPin } from 'lucide-react';

interface FondueOffer {
    id: string;
    image: string;
    title: string;
    location: string;
    discount: string;
    originalPrice?: string;
    currentPrice: string;
    exclusive?: boolean;
    megaPromo?: boolean;
}

const fondueOffers: FondueOffer[] = [
    {
        id: 'chateau-da-serra',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20250513093212-19.webp',
        title: 'Chateau da Serra | Sequência de Fondue com Chocolate Branco',
        location: 'Gramado',
        discount: '-54%',
        originalPrice: '109,00',
        currentPrice: '49,90',
        exclusive: true,
        megaPromo: true,
    },
    {
        id: 'chateau-piatto',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20251119092423_1763555063894-20.webp',
        title: 'Chateau Piatto | Sequência de Fondue com Chocolate Preto e Branco',
        location: 'Gramado',
        discount: '-54%',
        currentPrice: '49,90',
        exclusive: true,
        megaPromo: true,
    },
    {
        id: 'chateau-dos-platanos',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20240318113459-21.webp',
        title: 'Chateau dos Plátanos | Sequência Completa de Fondue Tradicional',
        location: 'Gramado',
        discount: '-54%',
        currentPrice: '54,90',
        exclusive: true,
    },
    {
        id: 'chateau-sao-francisco',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20240318113459-21.webp', // Fallback to provided asset
        title: 'Chateau São Francisco | Sequência Completa de Fondue',
        location: 'Gramado',
        discount: '-50%',
        currentPrice: '59,90',
    },
];

const FondueGuide: React.FC = () => {
    return (
        <section className="py-10 bg-[#F5F5F5]">
            <div className="container px-4 mx-auto max-w-[1200px]">
                <div className="text-center mb-6">
                    <h2 className="text-[24px] font-bold text-[#333333] uppercase leading-[1.2] mb-1">
                        GUIA DO FONDUE
                    </h2>
                    <p className="text-[14px] text-[#737373] font-medium">
                        Mais de 30 opções para você encontrar o fondue ideal
                    </p>
                </div>

                <div className="relative group">
                    <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x">
                        {fondueOffers.map((offer) => (
                            <div
                                key={offer.id}
                                className="min-w-[280px] md:min-w-[calc(25%-15px)] bg-white rounded-[8px] overflow-hidden card-shadow snap-start flex flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative h-[160px] w-full">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Heart Icon */}
                                    <button className="absolute top-2 right-2 text-white drop-shadow-md hover:text-red-500 transition-colors">
                                        <Heart size={20} />
                                    </button>

                                    {/* Exclusive Badge */}
                                    {offer.exclusive && (
                                        <div className="absolute top-[102px] left-0 bg-[#4BB05D] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-r-md">
                                            Exclusivo
                                        </div>
                                    )}

                                    {/* Mega Promo Badge */}
                                    {offer.megaPromo && (
                                        <div className="absolute top-4 right-4 flex items-center justify-center">
                                            <div className="bg-red-600 text-white text-[9px] font-bold p-1 leading-tight text-center rounded">
                                                MEGA<br />PROMO
                                            </div>
                                        </div>
                                    )}

                                    {/* Discount Badge */}
                                    <div className="absolute bottom-2 right-2 flex items-center justify-center w-[40px] h-[40px] bg-[#FF8F00] text-white rounded-full text-[12px] font-bold">
                                        {offer.discount}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-[15px] flex-grow flex flex-col">
                                    <div className="flex items-center text-[#D4AF37] text-[12px] font-semibold mb-1">
                                        <MapPin size={14} className="mr-1" />
                                        {offer.location}
                                    </div>

                                    <h3 className="text-[14px] font-semibold text-[#333333] leading-[1.4] line-clamp-2 min-h-[40px] mb-4">
                                        {offer.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-center gap-4 mb-3">
                                            {/* Left: Fire Icon Placeholder (Using a simple styling to match visual) */}
                                            <div className="flex flex-col items-center">
                                                <div className="w-6 h-6 bg-[#FF8F00] rounded-full flex items-center justify-center">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2c0 0-4 4.5-4 8.5C8 13 9.7 15 12 15s4-2 4-4.5c0-4-4-8.5-4-8.5zm0 18c-3.3 0-6-2.7-6-6 0-1.1.3-2.1.8-3l.1-.2c.5.9 1.1 1.7 1.7 2.2 1 1 2.2 1.5 3.4 1.5 1.2 0 2.4-.5 3.4-1.5.6-.6 1.2-1.3 1.7-2.2l.1.2c.5.9.8 1.9.8 3 0 3.3-2.7 6-6 6z" /></svg>
                                                </div>
                                            </div>

                                            {/* Right: Pricing */}
                                            <div className="text-right">
                                                {offer.originalPrice && (
                                                    <div className="text-[10px] text-[#737373] uppercase mb-[-4px]">
                                                        DE <span className="line-through">R$ {offer.originalPrice}</span> POR
                                                    </div>
                                                )}
                                                <div className="text-[10px] text-[#737373] uppercase mb-[-4px]">
                                                    {offer.originalPrice ? "" : "A PARTIR DE"}
                                                </div>
                                                <div className="text-[20px] font-bold text-[#333333]">
                                                    R$ {offer.currentPrice}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center text-[10px] text-[#737373] mb-2">
                                            <span className="inline-block w-4 h-4 rounded-full bg-orange-500 text-white text-[8px] mr-1 leading-4">1º</span> em <span className="text-[#D4AF37] font-semibold">FONDUE</span>
                                        </div>

                                        <button className="w-full bg-[#4BB05D] text-white text-[14px] font-bold py-[10px] uppercase rounded-[4px] hover:bg-[#3E8E41] transition-colors tracking-wide">
                                            COMPRAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center text-[#D4AF37] hidden md:flex z-10">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center text-[#D4AF37] hidden md:flex z-10">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* View All Button */}
                <div className="flex justify-end mt-6">
                    <button className="bg-[#4BB05D] text-white text-[12px] font-bold px-4 py-2 rounded-[4px] uppercase hover:bg-[#3E8E41] transition-colors">
                        Ver todas
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FondueGuide;
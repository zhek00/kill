
import React from 'react';
import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { getRegionOffers } from '@/lib/product-service';
import Link from 'next/link';

interface OfferCardProps {
    slug: string;
    image: string;
    discount?: number | null;
    location: string;
    title: string;
    currentPrice: string;
    category?: string | null;
    isExclusive?: boolean;
    megaPromo?: boolean;
    idv?: string | null;
}

const OfferCard = ({ slug, image, discount, location, title, currentPrice, category, isExclusive, megaPromo, idv }: OfferCardProps) => {
    const href = `/oferta/regiao/${location.toLowerCase()}/${slug}${idv ? `?idv=${idv}` : ''}`;
    return (
        <div className="bg-white rounded-[8px] overflow-hidden flex flex-col h-full card-shadow border border-[#E0E0E0] relative group transition-transform duration-200 hover:-translate-y-1">
            {/* Image Section */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Link href={href}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </Link>

                {/* Heart Icon */}
                <button className="absolute top-2 right-2 text-white drop-shadow-md hover:scale-110 transition-transform">
                    <Heart size={20} className="fill-none stroke-[2px]" />
                </button>

                {/* Exclusive Badge */}
                {isExclusive && (
                    <div className="absolute top-3 left-0 bg-[#4BB05D] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-r-[4px]">
                        Exclusivo
                    </div>
                )}

                {/* Mega Promo Badge */}
                {megaPromo && (
                    <div className="absolute top-2 right-12">
                        <div className="bg-[#EF4444] text-white text-[10px] font-black leading-tight p-1 px-2 rounded-md shadow-lg border border-white flex flex-col items-center">
                            <span className="text-[12px]">MEGA</span>
                            <span>PROMO</span>
                        </div>
                    </div>
                )}

                {/* Discount Badge */}
                {discount && (
                    <div className="absolute bottom-2 right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-[#FF8F00] shadow-md">
                        <span className="text-[#FF8F00] font-bold text-[12px]">-{discount}%</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-[15px] flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                    <MapPin size={12} className="fill-current" />
                    <span className="text-[11px] font-bold">{location}</span>
                </div>

                <Link href={href}>
                    <h3 className="text-[13px] font-semibold text-[#333333] leading-[1.4] mb-auto min-h-[36px] line-clamp-2 uppercase hover:text-[#4BB05D] transition-colors">
                        {title}
                    </h3>
                </Link>

                <div className="mt-4 flex flex-col items-center justify-center">
                    <span className="text-[10px] text-[#737373] uppercase mb-1">A partir de</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[14px] font-bold text-[#333333]">R$</span>
                        <span className="text-[22px] font-bold text-[#333333] leading-none">{currentPrice}</span>
                    </div>
                    {category && (
                        <div className="flex items-center gap-1 mt-2">
                            <div className="bg-[#FF8F00] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">?</div>
                            <span className="text-[10px] text-[#737373]">em <span className="font-bold uppercase text-[#4BB05D] underline">{category}</span></span>
                        </div>
                    )}
                </div>
            </div>

            {/* Action Button */}
            <div className="p-[10px] pt-0">
                <Link
                    href={href}
                    className="btn-buy"
                >
                    COMPRAR
                </Link>
            </div>
        </div>
    );
};

export default async function RegionOffers() {
    const offers = await getRegionOffers();

    return (
        <section className="py-10 bg-[#F5F5F5] font-display overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1240px]">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-[#333333] text-[24px] font-bold uppercase mb-1 tracking-tight">
                        PARA APROVEITAR PORTO ALEGRE E REGIÃO METROPOLITANA
                    </h2>
                    <p className="text-[#737373] text-[14px] font-medium">
                        Ótimas ofertas pertinho de você!
                    </p>
                </div>

                {/* Slider / Grid Wrapper */}
                <div className="relative group">
                    {/* Navigation Arrows */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/80 rounded-full p-2 shadow-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors hidden md:flex items-center justify-center w-10 h-10 border border-[#E0E0E0]">
                        <ChevronLeft size={24} />
                    </button>

                    <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/80 rounded-full p-2 shadow-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors hidden md:flex items-center justify-center w-10 h-10 border border-[#E0E0E0]">
                        <ChevronRight size={24} />
                    </button>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {offers.map((offer) => (
                            <OfferCard
                                key={offer.slug}
                                image={offer.images[0]}
                                {...offer}
                            />
                        ))}
                    </div>

                </div>

                {/* Footer Link */}
                <div className="flex justify-end mt-6">
                    <a
                        href="/ofertas/regiao-metropolitana"
                        className="bg-[#4BB05D] text-white text-[11px] font-bold uppercase px-3 py-2 rounded-[4px] shadow-sm hover:bg-[#3E8E41] transition-colors"
                    >
                        VER TODAS
                    </a>
                </div>
            </div>
        </section>
    );
};

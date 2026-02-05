"use client";

import React, { useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Waves,
    Percent,
    Heart,
    Utensils,
    Ticket,
    MountainSnow,
    Cake,
    Snowflake,
    Clapperboard,
    Umbrella,
    Sun,
    Mic2,
    Flame,
    Popcorn
} from "lucide-react";

interface Category {
    id: string;
    label: string;
    icon: React.ElementType; // Changed from image URL to Lucide Icon
    href: string;
}

const categories: Category[] = [
    {
        id: "parques-aquaticos",
        label: "PARQUES <br/>AQUÁTICOS",
        icon: Waves,
        href: "/categoria/parques-aquaticos",
    },
    {
        id: "mega-promo",
        label: "MEGA<br/>PROMO",
        icon: Percent,
        href: "/categoria/mega-promo",
    },
    {
        id: "dicas-sul-serra",
        label: "DICAS<br/>SUL & SERRA",
        icon: Heart,
        href: "/categoria/dicas-sul-serra",
    },
    {
        id: "gastro-poa",
        label: "GASTRO POA<br/>E REGIÃO",
        icon: Utensils,
        href: "/categoria/gastro-poa",
    },
    {
        id: "lazer-poa",
        label: "LAZER POA<br/>E REGIÃO",
        icon: Ticket,
        href: "/categoria/lazer-poa",
    },
    {
        id: "lazer-serra",
        label: "LAZER NA<br/>SERRA",
        icon: MountainSnow,
        href: "/categoria/lazer-serra",
    },
    {
        id: "gastro-serra",
        label: "GASTRO<br/>SERRA",
        icon: Cake,
        href: "/categoria/gastro-serra",
    },
    {
        id: "serra-gaucha",
        label: "SERRA<br/>GAÚCHA",
        icon: Snowflake,
        href: "/categoria/serra-gaucha",
    },
    {
        id: "cinema",
        label: "INGRESSOS<br/>CINEMA",
        icon: Popcorn,
        href: "/categoria/cinema",
    },
    {
        id: "litoral-gaucho",
        label: "LITORAL<br/>GAÚCHO",
        icon: Umbrella,
        href: "/categoria/litoral-gaucho",
    },
    {
        id: "santa-catarina",
        label: "SANTA<br/>CATARINA",
        icon: Sun,
        href: "/categoria/santa-catarina",
    },
    {
        id: "shows-teatro",
        label: "SHOWS E<br/>TEATRO",
        icon: Mic2,
        href: "/categoria/shows-teatro",
    },
    {
        id: "fondues",
        label: "FONDUES",
        icon: Flame,
        href: "/categoria/fondues",
    },
];

const CategorySlider: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div id="menu-categorias" className="bg-white border-b border-[#E0E0E0] sticky top-[70px] z-40 w-full overflow-hidden shadow-sm">
            <div className="container relative mx-auto px-4 lg:px-0">
                <div className="flex items-center group">
                    {/* Navigation Arrows (Visible on hover/mobile interaction) */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white md:block lg:ml-[-20px] transition-all border border-gray-100"
                        aria-label="Previous Category"
                    >
                        <ChevronLeft size={20} className="text-[#D4AF37]" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide py-4 px-6 gap-6 md:gap-8 scroll-smooth items-start"
                        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
                    >
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <a
                                    key={category.id}
                                    href={category.href}
                                    className="flex flex-col items-center min-w-[90px] text-center no-underline transition-transform hover:scale-105 group/item"
                                >
                                    <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] flex items-center justify-center p-1 mb-2">
                                        <Icon
                                            size={40}
                                            strokeWidth={1.5}
                                            className="text-[#D4AF37] fill-[#D4AF37]/10 group-hover/item:text-[#B8860B] transition-colors"
                                        />
                                    </div>
                                    <span
                                        className="text-[10px] md:text-[11px] font-bold text-[#737373] uppercase leading-[1.2] whitespace-normal w-full"
                                        dangerouslySetInnerHTML={{ __html: category.label }}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white md:block lg:mr-[-20px] transition-all border border-gray-100"
                        aria-label="Next Category"
                    >
                        <ChevronRight size={20} className="text-[#D4AF37]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
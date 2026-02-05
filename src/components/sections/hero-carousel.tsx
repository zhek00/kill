"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HeroCarousel Component
 * 
 * A pixel-perfect clone of the main banner carousel.
 * Features:
 * - Responsive banner images (1920x300 aspect ratio)
 * - Navigation arrows (left/right)
 * - Pagination dots
 * - Auto-slide functionality
 * - Clickable links for each banner
 */

const banners = [
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_13-20260115111941-3.webp",
        alt: "Parque Aquático",
        href: "/oferta/lazer/alvorada/itapema-park-passaporte-1-dia?idv=MD-1",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_0_13_14_8_8-20250612111044-4.webp",
        alt: "Acquamotion e Snowland",
        href: "/oferta/lazer/gramado/acquamotion-gramado?idv=HB-desk-1-2",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_12-20260127154510-5.webp",
        alt: "Guardiões da Pizza",
        href: "/oferta/gastronomia/porto-alegre/guardioes-da-pizza?idv=HB-desk-1-3",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_15_10_7_9_15_7_6-20251211142015-6.webp",
        alt: "Torre Café Colonial",
        href: "/oferta/gastronomia/gramado/torre-cafe-colonial?idv=HB-desk-1-4",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_8_10_8-20260127162924-7.webp",
        alt: "Multiparque SC",
        href: "/oferta/lazer/balneario-camboriu/multiparque-sc?idv=HB-desk-1-5",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_13-20260127165921-8.webp",
        alt: "Restaurante Panorama",
        href: "/oferta/gastronomia/gramado/restaurante-panorama?idv=HB-desk-1-6",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_10_10-20260127154710-9.webp",
        alt: "Parque do Caracol",
        href: "/oferta/lazer/canela/parque-do-caracol?idv=HB-desk-1-7",
    },
    {
        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/_9_5-20251217135436-2.webp",
        alt: "Chateau Piatto Fondue",
        href: "/oferta/gastronomia/gramado/chateau-piatto?idv=HB-desk-1-8",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative w-full overflow-hidden bg-[#F5F5F5] swiper-CLS">
            {/* Main Container constrained by site max-width if needed, but hero is usually edge-to-edge */}
            <div className="relative w-full h-[150px] sm:h-[220px] md:h-[300px]">
                {/* Slides */}
                <div className="relative h-full w-full">
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <a href={banner.href} className="block w-full h-full">
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    quality={90}
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40 md:left-8"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="h-8 w-8" strokeWidth={2.5} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40 md:right-8"
                    aria-label="Próximo"
                >
                    <ChevronRight className="h-8 w-8" strokeWidth={2.5} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 w-2.5 rounded-full transition-all md:h-3 md:w-3 ${index === currentSlide
                                ? "bg-[#D4AF37] scale-110 shadow-sm"
                                : "bg-white/60 hover:bg-white"
                                }`}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
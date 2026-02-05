"use client";

import React from 'react';
import Image from 'next/image';

/**
 * PizzaGramadoBanner component
 * Clones the promotional banner for "Pizzaria Gramado" with pixel-perfect accuracy.
 * Features a green stylized background, pizza imagery, pricing, and a "COMPRE JÁ" CTA.
 */
const PizzaGramadoBanner: React.FC = () => {
    // Asset path provided in the instructions
    const bannerImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20210618170033-28.webp";

    return (
        <section className="w-full py-[40px] bg-[#F5F5F5]">
            <div className="container px-4">
                {/* Banner Container */}
                <div className="relative w-full overflow-hidden rounded-[7px] card-shadow">
                    <a
                        href="#"
                        className="block w-full transition-opacity duration-300 hover:opacity-95"
                        aria-label="Promoção Pizzaria Gramado"
                    >
                        <div className="relative aspect-[1200/220] md:aspect-[1200/180] lg:aspect-[1200/150] xl:aspect-[1200/140] min-h-[140px] w-full bg-[#D4AF37]">
                            <Image
                                src={bannerImage}
                                alt="Pizzaria Gramado Promoção"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />

                            {/* Overlay Content (Simulating the interactive feel of the banner) */}
                            <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12 lg:px-20">
                                {/* Left side: Price signaling (Included in the flattened image, but replicated for structure if needed) */}
                                <div className="flex flex-col text-white opacity-0 select-none">
                                    <span className="text-[12px] font-semibold uppercase tracking-wider">A partir de</span>
                                    <div className="flex items-baseline">
                                        <span className="text-[20px] font-bold mr-1">R$</span>
                                        <span className="text-[48px] font-extrabold leading-none">89</span>
                                        <span className="text-[24px] font-bold mt-2">,90</span>
                                    </div>
                                </div>

                                {/* Central Logo & Text (Included in image) */}
                                <div className="flex-1 opacity-0 select-none"></div>

                                {/* Right side: Button (Included in image) */}
                                <div className="flex items-center opacity-0 select-none">
                                    <div className="bg-white text-[#D4AF37] px-8 py-3 rounded-full font-bold text-[18px] uppercase tracking-wide border-2 border-white">
                                        COMPRE JÁ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <style jsx>{`
        .card-shadow {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
        </section>
    );
};

export default PizzaGramadoBanner;
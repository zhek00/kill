"use client";

import React from 'react';
import Image from 'next/image';

/**
 * ItapemaBanner Component
 * 
 * A full-width promotional banner for Itapema Park with "Tibum" branding 
 * and a large "COMPRAR" button, as seen in the provided designs.
 */
const ItapemaBanner = () => {
    // Asset extracted from the provided list
    const bannerImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/images/20251111095957_1762865997359-11.webp";

    return (
        <section className="w-full py-[40px] bg-[#F5F5F5]">
            <div className="container mx-auto max-w-[1200px] px-4">
                <div className="relative w-full rounded-[8px] overflow-hidden shadow-[0px_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.005]">
                    <a
                        href="#"
                        className="block w-full"
                        aria-label="Promoção Itapema Park Tibum - Comprar"
                    >
                        <div className="relative aspect-[1170/180] sm:aspect-[1200/185] w-full">
                            <Image
                                src={bannerImage}
                                alt="Itapema Park Tibum Promoção"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                            />

                            {/* Overlay for interaction/hotspot if needed, 
                  but based on screenshots it's a single flat banner image with the CTA baked in. 
                  We ensure the whole block is a link to match the UX. */}
                            <div className="absolute inset-0 bg-black/0 transition-colors hover:bg-black/5" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Visual Padding to match site section gaps */}
            <style jsx global>{`
        .itapema-banner-container {
          margin-top: 40px;
          margin-bottom: 40px;
        }
      `}</style>
        </section>
    );
};

export default ItapemaBanner;
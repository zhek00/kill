"use client";

import React from 'react';
import Image from 'next/image';

/**
 * WhatsAppCallout component
 * 
 * Clones the "RECEBA OFERTAS IMPERDÍVEIS NO WHATSAPP" call-to-action bar.
 * features:
 * - Teal/Blue background section
 * - VIP group branding decoration
 * - Interactive "PARTICIPE" button
 * - Responsive layout for text and imagery
 */
const WhatsAppCallout: React.FC = () => {
    return (
        <section className="w-full bg-[#D4AF37] overflow-hidden my-10 lg:my-[40px]">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[140px] py-4 md:py-0">

                    {/* Left Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 mb-4 md:mb-0">
                        <h2 className="text-white font-bold m-0 p-0 text-[18px] md:text-[22px] leading-tight flex flex-col uppercase tracking-wider">
                            <span>RECEBA OFERTAS</span>
                            <span className="text-[24px] md:text-[32px] tracking-tight">IMPERDÍVEIS</span>
                            <span className="text-[14px] md:text-[16px] font-normal lowercase italic tracking-normal normal-case">no whatsapp</span>
                        </h2>
                    </div>

                    {/* Center Person/Brand Image and VIP Branding */}
                    <div className="flex-1 relative flex justify-center items-center h-full min-h-[120px] w-full md:w-auto">
                        {/* Person Image - Mocked based on visual reference */}
                        <div className="relative h-[140px] w-[180px] md:h-[160px] md:w-[220px]">
                            <Image
                                src="https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/theme/webp/banner-whats-pessoa-2023.webp"
                                alt="Receba ofertas"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>

                        {/* VIP Group Branding Box */}
                        <div className="hidden lg:flex items-center gap-4 ml-4">
                            <div className="border-[3px] border-white/40 px-4 py-1 rotate-[-2deg]">
                                <span className="text-white font-bold text-[32px] tracking-tighter uppercase">GRUPO VIP</span>
                            </div>
                            <ul className="text-white text-[13px] font-semibold space-y-0 uppercase">
                                <li className="flex items-center gap-1">
                                    <span className="text-[16px]">✓</span> DESCONTOS
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-[16px]">✓</span> DICAS
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-[16px]">✓</span> SORTEIOS
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Button Action */}
                    <div className="z-10 mt-2 md:mt-0">
                        <a
                            href="https://chat.whatsapp.com/invite/example"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white font-bold px-8 py-2 rounded-[25px] hover:bg-white hover:text-[#D4AF37] transition-colors duration-300 text-[16px] uppercase flex items-center gap-2"
                        >
                            PARTICIPE
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/icons/whatsapp-icon-16.png"
                                alt="WhatsApp"
                                width={20}
                                height={20}
                                className="brightness-0 invert group-hover:invert-0"
                            />
                        </a>
                    </div>

                </div>
            </div>

            {/* Background visual detail (Diagonal stripes or subtle pattern if present) */}
            <style jsx>{`
        section {
          background: linear-gradient(90deg, #D4AF37 0%, #B8860B 100%);
        }
      `}</style>
        </section>
    );
};

export default WhatsAppCallout;
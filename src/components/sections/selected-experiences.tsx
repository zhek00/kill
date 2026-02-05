import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getSelectedExperiences } from '@/lib/product-service';

const SelectedExperiences = async () => {
    const experiences = await getSelectedExperiences();


    return (
        <section className="py-[40px] bg-[#F5F5F5]">
            <div className="container mx-auto max-w-[1200px] px-4">
                <h2 className="text-[24px] font-bold text-[#333333] text-center mb-[30px] uppercase font-display">
                    VEJA AS EXPERIÊNCIAS QUE SELECIONAMOS PARA VOCÊ
                </h2>

                <div className="relative group">
                    {/* Navigation Arrows (Visual Placeholders for pixel perfection) */}
                    <button
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 hidden lg:block"
                        aria-label="Previous"
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 30L15 20L25 10" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 hidden lg:block"
                        aria-label="Next"
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30L25 20L15 10" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                        {experiences.map((exp, index) => (
                            <Link
                                key={index}
                                href={`/oferta/experiencias/${exp.location.toLowerCase()}/${exp.slug}${exp.idv ? `?idv=${exp.idv}` : ''}`}
                                className="relative block aspect-[4/3] rounded-[8px] overflow-hidden group/card shadow-[0px_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-1"
                            >
                                {/* Background Image */}
                                <img
                                    src={exp.images[0]}
                                    alt={exp.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                                />

                                {/* Dark Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Discount Badge */}
                                {exp.discount && (
                                    <div className="absolute top-[10px] right-[10px] bg-[#4BB05D] text-white text-[14px] font-bold px-[10px] py-[4px] rounded-[4px] z-10">
                                        -{exp.discount}%
                                    </div>
                                )}

                                {/* Orange Icon Decoration (Visual decoration) */}
                                {index === 0 && (
                                    <div className="absolute top-[-5px] left-[50px] z-20">
                                        <div className="bg-[#FF8F00] w-[40px] h-[40px] rounded-full flex items-center justify-center p-2 shadow-md">
                                            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                                <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-[20px] text-center">
                                    <h3 className="text-white text-[14px] font-bold uppercase leading-[1.3] drop-shadow-md">
                                        {exp.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Intermediate Promotional Banner */}
                <div className="mt-[40px] w-full bg-white rounded-[8px] overflow-hidden shadow-[0px_4px_8px_rgba(0,0,0,0.1)] border border-[#E0E0E0]">
                    <a href="#" className="block w-full">
                        <img
                            src="https://tcheofertas.s3.sa-east-1.amazonaws.com/upload/theme/webp/_15_12_11-20260127113110.webp"
                            alt="Itapema Park Promotional Banner"
                            className="w-full h-auto object-cover"
                            width={1160}
                            height={250}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SelectedExperiences;
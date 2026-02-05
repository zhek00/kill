
import React from "react";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/product-service";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ChevronRight } from "lucide-react";

interface CategoryDealCardProps {
    id: string;
    slug: string;
    image: string;
    title: string;
    location: string;
    originalPrice?: string | null;
    currentPrice: string;
    discount?: number | null;
    idv?: string | null;
}

const CategoryDealCard = ({ id, slug, image, title, location, originalPrice, currentPrice, discount, idv }: CategoryDealCardProps) => {
    const href = `/oferta/lazer/${location.toLowerCase()}/${slug}${idv ? `?idv=${idv}` : ''}`;

    return (
        <div className="bg-white rounded-[8px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col h-full border border-[#f0f0f0]">
            <Link href={href} className="relative block h-[180px] overflow-hidden group">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
                {discount && (
                    <div className="absolute top-[10px] left-[10px] bg-[#4BB05D] text-white text-[12px] font-bold px-[8px] py-[4px] rounded-[4px]">
                        -{discount}%
                    </div>
                )}
            </Link>

            <div className="p-[16px] flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-[#999] uppercase tracking-wide mb-[4px] flex items-center gap-1">
                    <span className="text-[#D4AF37]">📍</span> {location}
                </div>

                <Link href={href}>
                    <h3 className="text-[#333333] text-[14px] font-semibold leading-[1.4] mb-4 line-clamp-2 h-[40px] uppercase hover:text-[#4BB05D] transition-colors">
                        {title}
                    </h3>
                </Link>

                <div className="mt-auto pt-4 border-t border-[#f0f0f0]">
                    <div className="flex items-end justify-between">
                        <div>
                            {originalPrice && (
                                <span className="block text-[11px] text-[#999] line-through mb-[2px]">
                                    De R$ {originalPrice}
                                </span>
                            )}
                            <div className="flex items-baseline gap-1">
                                <span className="text-[12px] text-[#555]">Por</span>
                                <span className="text-[20px] font-bold text-[#4BB05D]">R$ {currentPrice}</span>
                            </div>
                        </div>
                        <Link
                            href={href}
                            className="bg-[#D4AF37] hover:bg-[#B8860B] text-white text-[12px] font-bold px-4 py-2 rounded-[4px] uppercase transition-colors"
                        >
                            Ver Oferta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    const products = await getProductsByCategory(slug);

    // Helper to format category title from slug
    const categoryTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans pt-[110px] md:pt-[70px]">
            <Header />

            <main className="container mx-auto max-w-[1200px] px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] text-[#737373] mb-6 uppercase">
                    <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
                    <ChevronRight size={14} />
                    <span className="font-bold text-[#D4AF37]">{categoryTitle}</span>
                </div>

                <div className="mb-8">
                    <h1 className="text-[28px] md:text-[32px] font-black text-[#333] uppercase italic leading-tight">
                        {categoryTitle}
                    </h1>
                    <p className="text-[#666] mt-2 text-[15px]">
                        Confira as melhores ofertas selecionadas para você.
                    </p>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                        {products.map((product) => (
                            <CategoryDealCard
                                key={product.slug}
                                id={product.id}
                                slug={product.slug}
                                image={product.images[0]}
                                title={product.title}
                                location={product.location}
                                originalPrice={product.originalPrice}
                                currentPrice={product.currentPrice}
                                discount={product.discount}
                                idv={product.idv}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[8px] border border-[#E0E0E0]">
                        <div className="inline-block p-4 rounded-full bg-[#f9f9f9] mb-4">
                            <span className="text-[40px]">😢</span>
                        </div>
                        <h2 className="text-[20px] font-bold text-[#333] mb-2">Nenhuma oferta encontrada</h2>
                        <p className="text-[#737373] mb-6">
                            Não encontramos ofertas para esta categoria no momento.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-[4px] hover:bg-[#B8860B] transition-colors uppercase text-[14px]"
                        >
                            Voltar para o Início
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}


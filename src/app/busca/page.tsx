
import React from 'react';
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FilterSidebar from "@/components/search/filter-sidebar";
import ProductCard from '@/components/ui/product-card';
import { getProducts } from '@/lib/product-service';

interface SearchPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    // Await searchParams before access in Next.js 15+ (if using recent version, but 14 is sync usually. 
    // In Next 15 searchParams is a promise, but let's assume standard behavior for now or await it if strict)
    // Actually safe to await in server component body in recent versions.
    const params = await searchParams; // Just to be safe for future proofing or if using canary

    const query = typeof params.q === 'string' ? params.q : undefined;
    const category = typeof params.category === 'string' ? params.category : undefined;
    const location = typeof params.location === 'string' ? params.location : undefined;
    const minPrice = typeof params.minPrice === 'string' ? Number(params.minPrice) : undefined;
    const maxPrice = typeof params.maxPrice === 'string' ? Number(params.maxPrice) : undefined;

    const products = await getProducts({
        query,
        category,
        location,
        minPrice,
        maxPrice
    });

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans pt-[110px] md:pt-[70px]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <aside>
                        <FilterSidebar />
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="mb-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-[24px] font-bold text-[#333] uppercase leading-tight">
                                    {query ? `Resultados para "${query}"` : 'Todas as Ofertas'}
                                </h1>
                                <p className="text-[#737373] text-[14px] mt-1">
                                    {products.length} {products.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}
                                </p>
                            </div>
                        </div>

                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.slug}
                                        {...product}
                                        image={product.images[0]} // Adapter for card input
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
                                <h3 className="text-[18px] font-semibold text-[#333] mb-2">Nenhuma oferta encontrada</h3>
                                <p className="text-[#737373]">Tente buscar por outros termos ou remover os filtros.</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

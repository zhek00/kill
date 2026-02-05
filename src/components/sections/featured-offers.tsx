
import React from 'react';
import { getFeaturedProducts } from '@/lib/product-service';
import ProductCard from '@/components/ui/product-card';

export default async function FeaturedOffers() {
    const deals = await getFeaturedProducts(8);

    return (
        <section className="py-[40px] bg-[#F5F5F5]">
            <div className="container">
                <h2 className="text-[#333333] text-[24px] font-bold text-center uppercase tracking-wider mb-8">
                    Ofertas em Destaque!
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                    {deals.map((deal) => (
                        <ProductCard
                            key={deal.slug}
                            image={deal.images[0]}
                            {...deal}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CookieNotice from "@/components/ui/cookie-notice";
import ProductGallery from "@/components/sections/product-detail/product-gallery";
import ProductInfo from "@/components/sections/product-detail/product-info";
import ProductContent from "@/components/sections/product-detail/product-content";
import { getProductBySlug } from "@/lib/product-service";
import { BookingCard } from "@/components/booking/booking-card";

export default async function OfferPage(props: { params: Promise<{ slug: string[] }> }) {
    const params = await props.params;

    // Safely handle params.slug
    const activeSlug = (() => {
        if (!params?.slug) return "";
        const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
        // The URL structure is /oferta/[category]/[location]/[slug]
        return slugArray[slugArray.length - 1];
    })();

    const offer = await getProductBySlug(activeSlug);

    if (!offer) {
        return (
            <div className="min-h-screen bg-[#F5F5F5] font-sans pt-[110px] md:pt-[70px]">
                <Header />
                <main className="container py-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-[#333333]">Oferta não encontrada</h1>
                    <p className="mt-4 text-[#737373]">Desculpe, não conseguimos encontrar a oferta solicitada.</p>
                    <a href="/" className="mt-6 px-6 py-2 bg-[#D4AF37] text-white rounded-md font-bold hover:bg-[#B5952F] transition-colors">
                        Voltar para Home
                    </a>
                </main>
                <Footer />
                <CookieNotice />
            </div>
        );
    }

    const hasBookingOptions = offer.options && offer.options.length > 0;

    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans pt-[110px] md:pt-[70px]">
            <Header />
            <main className="container py-8">
                {/* Breadcrumbs (Simplified) */}
                <div className="mb-6 text-sm text-muted-foreground">
                    <a href="/" className="hover:underline">Home</a> / <span>Ofertas</span> / <span className="text-foreground font-semibold uppercase">{offer.location}</span> / <span className="truncate max-w-[200px] inline-block align-bottom">{offer.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Gallery & Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <ProductGallery images={offer.images} />
                        <ProductContent
                            description={offer.description}
                            rules={offer.rules}
                            address={offer.address}
                            highlights={[]} // Highlights not in DB yet
                        />
                    </div>

                    {/* Right Column - Sticky Info / Booking */}
                    <div className="lg:col-span-4">
                        {hasBookingOptions ? (
                            <div className="space-y-4">
                                {/* Short summary before booking mostly for mobile context if needed, but BookingCard handles it */}
                                <BookingCard product={offer} />
                            </div>
                        ) : (
                            <ProductInfo
                                title={offer.title}
                                location={offer.location}
                                originalPrice={offer.originalPrice}
                                currentPrice={offer.currentPrice}
                                discount={offer.discount}
                                installments={offer.installments}
                                isExclusive={offer.isExclusive}
                                descriptionShort={offer.descriptionShort}
                            />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            <CookieNotice />
        </div>
    );
}

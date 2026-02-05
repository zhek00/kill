"use client";

import { MapPin, Heart, Share2, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
    title: string;
    location: string;
    originalPrice?: string;
    currentPrice: string;
    descriptionShort?: string;
    discount?: number;
    installments?: string;
    isExclusive?: boolean;
}

export default function ProductInfo({
    title,
    location,
    originalPrice,
    currentPrice,
    descriptionShort,
    discount,
    installments,
    isExclusive,
}: ProductInfoProps) {
    return (
        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
            {/* Header / Meta */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium uppercase">{location}</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="text-muted-foreground hover:text-red-500 transition-colors">
                            <Heart className="h-5 w-5" />
                        </button>
                        <button className="text-muted-foreground hover:text-primary transition-colors">
                            <Share2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl uppercase">
                    {title}
                </h1>

                {descriptionShort && (
                    <p className="text-sm text-muted-foreground">
                        {descriptionShort}
                    </p>
                )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
                {isExclusive && (
                    <span className="inline-flex items-center rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 uppercase">
                        Exclusivo
                    </span>
                )}
                <span className="inline-flex items-center rounded-sm bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 flex gap-1">
                    <Timer className="h-3 w-3" />
                    Oferta por tempo limitado
                </span>
            </div>

            <div className="h-px w-full bg-border" />

            {/* Pricing */}
            <div className="space-y-4">
                <div className="flex items-end justify-between">
                    <div className="space-y-1">
                        {originalPrice && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground line-through">
                                    R$ {originalPrice}
                                </span>
                                {discount && (
                                    <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                                        -{discount}%
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm font-medium text-muted-foreground">Por apenas</span>
                            <span className="text-4xl font-bold text-foreground">R$ {currentPrice}</span>
                        </div>
                        {installments && (
                            <p className="text-xs text-primary font-semibold">
                                Em até {installments}
                            </p>
                        )}
                    </div>
                </div>

                <Button className="w-full bg-[#4BB05D] hover:bg-[#3E8E41] h-12 text-lg font-bold uppercase shadow-md transition-all hover:shadow-lg">
                    Comprar Agora
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                    Garantia de satisfação - 7 dias para cancelamento grátis
                </p>
            </div>
        </div>
    );
}

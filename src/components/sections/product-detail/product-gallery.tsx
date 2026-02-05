"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const handleThumbnailClick = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    if (!images || images.length === 0) {
        return <div className="aspect-video bg-gray-200 rounded-lg" />;
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-white shadow-sm">
                <Image
                    src={images[current]}
                    alt={`Product image ${current + 1}`}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Thumbnails Carousel */}
            {images.length > 1 && (
                <div className="mx-auto w-full max-w-sm px-10 sm:max-w-full sm:px-0">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2">
                            {images.map((img, index) => (
                                <CarouselItem key={index} className="basis-1/4 pl-2 sm:basis-1/5 md:basis-1/6">
                                    <div
                                        className={cn(
                                            "relative aspect-square cursor-pointer overflow-hidden rounded-md border-2 transition-all hover:opacity-100",
                                            current === index
                                                ? "border-primary opacity-100 ring-2 ring-primary/20"
                                                : "border-transparent opacity-60 hover:border-gray-300"
                                        )}
                                        onClick={() => handleThumbnailClick(index)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-4" />
                        <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
                </div>
            )}
        </div>
    );
}


import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// Define a type that matches the frontend expectation (or close to it)
// We transform the DB relations back to flat arrays for easier consumption if needed,
// but let's see if we can just ex// Fallback to any to ensure build succeeds despite Prisma generation issues
export type ProductWithDetails = any;

// We can return a mapped type to match `mock-products.ts` interface exactly if strictly needed,
// but for better typed code let's return a clean object and update components to access .url or .text
// Actually, to make "migration" faster, let's map it.

export async function getAllProducts() {
    const products = await prisma.product.findMany({
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        }
    });

    return products.map(mapProductToFrontend);
}

export async function getFeaturedProducts(limit = 8) {
    const products = await prisma.product.findMany({
        take: limit,
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        },
        orderBy: {
            createdAt: 'desc' // or specific boolean 'isFeatured' if we had one?
            // The mock just had "Featured Offers" as the first ones. 
            // We can add logic here: maybe everything is 'featured' for now or checks 'megaPromo'
        }
    });

    return products.map(mapProductToFrontend);
}

export async function getProductBySlug(slug: string) {
    const product = await prisma.product.findUnique({
        where: { slug },
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        }
    });

    if (!product) return null;

    return mapProductToFrontend(product);
}

export async function getProductsByCategory(categorySlug: string) {
    const products = await prisma.product.findMany({
        where: {
            categories: {
                some: {
                    slug: categorySlug
                }
            }
        },
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        }
    });

    return products.map(mapProductToFrontend);
}

export async function getRegionOffers(limit = 4) {
    const products = await prisma.product.findMany({
        where: {
            categories: {
                some: {
                    slug: { in: ['lazer-poa', 'gastro-poa'] }
                }
            }
        },
        take: limit,
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        }
    });

    return products.map(mapProductToFrontend);
}

export async function getSelectedExperiences(limit = 4) {
    const products = await prisma.product.findMany({
        skip: 8,
        take: limit,
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        }
    });

    return products.map(mapProductToFrontend);
}

// Helper to map DB result to the interface used by components
function mapProductToFrontend(p: ProductWithDetails) {
    return {
        ...p,
        originalPrice: p.originalPrice?.toString(), // Decimal to string
        currentPrice: p.currentPrice.toString(),
        savings: p.savings?.toString(),
        // Map relations to flat arrays or keep them as objects?
        // Existing components use `images: string[]`.
        images: p.images.map((img: any) => img.url),
        rules: p.rules.map((r: any) => r.text),
        categories: p.categories.map((c: any) => c.slug),
        // Helper for address if needed
        address: {
            street: p.addressStreet || '',
            city: p.addressCity || '',
            state: p.addressState || '',
            zip: p.addressZip
        },
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
        availableDays: p.availableDays,
        options: p.options?.map((o: any) => ({
            id: o.id,
            title: o.title,
            description: o.description,
            price: o.price.toString(),
            originalPrice: o.originalPrice?.toString(),
        })) || [],
    };
}

export type ProductFilterParams = {
    query?: string;
    category?: string;
    location?: string;
    minPrice?: number;
    maxPrice?: number;
};

export async function getProducts(params: ProductFilterParams) {
    const { query, category, location, minPrice, maxPrice } = params;

    const where: Prisma.ProductWhereInput = {};

    if (query) {
        where.OR = [
            { title: { contains: query } }, // Case insensitive usually depends on DB collation
            { description: { contains: query } },
        ];
    }

    if (category) {
        where.categories = {
            some: {
                slug: category
            }
        };
    }

    if (location) {
        where.location = { contains: location };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
        where.currentPrice = {};
        if (minPrice !== undefined) where.currentPrice.gte = minPrice;
        if (maxPrice !== undefined) where.currentPrice.lte = maxPrice;
    }

    const products = await prisma.product.findMany({
        where,
        include: {
            images: true,
            rules: true,
            categories: true,
            options: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return products.map(mapProductToFrontend);
}

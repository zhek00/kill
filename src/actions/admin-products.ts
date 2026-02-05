"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteProduct(id: string) {
    if (!id) return;

    try {
        await prisma.product.delete({
            where: { id }
        })
        revalidatePath("/admin/products")
        revalidatePath("/")
    } catch (e) {
        console.error("Failed to delete product", e)
    }
}

export async function updateProduct(id: string, data: FormData) {
    if (!id) return;

    // Extract basic fields
    const title = data.get("title") as string;
    const slug = data.get("slug") as string;
    const location = data.get("location") as string;
    const descriptionShort = data.get("descriptionShort") as string;
    const description = data.get("description") as string;
    const installments = data.get("installments") as string;
    const idv = data.get("idv") as string;

    // Numeric/Decimal fields
    const currentPrice = data.get("currentPrice") as string;
    const originalPrice = data.get("originalPrice") as string;
    const savings = data.get("savings") as string;
    const discount = data.get("discount") ? parseInt(data.get("discount") as string) : null;

    // Booleans
    const isExclusive = data.get("isExclusive") === "on";
    const megaPromo = data.get("megaPromo") === "on";

    // Address
    const addressStreet = data.get("addressStreet") as string;
    const addressCity = data.get("addressCity") as string;
    const addressState = data.get("addressState") as string;
    const addressZip = data.get("addressZip") as string;

    // Relations (Text Area parsing)
    const imagesText = data.get("images") as string;
    const rulesText = data.get("rules") as string;
    const categoriesText = data.get("categories") as string;

    try {
        // Prepare relations updates if provided
        const imageUpdates = imagesText ? {
            deleteMany: {},
            create: imagesText.split('\n').filter(url => url.trim().length > 0).map(url => ({ url: url.trim() }))
        } : undefined;

        const ruleUpdates = rulesText ? {
            deleteMany: {},
            create: rulesText.split('\n').filter(text => text.trim().length > 0).map(text => ({ text: text.trim() }))
        } : undefined;

        const optionsJSON = data.get("optionsJSON") as string;
        let optionsUpdates = undefined;
        if (optionsJSON) {
            try {
                const parsedOptions = JSON.parse(optionsJSON);
                if (Array.isArray(parsedOptions)) {
                    optionsUpdates = {
                        deleteMany: {},
                        create: parsedOptions.map((opt: any) => ({
                            title: opt.title,
                            description: opt.description,
                            price: opt.price, // Decimal? Prisma handles string/number to decimal usually
                            originalPrice: opt.originalPrice || null,
                        }))
                    };
                }
            } catch (e) {
                console.error("Failed to parse optionsJSON", e);
            }
        }

        // Categories: we expect comma separated slugs.
        // We first need to check if they match existing categories or ignore invalid ones? 
        // For simplicity, let's assume valid slugs for now or just disconnect/connect.
        // Actually, connecting by slug require checking existence. Let's start with just scalar updates + images/rules.
        // Complex relations might be better in a separate step or just assume they exist.
        // Let's rely on connectOrCreate or just connect.

        await prisma.product.update({
            where: { id },
            data: {
                title,
                slug,
                location,
                descriptionShort,
                description,
                currentPrice,
                originalPrice: originalPrice || null,
                savings: savings || null,
                discount,
                installments,
                idv,
                isExclusive,
                megaPromo,
                addressStreet,
                addressCity,
                addressState,
                addressZip,
                availableDays: (data.get("availableDays") as string) || null,
                images: imageUpdates,
                rules: ruleUpdates,
                options: optionsUpdates,
            }
        })
        revalidatePath("/admin/products")
        revalidatePath("/")
    } catch (e) {
        console.error("Failed to update product", e)
        throw e;
    }
}

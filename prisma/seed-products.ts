
import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from '../src/data/mock-products'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding products...')

    for (const product of PRODUCTS) {
        console.log(`Seeding product: ${product.title}`)

        const parsePrice = (priceStr?: string) => {
            if (!priceStr) return undefined;
            return parseFloat(priceStr.replace('.', '').replace(',', '.'));
        }

        const currentPrice = parsePrice(product.currentPrice);
        const originalPrice = parsePrice(product.originalPrice);
        const savings = parsePrice(product.savings);

        // Prepare Categories
        const categorySlugs = new Set<string>();
        if (product.category) categorySlugs.add(product.category.toLowerCase().replace(/\s+/g, '-'));
        if (product.categories) product.categories.forEach(c => categorySlugs.add(c.toLowerCase()));

        const categoryConnectOrCreate = [];
        for (const slug of categorySlugs) {
            // Simple capitalization for name
            const name = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

            categoryConnectOrCreate.push({
                where: { slug: slug },
                create: { name: name, slug: slug }
            });
        }

        // Create Product
        // We use product.slug as the unique identifier for upsert
        await prisma.product.upsert({
            where: { slug: product.slug },
            update: {
                // In a real scenario we might want to update fields, but for initial seed, skipping update logic if exists
            },
            create: {
                slug: product.slug,
                title: product.title,
                location: product.location,
                descriptionShort: product.descriptionShort,
                description: product.description,
                currentPrice: currentPrice || 0,
                originalPrice: originalPrice,
                savings: savings,
                discount: product.discount,
                installments: product.installments,
                isExclusive: product.isExclusive || false,
                megaPromo: product.megaPromo || false,
                idv: product.idv,

                addressStreet: product.address.street,
                addressCity: product.address.city,
                addressState: product.address.state,

                images: {
                    create: product.images.map(url => ({ url }))
                },
                rules: {
                    create: product.rules.map(text => ({ text }))
                },
                categories: {
                    connectOrCreate: categoryConnectOrCreate
                }
            }
        })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

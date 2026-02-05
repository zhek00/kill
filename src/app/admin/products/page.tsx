
import { getAllProducts } from "@/lib/product-service"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { deleteProduct } from "@/actions/admin-products"
import { EditProductDialog } from "@/components/admin/edit-product-dialog"

export default async function AdminProductsPage() {
    const products = await getAllProducts()

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Produtos</h2>
                <Link href="/admin/products/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Novo Produto
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Imagem</TableHead>
                            <TableHead>Título</TableHead>
                            <TableHead>Localização</TableHead>
                            <TableHead>Preço</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    {product.images?.[0] && (
                                        <div className="relative h-10 w-16 overflow-hidden rounded">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="font-medium max-w-[300px] truncate" title={product.title}>
                                    {product.title}
                                </TableCell>
                                <TableCell>{product.location}</TableCell>
                                <TableCell>R$ {product.currentPrice}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <EditProductDialog product={product} />
                                        <form action={async () => {
                                            "use server"
                                            await deleteProduct(product.id)
                                        }}>
                                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </form>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

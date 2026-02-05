
import { getAllProducts } from "@/lib/product-service"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Box } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
    const products = await getAllProducts()

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/admin/products">
                    <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total de Produtos
                            </CardTitle>
                            <Box className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{products.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +{products.filter(p => new Date(p.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length} na última semana
                            </p>
                        </CardContent>
                    </Card>
                </Link>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow h-[200px] flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                    <p>Gráficos de vendas virão aqui</p>
                </div>
            </div>
        </div>
    )
}

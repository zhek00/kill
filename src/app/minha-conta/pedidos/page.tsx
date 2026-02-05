import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Package, Clock, CheckCircle, XCircle } from "lucide-react";

export const metadata = {
    title: "Meus Pedidos | Ingressos Sul & Serra",
    description: "Acompanhe seus pedidos",
};

export default async function OrdersPage() {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
        redirect("/usuario/entrar");
    }

    // Fetch user orders with items
    const orders = await prisma.order.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            items: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    const getStatusInfo = (status: string) => {
        switch (status) {
            case "PAID":
                return { label: "Pago", color: "text-green-600 bg-green-50", icon: CheckCircle };
            case "CANCELLED":
                return { label: "Cancelado", color: "text-red-600 bg-red-50", icon: XCircle };
            default:
                return { label: "Pendente", color: "text-orange-600 bg-orange-50", icon: Clock };
        }
    };

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-[20px] font-bold text-[#333]">Meus Pedidos</h2>
                <p className="text-[#666] text-[14px]">Acompanhe o status das suas compras recentes.</p>
            </div>

            {orders.length === 0 ? (
                <div className="bg-white p-8 rounded-[8px] border border-[#e0e0e0] text-center py-16">
                    <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-4 text-[#999]">
                        <Package size={32} />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#333] mb-2">Você ainda não fez nenhum pedido</h3>
                    <p className="text-[#666] mb-6">Explore nossas ofertas e aproveite o melhor da Serra Gaúcha!</p>
                    <Link
                        href="/"
                        className="inline-flex h-[45px] items-center px-6 bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold rounded-[4px] uppercase transition-colors"
                    >
                        Ver Ofertas
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => {
                        const { label, color, icon: StatusIcon } = getStatusInfo(order.status);

                        return (
                            <div key={order.id} className="bg-white rounded-[8px] border border-[#e0e0e0] overflow-hidden">
                                <div className="p-4 border-b border-[#f0f0f0] bg-[#fafafa] flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                    <div>
                                        <p className="text-[12px] text-[#999] font-bold uppercase tracking-wider mb-1">Pedido #{order.id.slice(-6)}</p>
                                        <p className="text-[13px] text-[#555]">
                                            Realizado em {new Date(order.createdAt).toLocaleDateString('pt-BR')} às {new Date(order.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-[12px] font-bold uppercase flex items-center ${color}`}>
                                        <StatusIcon size={14} className="mr-1.5" /> {label}
                                    </div>
                                </div>
                                <div className="p-4">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center py-2 border-b border-[#f0f0f0] last:border-0">
                                            <div>
                                                <p className="font-semibold text-[#333] text-[14px]">{item.title}</p>
                                                <p className="text-[12px] text-[#999]">Qtd: {item.quantity}</p>
                                            </div>
                                            <p className="font-bold text-[#333]">
                                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}
                                            </p>
                                        </div>
                                    ))}
                                    <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex justify-between items-center">
                                        <span className="font-bold text-[#333]">Total</span>
                                        <span className="font-bold text-[18px] text-[#D4AF37]">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

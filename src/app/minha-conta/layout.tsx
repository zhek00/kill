import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { User, ShoppingBag, LogOut } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        redirect("/usuario/entrar");
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] pt-[110px] md:pt-[70px] flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto max-w-[1200px] px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-[28px] font-bold text-[#333] uppercase">Minha Conta</h1>
                    <p className="text-[#666]">Gerencie seus dados e pedidos</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-[250px] flex-shrink-0">
                        <div className="bg-white rounded-[8px] shadow-sm border border-[#e0e0e0] overflow-hidden">
                            <div className="p-4 border-b border-[#f0f0f0] bg-[#fafafa]">
                                <p className="text-[12px] text-[#999] uppercase font-bold tracking-wider">Menu</p>
                            </div>
                            <nav className="flex flex-col">
                                <Link
                                    href="/minha-conta/dados"
                                    className="flex items-center px-4 py-3 hover:bg-[#f9f9f9] text-[#555] font-medium border-l-[3px] border-transparent hover:border-[#D4AF37] transition-all"
                                >
                                    <User size={18} className="mr-3" /> Meus Dados
                                </Link>
                                <Link
                                    href="/minha-conta/pedidos"
                                    className="flex items-center px-4 py-3 hover:bg-[#f9f9f9] text-[#555] font-medium border-l-[3px] border-transparent hover:border-[#D4AF37] transition-all"
                                >
                                    <ShoppingBag size={18} className="mr-3" /> Meus Pedidos
                                </Link>
                                <div className="border-t border-[#f0f0f0]">
                                    <SignOutButton />
                                </div>
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-grow">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

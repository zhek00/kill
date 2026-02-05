import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { auth } from '@/auth';

const Footer = async () => {
    const session = await auth();
    return (
        <footer className="w-full bg-[#D4AF37] text-white font-display pt-12">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Main Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
                    {/* LOJINHAS TEMÁTICAS */}
                    <div>
                        <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                            LOJINHAS TEMÁTICAS
                        </h2>
                        <ul className="space-y-2 text-[14px]">
                            <li><Link href="/categoria/almocar-gramado" className="hover:underline">Onde almoçar em Gramado</Link></li>
                            <li><Link href="/categoria/almocar-canela" className="hover:underline">Onde almoçar em Canela</Link></li>
                            <li><Link href="/categoria/almocar-serra" className="hover:underline">Onde almoçar na Serra</Link></li>
                            <li><Link href="/categoria/mega-promo" className="hover:underline">Mega promo</Link></li>
                            <li><Link href="/categoria/parques" className="hover:underline">Parques aquáticos</Link></li>
                            <li><Link href="/categoria/cinema" className="hover:underline">Cinema</Link></li>
                            <li><Link href="/categoria/fondue" className="hover:underline">Fondues</Link></li>
                            <li><Link href="/categoria/santa-catarina" className="hover:underline">Santa Catarina</Link></li>
                            <li><Link href="/categoria/beleza" className="hover:underline">Beleza e estética</Link></li>
                            <li><Link href="/categoria/pizzaria" className="hover:underline">Pizzarias</Link></li>
                            <li><Link href="/categoria/cafe-colonial" className="hover:underline">Café colonial</Link></li>
                            <li><Link href="/categoria/dicas" className="hover:underline">Dicas do Sul & Serra Passeios</Link></li>
                            <li><Link href="/parceiros" className="hover:underline">Nossos Parceiros</Link></li>
                        </ul>
                    </div>

                    {/* CLIENTE & PARCEIROS */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                                CLIENTE
                            </h2>
                            <ul className="space-y-2 text-[14px]">
                                {session?.user ? (
                                    <>
                                        <li><Link href="/minha-conta/pedidos" className="hover:underline">Meus Pedidos</Link></li>
                                        <li><Link href="/minha-conta" className="hover:underline">Minha Conta</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link href="/usuario/cadastrar" className="hover:underline">Cadastre-se</Link></li>
                                        <li><Link href="/usuario/entrar" className="hover:underline">Entrar</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                                PARCEIROS
                            </h2>
                            <ul className="space-y-2 text-[14px]">
                                <li><Link href="/parceiros/login" className="hover:underline">Área do Parceiro</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* INGRESSOS SUL & SERRA & SOCIAL */}
                    <div>
                        <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                            SUL & SERRA PASSEIOS
                        </h2>
                        <div className="flex gap-3 mb-6">
                            {/* Manual SVG Icons for Blog/TikTok to match visual style better if needed, but using icons for general UI */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center border border-white rounded transition-colors hover:bg-white hover:text-[#D4AF37]">
                                <span className="font-bold text-xs uppercase">B</span>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white rounded transition-colors hover:bg-white hover:text-[#D4AF37]">
                                <Facebook size={18} strokeWidth={2.5} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white rounded transition-colors hover:bg-white hover:text-[#D4AF37]">
                                <Instagram size={18} strokeWidth={2.5} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white rounded transition-colors hover:bg-white hover:text-[#D4AF37]">
                                {/* TikTok Placeholder/Icon */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white rounded transition-colors hover:bg-white hover:text-[#D4AF37]">
                                <Youtube size={18} strokeWidth={2.5} />
                            </a>
                        </div>
                        <ul className="space-y-2 text-[14px]">
                            <li><a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Comente sobre nós no Google</a></li>
                            <li><a href="https://wa.me/5554996385254" target="_blank" rel="noopener noreferrer" className="hover:underline">Ofertas por WhatsApp</a></li>
                            <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
                        </ul>
                    </div>

                    {/* AJUDA & ATENDIMENTO */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                                AJUDA
                            </h2>
                            <ul className="space-y-2 text-[14px]">
                                <li><Link href="/sac" className="hover:underline">SAC</Link></li>
                                <li><Link href="/cancelar" className="hover:underline">Cancelar Cupons</Link></li>
                                <li><Link href="/termos" className="hover:underline">Termos e Condições</Link></li>
                                <li><Link href="/mapa-site" className="hover:underline">Mapa do Site</Link></li>
                                <li><Link href="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
                                <li><Link href="/app-privacidade" className="hover:underline text-[13px]">Política de Privacidade dos APPs</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[16px] font-bold mb-5 tracking-wider text-left uppercase">
                                ATENDIMENTO
                            </h2>
                            <ul className="space-y-2 text-[14px]">
                                <li><Link href="/faq" className="hover:underline">Dúvidas Frequentes</Link></li>
                                <li><Link href="/contato" className="hover:underline">Formulário de contato</Link></li>
                                <li><a href="mailto:contato@sulserra.com.br" className="hover:underline">contato@sulserra.com.br</a></li>
                                <li className="font-semibold">(54) 99638-5254</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-8"></div>

                {/* Middle Text Section */}
                <div className="text-[12px] leading-[1.6] text-center lg:text-left mb-10 max-w-4xl lg:max-w-none">
                    <p>
                        Sul & Serra Passeios é um e-commerce de serviços especializado em descontos para Porto Alegre e Grande Porto Alegre, Serra Gaúcha, Litoral do Rio Grande do Sul e Santa Catarina. Buscamos oferecer o menor preço e maior comodidade para quem compra, já que as ofertas podem ser parceladas em até 12 vezes (e ainda com desconto)!
                    </p>
                </div>
            </div>

            {/* Corporate Info Bar */}
            <div className="w-full bg-[#B8860B] py-8">
                <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[18px] md:text-[22px] font-black tracking-tighter text-white uppercase italic">
                                Sul & Serra
                            </span>
                            <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-white/80 uppercase">
                                Passeios
                            </span>
                        </div>
                        <div className="text-[11px] leading-tight opacity-90 text-white">
                            <p className="font-bold mb-1">Sul & Serra Passeios</p>
                            <p>© 2026 Sul & Serra Passeios LTDA.</p>
                            <p>Todos os direitos reservados. CNPJ 51.891.382/0002-02</p>
                            <p>Rua Largo Claudio Pasqual, 55 loja 05 - Centro - 95670-171 - Gramado/RS</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-white rounded p-1 flex items-center justify-center">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/svgs/ra-logo-2.svg"
                                alt="Reclame Aqui"
                                width={100}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className="bg-white rounded p-1 h-12 w-28 flex items-center justify-center overflow-hidden">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b894f932-06bd-40ad-9ffc-f1e950293b77-tcheofertas-com-br/assets/svgs/verified-1.svg"
                                alt="Cadastur"
                                width={80}
                                height={30}
                                className="brightness-0 contrast-100" // Simulated filter since asset is generic verified
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
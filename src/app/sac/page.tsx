import InstitutionalPage from "@/components/institutional-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SACPage() {
    return (
        <InstitutionalPage title="Serviço de Atendimento ao Consumidor (SAC)">
            <p className="mb-6">
                Estamos aqui para ajudar! Se você teve algum problema com sua compra, dúvidas sobre utilização de cupons ou precisa de qualquer outro auxílio, entre em contato conosco.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-4">Canais de Atendimento</h3>
                    <ul className="space-y-3">
                        <li><strong>Email:</strong> contato@sulserra.com.br</li>
                        <li><strong>Telefone/WhatsApp:</strong> (54) 99638-5254</li>
                        <li><strong>Horário:</strong> Segunda a Sexta, das 9h às 18h</li>
                    </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border flex flex-col items-start justify-center">
                    <h3 className="text-xl font-bold mb-4">Precisa de resposta rápida?</h3>
                    <p className="mb-4">Nosso WhatsApp é o canal mais ágil para resolver suas dúvidas urgentes.</p>
                    <Link href="https://wa.me/5554996385254" target="_blank">
                        <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                            Falar no WhatsApp
                        </Button>
                    </Link>
                </div>
            </div>
        </InstitutionalPage>
    )
}

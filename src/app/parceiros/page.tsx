import InstitutionalPage from "@/components/institutional-page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ParceirosPage() {
    return (
        <InstitutionalPage title="Seja um Parceiro">
            <p className="mb-4">
                Quer divulgar sua marca para milhares de clientes na Serra Gaúcha e Litoral?
                Seja um parceiro do Ingressos Sul & Serra!
            </p>
            <p className="mb-8">
                Oferecemos uma plataforma completa para gerenciar suas ofertas e alcançar novos clientes.
            </p>
            <div className="flex gap-4">
                <Link href="/contato">
                    <Button>Entrar em Contato</Button>
                </Link>
                <Link href="/parceiros/login">
                    <Button variant="outline">Já sou parceiro (Login)</Button>
                </Link>
            </div>
        </InstitutionalPage>
    )
}

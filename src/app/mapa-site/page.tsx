import InstitutionalPage from "@/components/institutional-page";
import Link from "next/link";

export default function MapaSitePage() {
    return (
        <InstitutionalPage title="Mapa do Site">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold mb-4 text-lg">Categorias</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><Link href="/categoria/almocar-gramado" className="hover:underline text-blue-600">Almoçar em Gramado</Link></li>
                        <li><Link href="/categoria/almocar-canela" className="hover:underline text-blue-600">Almoçar em Canela</Link></li>
                        <li><Link href="/categoria/parques" className="hover:underline text-blue-600">Parques</Link></li>
                        {/* Add more as needed */}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-lg">Institucional</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><Link href="/sobre" className="hover:underline text-blue-600">Sobre Nós</Link></li>
                        <li><Link href="/contato" className="hover:underline text-blue-600">Contato</Link></li>
                        <li><Link href="/termos" className="hover:underline text-blue-600">Termos de Uso</Link></li>
                        <li><Link href="/privacidade" className="hover:underline text-blue-600">Política de Privacidade</Link></li>
                    </ul>
                </div>
            </div>
        </InstitutionalPage>
    )
}

import InstitutionalPage from "@/components/institutional-page";

export default function TermosPage() {
    return (
        <InstitutionalPage title="Termos e Condições de Uso">
            <h3 className="text-xl font-bold mt-6 mb-2">1. Aceitação dos Termos</h3>
            <p className="mb-4">
                Ao acessar e usar o site Ingressos Sul & Serra, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">2. Uso dos Cupons</h3>
            <p className="mb-4">
                Os cupons adquiridos através de nossa plataforma são para uso pessoal e intransferível, salvo disposição em contrário na oferta específica.
                Cada oferta possui suas próprias regras de utilização, validade e restrições que devem ser observadas antes da compra.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">3. Cancelamentos e Reembolsos</h3>
            <p className="mb-4">
                O cancelamento de compras pode ser solicitado em até 7 dias após a compra, desde que o cupom não tenha sido utilizado, conforme prevê o Código de Defesa do Consumidor.
            </p>
        </InstitutionalPage>
    )
}

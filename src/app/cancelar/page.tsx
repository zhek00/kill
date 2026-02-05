import InstitutionalPage from "@/components/institutional-page";

export default function CancelarPage() {
    return (
        <InstitutionalPage title="Política de Cancelamento">
            <p className="mb-4">
                Respeitamos o Código de Defesa do Consumidor. Você pode cancelar sua compra em até 07 (sete) dias corridos após a aquisição, desde que o cupom não tenha sido utilizado.
            </p>
            <h3 className="font-bold mb-2">Como solicitar:</h3>
            <p className="mb-4">
                Entre em contato pelo nosso <a href="/contato" className="text-blue-600 hover:underline">Formulário de Contato</a> ou pelo WhatsApp, informando o número do pedido e o motivo do cancelamento.
            </p>
            <p>
                O reembolso será processado na mesma forma de pagamento utilizada na compra.
            </p>
        </InstitutionalPage>
    )
}

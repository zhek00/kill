import InstitutionalPage from "@/components/institutional-page";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
    return (
        <InstitutionalPage title="Dúvidas Frequentes (FAQ)">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Como recebo meu cupom?</AccordionTrigger>
                    <AccordionContent>
                        Após a confirmação do pagamento, seu cupom fica disponível imediatamente na sua conta, na seção "Meus Pedidos". Você também receberá uma cópia por e-mail.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>É preciso imprimir o cupom?</AccordionTrigger>
                    <AccordionContent>
                        Na maioria dos estabelecimentos, não! Você pode apresentar o cupom diretamente na tela do seu celular. Verifique sempre as "Regras de Uso" específicas de cada oferta para confirmar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Como cancelo uma compra?</AccordionTrigger>
                    <AccordionContent>
                        Você pode solicitar o cancelamento em até 7 dias após a compra, desde que o cupom não tenha sido utilizado. Acesse o SAC ou entre em contato pelo WhatsApp para prosseguir.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Quais as formas de pagamento?</AccordionTrigger>
                    <AccordionContent>
                        Aceitamos Cartão de Crédito (parcelado em até 12x) e PIX.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </InstitutionalPage>
    )
}

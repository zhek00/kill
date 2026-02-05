import InstitutionalPage from "@/components/institutional-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this or will use generic textarea
import { Label } from "@/components/ui/label";

export default function ContatoPage() {
    return (
        <InstitutionalPage title="Fale Conosco">
            <p className="mb-8">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

            <form className="max-w-xl space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" placeholder="Motivo do contato" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Escreva sua mensagem aqui..."
                    />
                </div>

                <Button type="submit" className="w-full">Enviar Mensagem</Button>
            </form>
        </InstitutionalPage>
    )
}

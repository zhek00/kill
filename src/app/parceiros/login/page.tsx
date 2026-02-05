import InstitutionalPage from "@/components/institutional-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ParceirosLoginPage() {
    return (
        <InstitutionalPage title="Área do Parceiro">
            <div className="max-w-md mx-auto border p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6 text-center">Login Parceiro</h2>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@empresa.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button className="w-full">Entrar</Button>
                </form>
            </div>
        </InstitutionalPage>
    )
}

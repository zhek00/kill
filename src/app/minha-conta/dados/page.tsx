import { ProfileForm } from "@/components/auth/profile-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Meus Dados | Ingressos Sul & Serra",
    description: "Gerencie seus dados pessoais",
};

export default async function ProfilePage() {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/usuario/entrar");
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-[20px] font-bold text-[#333]">Meus Dados</h2>
                <p className="text-[#666] text-[14px]">Mantenha seus dados atualizados para facilitar suas compras.</p>
            </div>

            <ProfileForm user={session.user} />
        </div>
    );
}

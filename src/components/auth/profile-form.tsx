"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { updateProfile } from "@/actions/user";
import { Loader2, Save } from "lucide-react";
import { useSession } from "next-auth/react";

const ProfileSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().optional(),
});

export const ProfileForm = ({ user }: { user: any }) => {
    const { update } = useSession();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ProfileSchema>>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: {
            name: user?.name || "",
            email: user?.email || "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            updateProfile(values).then((data) => {
                if (data.error) {
                    setError(data.error);
                }
                if (data.success) {
                    setSuccess(data.success);
                    update(); // Update session on client
                }
            });
        });
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-[8px] shadow-sm border border-[#e0e0e0]">
            <h2 className="text-[20px] font-bold text-[#333] mb-6 border-b border-[#f0f0f0] pb-4">Seus Dados Pessoais</h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-[600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-[14px] font-semibold text-[#555] mb-2">Nome Completo</label>
                        <input
                            {...form.register("name")}
                            disabled={isPending}
                            className="w-full h-[45px] px-4 rounded-[4px] border border-[#ddd] outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            placeholder="Seu nome"
                        />
                        {form.formState.errors.name && (
                            <p className="text-red-500 text-[12px] mt-1">{form.formState.errors.name.message}</p>
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-[14px] font-semibold text-[#555] mb-2">Email</label>
                        <input
                            {...form.register("email")}
                            type="email"
                            disabled={isPending}
                            className="w-full h-[45px] px-4 rounded-[4px] border border-[#ddd] outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            placeholder="seu@email.com"
                        />
                        {form.formState.errors.email && (
                            <p className="text-red-500 text-[12px] mt-1">{form.formState.errors.email.message}</p>
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-[14px] font-semibold text-[#555] mb-2">Nova Senha (Opcional)</label>
                        <input
                            {...form.register("password")}
                            type="password"
                            disabled={isPending}
                            className="w-full h-[45px] px-4 rounded-[4px] border border-[#ddd] outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            placeholder="Deixe em branco para manter a atual"
                        />
                        <p className="text-[12px] text-[#999] mt-1">Preencha apenas se desejar alterar sua senha. Mínimo de 6 caracteres.</p>
                        {form.formState.errors.password && (
                            <p className="text-red-500 text-[12px] mt-1">{form.formState.errors.password.message}</p>
                        )}
                    </div>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-4 rounded-[4px] text-[14px] border border-red-100">{error}</div>}
                {success && <div className="bg-green-50 text-green-500 p-4 rounded-[4px] text-[14px] border border-green-100">{success}</div>}

                <button
                    type="submit"
                    disabled={isPending}
                    className="h-[48px] px-8 bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold rounded-[4px] uppercase transition-colors flex items-center justify-center disabled:opacity-70 mt-4"
                >
                    {isPending ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" size={18} />}
                    {isPending ? "Salvando..." : "Salvar Alterações"}
                </button>
            </form>
        </div>
    );
};

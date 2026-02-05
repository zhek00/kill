"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const LoginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(1, "Senha é obrigatória"),
});

export const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        startTransition(async () => {
            try {
                const result = await signIn("credentials", {
                    email: values.email,
                    password: values.password,
                    redirect: false,
                });

                if (result?.error) {
                    setError("Email ou senha incorretos.");
                } else {
                    router.push("/");
                    router.refresh();
                }
            } catch (e) {
                setError("Algo deu errado.");
            }
        });
    };

    return (
        <div className="w-full max-w-[400px] bg-white p-8 rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-[#f0f0f0]">
            <h2 className="text-[24px] font-bold text-[#333] mb-6 text-center uppercase">Entrar</h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-[14px] font-semibold text-[#555] mb-1">Email</label>
                    <input
                        {...form.register("email")}
                        type="email"
                        disabled={isPending}
                        className="w-full h-[42px] px-4 rounded-[4px] border border-[#ddd] outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="seu@email.com"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-[12px] mt-1">{form.formState.errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-[14px] font-semibold text-[#555] mb-1">Senha</label>
                    <input
                        {...form.register("password")}
                        type="password"
                        disabled={isPending}
                        className="w-full h-[42px] px-4 rounded-[4px] border border-[#ddd] outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="******"
                    />
                    {form.formState.errors.password && (
                        <p className="text-red-500 text-[12px] mt-1">{form.formState.errors.password.message}</p>
                    )}
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-[4px] text-[13px]">{error}</div>}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-[48px] bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold rounded-[4px] uppercase transition-colors flex items-center justify-center disabled:opacity-50"
                >
                    {isPending ? <Loader2 className="animate-spin" /> : "Acessar Conta"}
                </button>
            </form>

            <div className="mt-6 text-center text-[14px] text-[#666]">
                Ainda não tem conta?{" "}
                <Link href="/usuario/cadastrar" className="text-[#D4AF37] font-bold hover:underline">
                    Cadastre-se
                </Link>
            </div>
        </div>
    );
};

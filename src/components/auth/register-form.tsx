"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { register } from "@/actions/register";
import { Loader2 } from "lucide-react";

const RegisterSchema = z.object({
    email: z.string().email("Email inválido"),
    confirmEmail: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),

    preferredName: z.string().min(1, "Como quer ser chamado é obrigatório"),
    name: z.string().min(1, "Nome completo é obrigatório"),

    gender: z.string().optional(),
    birthDate: z.string().optional(),
    documentType: z.string().default("CPF"),
    cpf: z.string().min(11, "CPF inválido").optional(),
    phone: z.string().optional(),
    otherPhone: z.string().optional(),

    addressZip: z.string().optional(),
    addressStreet: z.string().optional(),
    addressNumber: z.string().optional(),
    addressComplement: z.string().optional(),
    addressDistrict: z.string().optional(),
    addressCity: z.string().optional(),
    addressState: z.string().optional(),

    referralSource: z.string().optional(),

    optInEmail: z.boolean().default(false),
    optInWhatsapp: z.boolean().default(false),
    optInPurchase: z.boolean().default(false),

    termsAccepted: z.boolean().refine(val => val === true, {
        message: "Você deve aceitar os termos e condições"
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
}).refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem",
    path: ["confirmEmail"],
});

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
            preferredName: "",
            name: "",
            gender: "",
            birthDate: "",
            documentType: "CPF",
            cpf: "",
            phone: "",
            otherPhone: "",
            addressZip: "",
            addressStreet: "",
            addressNumber: "",
            addressComplement: "",
            addressDistrict: "",
            addressCity: "",
            addressState: "",
            referralSource: "",
            optInEmail: false,
            optInWhatsapp: false,
            optInPurchase: false,
            termsAccepted: false,
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values).then((data) => {
                if (data.error) {
                    setError(data.error);
                }
                if (data.success) {
                    setSuccess(data.success);
                    // Optional: redirect or reset form
                }
            });
        });
    };

    return (
        <div className="w-full max-w-[800px] bg-white p-8 rounded-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-[#f0f0f0]">
            <div className="bg-[#444] text-white p-3 -mt-8 -mx-8 mb-8 rounded-t-[8px]">
                <h2 className="text-[18px] font-bold pl-4">Cadastre-se</h2>
            </div>

            {/* Social Login Placeholders */}
            <div className="flex flex-col items-center gap-3 mb-8">
                <button type="button" className="w-full max-w-sm bg-[#3b5998] text-white py-2 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:opacity-90">
                    {/* Icon placeholder */}
                    <span className="font-bold">f</span> Entrar com o Facebook
                </button>
                <button type="button" className="w-full max-w-sm bg-white border border-gray-300 text-gray-700 py-2 rounded flex items-center justify-center gap-2 text-sm font-semibold hover:bg-gray-50">
                    {/* Icon placeholder */}
                    <span className="font-bold text-red-500">G</span> Fazer Login com o Google
                </button>
                <div className="text-gray-400 text-sm mt-2">OU</div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Access Info */}
                <div>
                    <h3 className="text-[#999] text-sm border-b border-gray-200 pb-2 mb-4">Informações da acesso</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Email <span className="text-red-500">*</span></label>
                            <input {...form.register("email")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Confirme o email <span className="text-red-500">*</span></label>
                            <input {...form.register("confirmEmail")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.confirmEmail && <p className="text-red-500 text-xs">{form.formState.errors.confirmEmail.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Senha <span className="text-red-500">*</span></label>
                            <input type="password" {...form.register("password")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.password && <p className="text-red-500 text-xs">{form.formState.errors.password.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Confirme a senha <span className="text-red-500">*</span></label>
                            <input type="password" {...form.register("confirmPassword")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.confirmPassword && <p className="text-red-500 text-xs">{form.formState.errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-[#999] text-sm border-b border-gray-200 pb-2 mb-4">Informações de contato</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Como quer ser chamado? <span className="text-red-500">*</span></label>
                            <input {...form.register("preferredName")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.preferredName && <p className="text-red-500 text-xs">{form.formState.errors.preferredName.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Nome completo <span className="text-red-500">*</span></label>
                            <input {...form.register("name")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Sexo <span className="text-red-500">*</span></label>
                            <select {...form.register("gender")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none bg-white">
                                <option value="">Selecione...</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Data de nascimento</label>
                            <input type="date" {...form.register("birthDate")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Tipo de Documento <span className="text-red-500">*</span></label>
                            <select {...form.register("documentType")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none bg-white">
                                <option value="CPF">CPF - Brasil</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">CPF <span className="text-red-500">*</span></label>
                            <input {...form.register("cpf")} placeholder="000.000.000-00" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                            {form.formState.errors.cpf && <p className="text-red-500 text-xs">{form.formState.errors.cpf.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Telefone ou celular <span className="text-red-500">*</span></label>
                            <input {...form.register("phone")} placeholder="(00) 00000-0000" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Outro telefone</label>
                            <input {...form.register("otherPhone")} placeholder="(00) 00000-0000" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-[#999] text-sm border-b border-gray-200 pb-2 mb-4">Endereço</h3>
                    <div className="grid md:grid-cols-12 gap-4 mb-4">
                        <div className="md:col-span-4 space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">CEP <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <input {...form.register("addressZip")} placeholder="00000-000" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                                <button type="button" className="bg-[#333] text-white text-xs px-3 rounded whitespace-nowrap hover:bg-black">Buscar endereço</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-12 gap-4 mb-4">
                        <div className="md:col-span-8 space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Endereço <span className="text-red-500">*</span></label>
                            <input {...form.register("addressStreet")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                        <div className="md:col-span-4 space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Número <span className="text-red-500">*</span></label>
                            <input {...form.register("addressNumber")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Complemento</label>
                            <input {...form.register("addressComplement")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Bairro <span className="text-red-500">*</span></label>
                            <input {...form.register("addressDistrict")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[13px] text-gray-600 font-medium">Cidade <span className="text-red-500">*</span></label>
                            <input {...form.register("addressCity")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none" />
                        </div>
                    </div>
                </div>

                {/* Referral */}
                <div className="space-y-1">
                    <label className="text-[13px] text-gray-600 font-medium">Onde você conheceu o site?</label>
                    <select {...form.register("referralSource")} className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#D4AF37] outline-none bg-white">
                        <option value="">Selecione...</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Indicação">Indicação</option>
                    </select>
                </div>

                {/* Notifications & Terms */}
                <div className="bg-gray-50 p-4 rounded border border-gray-100 space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">Dicas e notificações</h3>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="optInEmail" {...form.register("optInEmail")} className="rounded text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <label htmlFor="optInEmail" className="text-sm text-gray-600 cursor-pointer">Desejo receber ofertas por email.</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="optInWhatsapp" {...form.register("optInWhatsapp")} className="rounded text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <label htmlFor="optInWhatsapp" className="text-sm text-gray-600 cursor-pointer">Desejo receber ofertas por whatsapp.</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="optInPurchase" {...form.register("optInPurchase")} className="rounded text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <label htmlFor="optInPurchase" className="text-sm text-gray-600 cursor-pointer">Desejo receber informações sobre minhas compras por whatsapp.</label>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-100 space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">Termos e condições</h3>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="termsAccepted" {...form.register("termsAccepted")} className="rounded text-[#D4AF37] focus:ring-[#D4AF37]" />
                        <label htmlFor="termsAccepted" className="text-sm text-gray-600 cursor-pointer">Li e aceito os <Link href="/termos" className="text-[#008B8B] font-bold hover:underline">Termos e Condições</Link>.</label>
                    </div>
                    {form.formState.errors.termsAccepted && <p className="text-red-500 text-xs pl-6">{form.formState.errors.termsAccepted.message}</p>}
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-[4px] text-[13px]">{error}</div>}
                {success && <div className="bg-green-50 text-green-500 p-3 rounded-[4px] text-[13px]">{success}</div>}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full md:w-auto md:min-w-[200px] h-[48px] bg-[#4FAFA2] hover:bg-[#3d8f84] text-white font-bold rounded-[4px] uppercase transition-colors flex items-center justify-center disabled:opacity-50 mx-auto block mt-6"
                >
                    {isPending ? <Loader2 className="animate-spin" /> : "ENTRAR"}
                </button>
            </form>
        </div>
    );
};

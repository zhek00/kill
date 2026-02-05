"use server";

import * as z from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

const RegisterSchema = z.object({
    email: z.string().email("Email inválido"),
    confirmEmail: z.string().email("Email inválido"), // Frontend validation mainly, but good to have
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),

    preferredName: z.string().min(1, "Como quer ser chamado é obrigatório"),
    name: z.string().min(1, "Nome completo é obrigatório"),

    gender: z.string().optional(),
    birthDate: z.string().optional(), // Receive as string YYYY-MM-DD
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
    addressState: z.string().optional(), // UF

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

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Campos inválidos!" };
    }

    const {
        email, password, name, preferredName, gender, birthDate, cpf, phone, otherPhone,
        addressZip, addressStreet, addressNumber, addressComplement, addressDistrict, addressCity, addressState,
        referralSource, optInEmail, optInWhatsapp, optInPurchase
    } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return { error: "Email já está em uso!" };
    }

    // Parse date if present
    const birthDateObj = birthDate ? new Date(birthDate) : null;

    await prisma.user.create({
        data: {
            name, // Full name maps to standard name field
            email,
            password: hashedPassword,
            preferredName,
            gender,
            birthDate: birthDateObj,
            cpf,
            phone,
            otherPhone,
            addressZip,
            addressStreet,
            addressNumber,
            addressComplement,
            addressDistrict,
            addressCity,
            addressState,
            referralSource,
            optInEmail,
            optInWhatsapp,
            optInPurchase
        },
    });

    return { success: "Conta criada com sucesso!" };
};

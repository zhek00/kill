"use server";

import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

const ProfileSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    password: z.string().optional(),
});

export const updateProfile = async (values: z.infer<typeof ProfileSchema>) => {
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
        return { error: "Não autorizado" };
    }

    const validatedFields = ProfileSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Campos inválidos!" };
    }

    const { name, email, password } = validatedFields.data;

    const dataToUpdate: any = { name, email };

    if (password && password.length >= 6) {
        dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    // Check if email is taken by another user
    if (email !== session.user.email) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser && existingUser.id !== session.user.id) {
            return { error: "Este email já está em uso por outra conta." };
        }
    }

    try {
        await prisma.user.update({
            where: { id: session.user.id },
            data: dataToUpdate,
        });

        revalidatePath("/minha-conta/dados");
        return { success: "Perfil atualizado com sucesso!" };
    } catch (error) {
        return { error: "Algo deu errado ao atualizar o perfil." };
    }
};

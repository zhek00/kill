import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/usuario/entrar",
        newUser: "/usuario/cadastrar",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/minha-conta");

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            }
            return true;
        },
    },
    providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;

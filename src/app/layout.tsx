import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";

export const metadata: Metadata = {
    title: "Sul & Serra Passeios | O Melhor da Serra Gaúcha e Litoral",
    description: "Descontos exclusivos em gastronomia, lazer e viagens no Rio Grande do Sul e Santa Catarina.",
};

import { AuthProvider } from "@/components/auth/auth-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}

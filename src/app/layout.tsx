import type { Metadata } from "next";
import "./globals.css";

import ErrorReporter from "@/components/ErrorReporter";
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
                    <Script
                        id="orchids-browser-logs"
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
                        strategy="afterInteractive"
                        data-orchids-project-id="b894f932-06bd-40ad-9ffc-f1e950293b77"
                    />
                    <ErrorReporter />
                    <Script
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
                        strategy="afterInteractive"
                        data-target-origin="*"
                        data-message-type="ROUTE_CHANGE"
                        data-include-search-params="true"
                        data-only-in-iframe="true"
                        data-debug="true"
                        data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
                    />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}

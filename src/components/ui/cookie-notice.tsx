"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieNotice Component
 * Clones the fixed bottom cookie consent banner.
 * Features:
 * - Fixed bottom positioning
 * - Translucent gold background
 * - Agreement text with link to privacy policy
 * - Responsive buttons: "Eu concordo" (Green) and "Eu discordo" (Red)
 */
export default function CookieNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("ingressos_cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (agreed: boolean) => {
        localStorage.setItem("ingressos_cookie_consent", agreed ? "true" : "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                backgroundColor: "rgba(212, 175, 55, 0.95)", // Primary Gold with slight transparency
                padding: "10px 20px",
                boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
            }}
            className="md:flex-row md:gap-4 lg:px-4"
        >
            <div
                style={{
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "1.4",
                    marginBottom: "10px",
                }}
                className="md:mb-0"
            >
                Ingressos Sul & Serra e os cookies: a gente usa cookies para personalizar anúncios e melhorar sua experiência no site.
                Ao continuar navegando, você concorda com nossa{" "}
                <a
                    href="/politica-de-privacidade"
                    style={{
                        color: "#FFFFFF",
                        textDecoration: "underline",
                        fontWeight: 700,
                    }}
                >
                    Política de Privacidade
                </a>.
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={() => handleConsent(true)}
                    style={{
                        backgroundColor: "#4BB05D", // Secondary Success Green
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "4px",
                        padding: "6px 16px",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "none",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3E8E41")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4BB05D")}
                >
                    Eu concordo
                </button>

                <button
                    onClick={() => handleConsent(false)}
                    style={{
                        backgroundColor: "#EF4444", // Destructive Red
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "4px",
                        padding: "6px 16px",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                        textTransform: "none",
                        transition: "background-color 0.2s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#DC2626")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#EF4444")}
                >
                    Eu discordo
                </button>
            </div>
        </div>
    );
}
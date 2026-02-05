import React from 'react';

interface InstitutionalPageProps {
    title: string;
    children: React.ReactNode;
}

export default function InstitutionalPage({ title, children }: InstitutionalPageProps) {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-[#D4AF37]">{title}</h1>
            <div className="prose max-w-none text-gray-700">
                {children}
            </div>
        </div>
    );
}

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, MapPin, AlertCircle } from "lucide-react";

interface ProductContentProps {
    description: string;
    rules: string[];
    address: {
        street: string;
        city: string;
        state: string;
        zip?: string;
    };
    highlights?: string[];
}

export default function ProductContent({
    description,
    rules,
    address,
    highlights,
}: ProductContentProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-8">
            {/* Highlights */}
            {highlights && highlights.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-bold uppercase flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Destaques
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {highlights.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="h-px w-full bg-border" />

            {/* Main Content Accordion */}
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
                <AccordionItem value="description">
                    <AccordionTrigger className="text-lg font-bold uppercase">Sobre a Oferta</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {description}
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rules">
                    <AccordionTrigger className="text-lg font-bold uppercase">Regras & Condições</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2">
                            {rules.map((rule, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <AlertCircle className="mt-0.5 h-4 w-4 text-orange-500 flex-shrink-0" />
                                    <span>{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="location">
                    <AccordionTrigger className="text-lg font-bold uppercase">Localização</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">{address.street}</p>
                                    <p className="text-muted-foreground">
                                        {address.city} - {address.state}
                                    </p>
                                    {address.zip && <p className="text-muted-foreground">CEP: {address.zip}</p>}
                                </div>
                            </div>
                            {/* Placeholder for Map - In a real app, embed Google Maps here */}
                            <div className="w-full h-[250px] bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground text-sm border">
                                Mapa Interativo indisponível
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

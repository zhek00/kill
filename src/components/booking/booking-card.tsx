"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Loader2, Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

interface ProductOption {
    id: string;
    title: string;
    description?: string | null;
    price: string;
    originalPrice?: string | null;
}

interface BookingCardProps {
    product: {
        title: string;
        options?: ProductOption[];
        availableDays?: string | null;
    };
}

export function BookingCard({ product }: BookingCardProps) {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [quantities, setQuantities] = React.useState<Record<string, number>>({});
    const [isPending, setIsPending] = React.useState(false);

    // Initialize quantities with 0
    React.useEffect(() => {
        if (product.options) {
            const initial: Record<string, number> = {};
            product.options.forEach(opt => initial[opt.id] = 0);
            setQuantities(initial);
        }
    }, [product.options]);

    const handleIncrement = (id: string) => {
        setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const handleDecrement = (id: string) => {
        setQuantities(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - 1) }));
    };

    const totalPrice = React.useMemo(() => {
        if (!product.options) return 0;
        return product.options.reduce((acc, opt) => {
            const quantity = quantities[opt.id] || 0;
            const price = parseFloat(opt.price);
            return acc + (price * quantity);
        }, 0);
    }, [product.options, quantities]);

    const handleBooking = () => {
        if (!date) {
            toast.error("Selecione uma data para continuar.");
            return;
        }

        const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
        if (totalItems === 0) {
            toast.error("Selecione pelo menos um ingresso.");
            return;
        }

        setIsPending(true);
        // Simulate booking process
        setTimeout(() => {
            setIsPending(false);
            const query = new URLSearchParams({
                productId: product.title, // or ID if we had it here
                date: date.toISOString(),
                items: JSON.stringify(quantities),
                total: totalPrice.toString()
            });
            // Redirect or Open Checkout
            toast.success("Agendamento iniciado! (Simulação)");
            console.log("Booking:", Object.fromEntries(query));
        }, 1000);
    };

    // Calculate Disabled Days based on availableDays string
    // Format expected: "Seg,Ter" or "1,2" (Sun=0) or null (all available)
    const isDateDisabled = (date: Date) => {
        if (!product.availableDays) return false; // Available all days if config is missing

        // Simple parser: check if day name or index is in string
        const dayIndex = date.getDay(); // 0-6
        const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
        const dayName = dayNames[dayIndex];

        // If config provided, assume it lists ALLOWED days.
        // So disabled if NOT in string? Or assumes string lists BLOCKED?
        // Usually config lists "Dias Disponíveis". So if NOT in string, it is disabled.

        // Normalize config
        const config = product.availableDays.toLowerCase();

        // Check for specific date exclusions/inclusions could be added here

        const isAllowed = config.includes(dayIndex.toString()) || config.includes(dayName.toLowerCase());
        return !isAllowed;
    };

    return (
        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm border border-gray-100 sticky top-24">
            <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase text-center border-b pb-2">Selecione uma data</h2>
                <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ptBR}
                        disabled={(date) => isDateDisabled(date) || date < new Date()}
                        className="rounded-md border shadow-sm p-3 pointer-events-auto"
                    />
                </div>
            </div>

            {date && (
                <div className="bg-blue-50 text-blue-800 p-2 text-center rounded text-sm font-semibold">
                    Agendando para: {format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </div>
            )}

            <div className="space-y-4">
                {product.options?.map((option) => (
                    <div key={option.id} className="flex flex-col border-b pb-3 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                            <div className="pr-2">
                                <p className="font-bold text-sm text-gray-800">{option.title}</p>
                                {option.description && <p className="text-xs text-gray-500">{option.description}</p>}
                                <div className="mt-1">
                                    <span className="font-bold text-[#4FAFA2]">R$ {option.price.replace('.', ',')}</span>
                                    {option.originalPrice && (
                                        <span className="text-xs text-gray-400 line-through ml-2">R$ {option.originalPrice.replace('.', ',')}</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 rounded p-1">
                                <button
                                    onClick={() => handleDecrement(option.id)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-red-500 disabled:opacity-50"
                                    disabled={!quantities[option.id]}
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-6 text-center font-bold text-sm">{quantities[option.id] || 0}</span>
                                <button
                                    onClick={() => handleIncrement(option.id)}
                                    className="w-8 h-8 flex items-center justify-center bg-[#4FAFA2] rounded shadow-sm text-white hover:bg-[#3d8f84]"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-gray-500">Total</span>
                    <span className="text-3xl font-bold text-[#4FAFA2]">
                        R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </span>
                </div>

                <Button
                    onClick={handleBooking}
                    disabled={isPending || !date || totalPrice === 0}
                    className="w-full bg-[#4FAFA2] hover:bg-[#3d8f84] h-12 text-lg font-bold uppercase shadow-md transition-all hover:shadow-lg"
                >
                    {isPending ? <Loader2 className="animate-spin mr-2" /> : "CONTINUAR COM AGENDAMENTO"}
                </Button>
            </div>
        </div>
    );
}

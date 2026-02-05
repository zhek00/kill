"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2 } from "lucide-react"
import { updateProduct } from "@/actions/admin-products"
import { useState } from "react"

interface Product {
    id: string
    title: string
    slug: string
    location: string
    descriptionShort: string
    description: string
    currentPrice: string
    originalPrice?: string | null
    discount?: number | null
    savings?: string | null
    installments?: string | null
    isExclusive: boolean
    megaPromo: boolean
    idv?: string | null
    images: string[]
    rules: string[]
    categories: string[]
    address: {
        street: string
        city: string
        state: string
        zip?: string | null
    }
    availableDays?: string | null
    options?: {
        id: string
        title: string
        description?: string | null
        price: string
        originalPrice?: string | null
    }[]
}

export function EditProductDialog({ product }: { product: Product }) {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState(product.options || []);

    // New option state
    const [newOptTitle, setNewOptTitle] = useState("");
    const [newOptPrice, setNewOptPrice] = useState("");
    const [newOptOriginal, setNewOptOriginal] = useState("");
    const [newOptDesc, setNewOptDesc] = useState("");

    const addOption = () => {
        if (!newOptTitle || !newOptPrice) return;
        setOptions([...options, {
            id: Math.random().toString(36).substring(2), // temp id
            title: newOptTitle,
            price: newOptPrice,
            originalPrice: newOptOriginal,
            description: newOptDesc
        }]);
        setNewOptTitle("");
        setNewOptPrice("");
        setNewOptOriginal("");
        setNewOptDesc("");
    };

    const removeOption = (index: number) => {
        const newOpts = [...options];
        newOpts.splice(index, 1);
        setOptions(newOpts);
    };

    async function handleAction(formData: FormData) {
        await updateProduct(product.id, formData)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Editar Produto</DialogTitle>
                    <DialogDescription>
                        Faça alterações no produto aqui. Clique em salvar quando terminar.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleAction}>
                    <input type="hidden" name="optionsJSON" value={JSON.stringify(options)} />
                    <div className="grid gap-4 py-4">

                        {/* Basic Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Título</Label>
                                <Input id="title" name="title" defaultValue={product.title} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Slug (URL)</Label>
                                <Input id="slug" name="slug" defaultValue={product.slug} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location">Local</Label>
                                <Input id="location" name="location" defaultValue={product.location} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="idv">IDV (Opcional)</Label>
                                <Input id="idv" name="idv" defaultValue={product.idv || ''} />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <Label htmlFor="descriptionShort">Descrição Curta</Label>
                            <Input id="descriptionShort" name="descriptionShort" defaultValue={product.descriptionShort} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descrição Completa</Label>
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={product.description}
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        {/* Booking & Availability */}
                        <div className="space-y-2 border-t pt-4 bg-blue-50/50 p-4 rounded-md">
                            <Label className="font-bold text-blue-700">Configuração de Agendamento</Label>
                            <div className="space-y-2">
                                <Label htmlFor="availableDays">Dias Disponíveis (String de configuração)</Label>
                                <Input id="availableDays" name="availableDays" defaultValue={product.availableDays || ''} placeholder='ex: "Seg,Ter,Qua" ou JSON customizado' />
                            </div>

                            <div className="space-y-2 mt-4">
                                <Label>Tipos de Ingressos (Opções)</Label>
                                <div className="space-y-2 border p-3 rounded bg-white">
                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 items-end">
                                        <div className="lg:col-span-2">
                                            <Label className="text-xs">Título</Label>
                                            <Input value={newOptTitle} onChange={e => setNewOptTitle(e.target.value)} placeholder="Ex: Adulto" />
                                        </div>
                                        <div>
                                            <Label className="text-xs">Preço</Label>
                                            <Input value={newOptPrice} onChange={e => setNewOptPrice(e.target.value)} placeholder="99.90" />
                                        </div>
                                        <div>
                                            <Label className="text-xs">Original</Label>
                                            <Input value={newOptOriginal} onChange={e => setNewOptOriginal(e.target.value)} placeholder="120.00" />
                                        </div>
                                        <Button type="button" onClick={addOption} size="sm" className="w-full">Adicionar</Button>
                                    </div>
                                    <div className="mt-2">
                                        <Label className="text-xs">Descrição (Opcional)</Label>
                                        <Input value={newOptDesc} onChange={e => setNewOptDesc(e.target.value)} placeholder="Ex: A partir de 12 anos" />
                                    </div>
                                </div>

                                {/* List of options */}
                                <div className="space-y-2 mt-2">
                                    {options.map((opt, idx) => (
                                        <div key={idx} className="flex items-center justify-between border p-2 rounded bg-white shadow-sm">
                                            <div>
                                                <div className="font-bold text-sm">{opt.title}</div>
                                                <div className="text-xs text-gray-500">{opt.description}</div>
                                                <div className="text-xs font-mono">R$ {opt.price} <span className="line-through text-gray-300">{opt.originalPrice}</span></div>
                                            </div>
                                            <Button type="button" variant="ghost" size="sm" onClick={() => removeOption(idx)} className="text-red-500">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Prices */}
                        <div className="grid grid-cols-4 gap-4 bg-muted/20 p-4 rounded-md">
                            <div className="space-y-2">
                                <Label htmlFor="currentPrice">Preço (Display)</Label>
                                <Input id="currentPrice" name="currentPrice" defaultValue={product.currentPrice} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="originalPrice">Original (Display)</Label>
                                <Input id="originalPrice" name="originalPrice" defaultValue={product.originalPrice || ''} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="discount">Desconto %</Label>
                                <Input id="discount" name="discount" type="number" defaultValue={product.discount || ''} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="savings">Economia</Label>
                                <Input id="savings" name="savings" defaultValue={product.savings || ''} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="installments">Parcelamento</Label>
                            <Input id="installments" name="installments" defaultValue={product.installments || ''} />
                        </div>

                        {/* Booleans */}
                        <div className="flex gap-6">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="isExclusive" name="isExclusive" defaultChecked={product.isExclusive} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <Label htmlFor="isExclusive">Exclusivo</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="megaPromo" name="megaPromo" defaultChecked={product.megaPromo} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <Label htmlFor="megaPromo">Mega Promo</Label>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-2 border-t pt-4">
                            <Label className="font-bold">Endereço</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <Input name="addressStreet" placeholder="Rua" defaultValue={product.address?.street} />
                                <Input name="addressCity" placeholder="Cidade" defaultValue={product.address?.city} />
                                <Input name="addressState" placeholder="Estado" defaultValue={product.address?.state} />
                                <Input name="addressZip" placeholder="CEP" defaultValue={product.address?.zip || ''} />
                            </div>
                        </div>

                        {/* Relations */}
                        <div className="space-y-2 border-t pt-4">
                            <Label htmlFor="images">Imagens (uma URL por linha)</Label>
                            <textarea
                                id="images"
                                name="images"
                                defaultValue={product.images?.join('\n')}
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-xs"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="rules">Regras (uma regra por linha)</Label>
                            <textarea
                                id="rules"
                                name="rules"
                                defaultValue={product.rules?.join('\n')}
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Salvar Alterações</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

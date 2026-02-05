"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

interface CategoryOption {
    label: string;
    value: string;
}

const CATEGORIES: CategoryOption[] = [
    { label: 'Parques Aquáticos', value: 'parques-aquaticos' },
    { label: 'Gastro POA', value: 'gastro-poa' },
    { label: 'Lazer POA', value: 'lazer-poa' },
    { label: 'Serra Gaúcha', value: 'serra-gaucha' },
    { label: 'Cinema', value: 'cinema' },
    { label: 'Shows e Teatro', value: 'shows-teatro' },
];

const LOCATIONS = [
    'Porto Alegre',
    'Gramado',
    'Canela',
    'Novo Hamburgo',
    'Canoas',
    'Litoral'
];

export default function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initial state from URL
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
    const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || '');
    const [priceRange, setPriceRange] = useState({
        min: searchParams.get('minPrice') || '',
        max: searchParams.get('maxPrice') || ''
    });

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleFilter = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedCategory) params.set('category', selectedCategory);
        else params.delete('category');

        if (selectedLocation) params.set('location', selectedLocation);
        else params.delete('location');

        if (priceRange.min) params.set('minPrice', priceRange.min);
        else params.delete('minPrice');

        if (priceRange.max) params.set('maxPrice', priceRange.max);
        else params.delete('maxPrice');

        // Reset to page 1 if needed (but we are not paginating yet)

        router.push(`/busca?${params.toString()}`);
        setIsMobileOpen(false);
    };

    const handleClear = () => {
        setSelectedCategory('');
        setSelectedLocation('');
        setPriceRange({ min: '', max: '' });
        router.push('/busca');
        setIsMobileOpen(false);
    };

    return (
        <div className="w-full lg:w-[280px] flex-shrink-0">
            {/* Mobile Toggle */}
            <button
                className="lg:hidden w-full bg-white p-3 rounded-md shadow-sm flex items-center justify-between mb-4 font-semibold text-[#333]"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <div className="flex items-center gap-2">
                    <Filter size={20} className="text-[#D4AF37]" />
                    Filtrar Resultados
                </div>
                {isMobileOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <div className={`
                bg-white p-5 rounded-md shadow-sm border border-gray-100
                ${isMobileOpen ? 'block' : 'hidden lg:block'}
            `}>
                <h3 className="font-bold text-[18px] text-[#333] mb-6 uppercase border-b pb-2">Filtros</h3>

                {/* Categories */}
                <div className="mb-6">
                    <h4 className="font-semibold text-[14px] uppercase text-[#737373] mb-3">Categorias</h4>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === ''}
                                onChange={() => setSelectedCategory('')}
                                className="accent-[#D4AF37]"
                            />
                            <span className="text-[14px] text-[#333]">Todas</span>
                        </label>
                        {CATEGORIES.map(cat => (
                            <label key={cat.value} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat.value}
                                    checked={selectedCategory === cat.value}
                                    onChange={() => setSelectedCategory(cat.value)}
                                    className="accent-[#D4AF37]"
                                />
                                <span className="text-[14px] text-[#333]">{cat.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                    <h4 className="font-semibold text-[14px] uppercase text-[#737373] mb-3">Cidade</h4>
                    <select
                        className="w-full border border-gray-300 rounded p-2 text-[14px] text-[#333] outline-none focus:border-[#D4AF37]"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        <option value="">Todas as cidades</option>
                        {LOCATIONS.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                {/* Price */}
                <div className="mb-8">
                    <h4 className="font-semibold text-[14px] uppercase text-[#737373] mb-3">Faixa de Preço</h4>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="Mín"
                            className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-[#D4AF37]"
                            value={priceRange.min}
                            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                        />
                        <span className="text-gray-400">-</span>
                        <input
                            type="number"
                            placeholder="Máx"
                            className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-[#D4AF37]"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleFilter}
                        className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-white font-bold py-2 rounded transition-colors uppercase text-[14px]"
                    >
                        Aplicar Filtros
                    </button>
                    <button
                        onClick={handleClear}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-[#555] font-semibold py-2 rounded transition-colors text-[13px]"
                    >
                        Limpar
                    </button>
                </div>
            </div>
        </div>
    );
}

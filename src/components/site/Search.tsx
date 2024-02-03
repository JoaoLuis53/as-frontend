"use client"

import { SearchResult } from "@/types/SearchResult";
import { useState } from "react";
import { SearchForm } from "./SearchForm";
import * as api from '@/api/site';
import { SearchReveal } from "./SearchReveal";

type Props = {
    id: number;
}

export const Search = ({ id }: Props) => {
    const [result, setResult] = useState<SearchResult>();
    const [loading, setLoading] = useState(false)

    const handleSearchButton = async (cpf: string) => {
        if (!cpf) return;
        setLoading(true);
        const result = await api.searchCPF(id, cpf);
        setLoading(false);
        if (!result) return alert('Desculpe, não encontramos seu CPF!!');

        setResult(result);
    }

    return (
        <section className="bg-gray-900 p-5 rounded">
            {!result && <SearchForm
                onSearchButton={handleSearchButton}
                loading={loading}
            />}
            {result && <SearchReveal results={result} />}
        </section>
    );
}
"use client";

import { FC } from "react";

import PokemonCard from "@/components/cards/PokemonCard";
import PaginationControls from "@/components/paginations/PaginationControls";
import Loading from "@/components/Loading/Loading";

import { usePokemonList } from "@/hooks/pokemon/usePokemonList";
import { PokemonListType } from "@/types/pokemon";

type HomeProps = {
    searchParams: { page?: string };
};

const Home: FC<HomeProps> = ({ searchParams }) => {
    const page = parseInt(searchParams.page || "1", 10);
    const offset = (page - 1) * 20;

    const { data: pokemonList, isLoading, error } = usePokemonList(offset);

    if (isLoading) return <Loading />;
    if (error) return <p>Something went wrong: {error.message}</p>;

    return (
        <div className="p-3">
            <h1 className="text-center text-3xl font-black">POKEDEX</h1>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                {pokemonList.map((pokemon: PokemonListType) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))}
            </div>
            <PaginationControls currentPage={page} />
        </div>
    );
};

export default Home;

"use client";

import { FC } from "react";

import PokemonCard from "@/components/cards/PokemonCard";
import PaginationControls from "@/components/paginations/PaginationControls";
import Loading from "@/components/Loading/Loading";

import { usePokemonList } from "@/hooks/pokemon/usePokemonList";
import { MyPokemonType, PokemonListType } from "@/types/pokemon";
import { usePokemonContext } from "@/context/PokemonContext";
import MyPokemonCard from "@/components/cards/MyPokemonCard";

type HomeProps = {
    searchParams: { page?: string };
};

const Home: FC<HomeProps> = ({ searchParams }) => {
    const page = parseInt(searchParams.page || "1", 10);
    const offset = (page - 1) * 20;

    const { data: pokemonList, isLoading, error } = usePokemonList(offset);
    const { myPokemon } = usePokemonContext();

    if (isLoading) return <Loading />;
    if (error) return <p>Something went wrong: {error.message}</p>;

    return (
        <div className="p-3">
            <h1 className="text-center text-3xl font-black">MY POKEMON</h1>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                {myPokemon.map((pokemon: MyPokemonType) => (
                    <MyPokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
                ))}
            </div>

            <h1 className="mt-20 text-center text-3xl font-black">POKEMON LIST</h1>
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

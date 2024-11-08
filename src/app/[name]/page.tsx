"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import Loading from "@/components/Loading/Loading";

import { usePokemonDetails } from "@/hooks/pokemon/usePokemonDetails";
import { Ability, PokemonType } from "@/types/pokemon";
import { usePokemonContext } from "@/context/PokemonContext";
import { useRouter } from "next/navigation";

type PokemonDetailProps = {
    params: {
        name: string;
    };
};

const PokemonDetail: FC<PokemonDetailProps> = ({ params }) => {
    const { name } = params;
    const { data, isLoading, error } = usePokemonDetails(name);
    const { addPokemon } = usePokemonContext();
    const router = useRouter();

    const handleSavePokemon = () => {
        addPokemon({
            name: data.name,
            image: data.sprites.front_default,
        });
        router.push("/");
    };

    if (isLoading) return <Loading />;
    if (error) return <p>Something went wrong</p>;

    return (
        <div className="mx-auto flex max-w-sm flex-col items-center p-4">
            <h1 className="text-center text-4xl font-bold">Pokemon Details</h1>
            <h1 className="mt-20 text-3xl font-bold">{data.name}</h1>
            <Image
                src={data.sprites.front_default}
                alt={data.name}
                className="my-4"
                width={120}
                height={120}
            />

            <div className="flex w-full">
                <p className="w-20 text-xl font-bold">Types: </p>
                <ul className="ml-10 list-disc">
                    {data.types.map((type: PokemonType) => (
                        <li key={type.slot} className="text-lg">
                            {type.type.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-3 flex w-full">
                <p className="w-20 text-xl font-bold">Abilities: </p>
                <ul className="ml-10 list-disc">
                    {data.abilities.map((ability: Ability, idx: number) => (
                        <li key={idx} className="text-lg">
                            {ability.ability.name}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={handleSavePokemon}
                className="mt-10 rounded-md bg-blue-500 px-4 py-2 text-white"
            >
                Catch Pokemon
            </button>
        </div>
    );
};

export default PokemonDetail;

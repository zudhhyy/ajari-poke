"use client";

import { FC, useEffect, useState } from "react";
import { usePokemonDetails } from "@/hooks/pokemon/usePokemonDetails";

import Loading from "@/components/Loading/Loading";
import Image from "next/image";
import { Ability, PokemonType } from "@/types/pokemon";

type PokemonDetailProps = {
    params: {
        name: string;
    };
};

const PokemonDetail: FC<PokemonDetailProps> = ({ params }) => {
    const { name } = params;
    const { data, isLoading, error } = usePokemonDetails(name);

    if (isLoading) return <Loading />;
    if (error) return <p>Something went wrong</p>;

    return (
        <div className="flex max-w-sm flex-col items-center p-4">
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

            <button className="mt-10 rounded-md bg-blue-500 px-4 py-2 text-white">
                Catch Pokemon
            </button>
        </div>
    );
};

export default PokemonDetail;

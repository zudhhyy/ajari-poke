"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { usePokemonContext } from "@/context/PokemonContext";

type MyPokemonCardProps = {
    name: string;
    image: string;
};

const MyPokemonCard: FC<MyPokemonCardProps> = ({ name, image }) => {
    const { removePokemon } = usePokemonContext();

    const handleRemovePokemon = () => {
        removePokemon(name);
    };

    return (
        <div className="rounded-md border bg-white p-4">
            <h3 className="text-center text-lg font-bold text-black">{name}</h3>
            <Image src={image} alt={name} className="mx-auto" width={100} height={100} />
            <Link href={`/${name}`}>
                <p className="rounded-md bg-blue-500 text-center font-medium text-white">Details</p>
            </Link>
            <button onClick={handleRemovePokemon} className="mt-2 w-full rounded-md bg-red-500">
                Release
            </button>
        </div>
    );
};

export default MyPokemonCard;

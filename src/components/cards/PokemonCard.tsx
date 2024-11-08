"use client";

import Link from "next/link";
import { FC } from "react";
import { usePokemonImage } from "@/hooks/pokemon/usePokemonImage";

type PokemonCardProps = {
    name: string;
    url: string;
};

const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
    const { data: imageUrl, isLoading } = usePokemonImage(url);

    return (
        <div className="rounded-md border p-4">
            <h3 className="text-lg font-bold">{name}</h3>
            {isLoading ? (
                <p>Loading image...</p>
            ) : (
                imageUrl && <img src={imageUrl} alt={name} className="mx-auto h-24 w-24" />
            )}
            <Link href={`/${name}`}>detail</Link>
        </div>
    );
};

export default PokemonCard;

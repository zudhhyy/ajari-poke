"use client";

import Link from "next/link";
import { FC } from "react";
import { usePokemonImage } from "@/hooks/pokemon/usePokemonImage";
import Image from "next/image";

type PokemonCardProps = {
    name: string;
    url: string;
};

const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
    const { data: imageUrl, isLoading } = usePokemonImage(url);

    return (
        <div className="rounded-md border bg-white p-4">
            <h3 className="text-center text-lg font-bold text-black">{name}</h3>
            {isLoading ? (
                <p className="text-center text-xs text-black">Loading image...</p>
            ) : (
                imageUrl && (
                    <Image src={imageUrl} alt={name} className="mx-auto" width={100} height={100} />
                )
            )}
            <Link href={`/${name}`}>
                <p className="rounded-md bg-blue-500 text-center font-medium text-black text-white">
                    Details
                </p>
            </Link>
        </div>
    );
};

export default PokemonCard;

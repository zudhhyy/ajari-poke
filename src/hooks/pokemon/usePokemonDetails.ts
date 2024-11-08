import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_POKEAPI_URL;

const fetchPokemonDetails = async (name: string) => {
    if (!BASE_URL) {
        throw new Error("NEXT_PUBLIC_POKEAPI_URL is not set");
    }

    try {
        const { data } = await axios.get(`${BASE_URL}/${name}`);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                `Failed to fetch details for Pokémon "${name}": ${error.response?.status || "Unknown Status"} - ${error.response?.statusText || "Unknown Error"}`
            );
        }
        throw new Error("An unexpected error occurred while fetching Pokémon details.");
    }
};

export const usePokemonDetails = (name: string) =>
    useQuery({
        queryKey: ["pokemonDetails", name],
        queryFn: () => fetchPokemonDetails(name),
        enabled: !!name,
    });

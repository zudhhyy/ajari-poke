import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_POKEAPI_URL;

const fetchPokemonList = async (offset: number = 0) => {
    try {
        if (!BASE_URL) {
            throw new Error("NEXT_PUBLIC_POKEAPI_URL is not set");
        }

        const { data } = await axios.get(`${BASE_URL}?offset=${offset}`);
        return data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                `Failed to fetch Pokemon data: ${error.response?.status} ${error.response?.statusText}`
            );
        } else {
            throw new Error("An unexpected error occurred while fetching Pokemon data.");
        }
    }
};

export const usePokemonList = (offset: number) =>
    useQuery({
        queryKey: ["pokemonList", offset],
        queryFn: () => fetchPokemonList(offset),
    });

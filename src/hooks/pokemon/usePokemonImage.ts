import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPokemonImage = async (url: string) => {
    const { data } = await axios.get(url);
    return data.sprites.front_default;
};

export const usePokemonImage = (url: string) => {
    return useQuery({
        queryKey: ["pokemonImage", url],
        queryFn: () => fetchPokemonImage(url),
        staleTime: 1000 * 60 * 5,
    });
};

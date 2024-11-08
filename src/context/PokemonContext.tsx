"use client";

import { MyPokemonType } from "@/types/pokemon";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type PokemonContextType = {
    myPokemon: MyPokemonType[];
    addPokemon: (pokemon: MyPokemonType) => void;
    removePokemon: (name: string) => void;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const [myPokemon, setMyPokemon] = useState<MyPokemonType[]>([]);

    useEffect(() => {
        const savedPokemon = JSON.parse(localStorage.getItem("myPokemon") || "[]");

        setMyPokemon(savedPokemon);
    }, []);

    const addPokemon = (pokemon: MyPokemonType) => {
        if (myPokemon.some((p) => p.name === pokemon.name)) {
            alert("Pokemon already catch before.");
            return;
        }

        localStorage.setItem("myPokemon", JSON.stringify([...myPokemon, pokemon]));
        setMyPokemon([...myPokemon, pokemon]);
    };

    const removePokemon = (name: string) => {
        const newPokemon = myPokemon.filter((p) => p.name !== name);
        localStorage.setItem("myPokemon", JSON.stringify(newPokemon));
        setMyPokemon(newPokemon);
    };

    return (
        <PokemonContext.Provider value={{ myPokemon, addPokemon, removePokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemonContext must be used within a PokemonProvider");
    }
    return context;
};

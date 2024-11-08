import { FC, ReactNode } from "react";
import localFont from "next/font/local";

import QueryProvider from "@/components/providers/QueryProvider";
import { PokemonProvider } from "@/context/PokemonContext";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <QueryProvider>
            <PokemonProvider>
                <html lang="en">
                    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                        {children}
                    </body>
                </html>
            </PokemonProvider>
        </QueryProvider>
    );
};

export default RootLayout;

"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useState } from "react";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <Image
        src="/montana.jpg"
        width={700}
        height={1000}
        objectFit="contain"
        alt="Imagen de fondo"
      />
      </div>
      <div className="relative z-10 text-center px-5 bg-white bg-opacity-80 rounded-lg p-5 shadow-lg">
        <h1 className="text-2xl mb-2">Bienvenidos a</h1>
        <h2 className="text-4xl font-bold">Café Imperial</h2>
        <p className="text-lg">La pureza del grano, el placer del momento.</p>
        <div className="mt-8 mb-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
          />
        </div>
        <p>
          Ingrese para ver las opciones de compra{" "}
          <Link href="/blockexplorer" passHref className="link">
            Catálogo de compra.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;

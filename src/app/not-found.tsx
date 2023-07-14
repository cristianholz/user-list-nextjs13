"use client";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-2xl mb-3">Página não encontrada!</h2>
      <Link className="rounded-lg bg-purple-800 text-white px-8 py-2" href="/">
        Voltar
      </Link>
    </div>
  );
}

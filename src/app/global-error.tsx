"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h2 className="font-bold text-2xl mb-3">Ocorreu um erro!</h2>
      <Link className="rounded-lg bg-purple-800 text-white px-8 py-2" href="/">
        Voltar
      </Link>
    </div>
  );
}

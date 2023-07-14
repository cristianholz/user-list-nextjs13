"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

export function Input() {
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 300);

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setInputValue(targetValue);
  };

  useEffect(() => {
    if (inputValue === "") return router.push("/");
    router.push(`?name_like=${debouncedSearchTerm}`);
  }, [debouncedSearchTerm, inputValue, router]);

  return (
    <div className="flex flex-col">
      <label className="font-bold mb-1" htmlFor="search">
        Buscar
      </label>
      <input
        name="search"
        type="text"
        placeholder="Buscar"
        onChange={handleChange}
        value={inputValue}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-purple-800"
      />
    </div>
  );
}

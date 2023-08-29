"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        className="bg-transparent w-full h-14 placeholder-gray-500 flex-1 outline-none"
        type="text"
        value={search}
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        type="submit"
        className="text-[#F5C518] disabled:text-gray-400"
      >
        search
      </button>
    </form>
  );
}

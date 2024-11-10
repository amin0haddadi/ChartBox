"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchPage = () => {
  const [coinName, setCoinName] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (coinName.trim()) {
      router.push(`/coin/${coinName.trim()}`);
    }
  };

  return (
    <section className="flex flex-col bg-[#FFFFFF] w-[604px] text-black p-10 rounded-3xl shadow-custom gap-8">
      <header>
        <h1 className="font-semibold text-[19px] pb-5 border-b-[1px] border-[#F5F5F5]">
          crypto
        </h1>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex flex-col gap-4"
      >
        <label htmlFor="coin">Enter Symbol Name and Search:</label>
        <input
          id="coin"
          type="text"
          placeholder="Symbol Name"
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
          className="border-[1px] border-[#F5F5F5] rounded px-5 py-[11px] placeholder-[#242424]"
        />
      </form>
      <button
        type="submit"
        onClick={handleSearch}
        className="rounded px-5 py-3 bg-[#0059FF] text-[#FFFFFF] items-center hover:bg-blue-700"
      >
        Search
      </button>
    </section>
  );
};

export default SearchPage;

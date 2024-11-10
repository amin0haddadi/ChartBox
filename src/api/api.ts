import { ICoinData } from "@/types/interfaces";

export const fetchCoinData = async (
  slug: string
): Promise<ICoinData | null> => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return null;
  }
};

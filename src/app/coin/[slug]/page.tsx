import { fetchCoinData } from "@/api/api";
import Image from "next/image";
import { notFound } from "next/navigation";

type CoinPageProps = {
  params: { slug: string };
};

const CoinPage = async ({ params }: CoinPageProps) => {
  const coinData = await fetchCoinData(params.slug);
  if (!coinData || !coinData.name || !coinData.symbol) {
    notFound();
  }

  return (
    <article className="flex flex-col bg-[#FFFFFF] w-[604px] text-black p-10 rounded-3xl shadow-custom gap-8">
      <header>
        <h1 className="font-semibold text-[19px] pb-[21px] border-b-[1px] border-[#F5F5F5]">
          {coinData.name}
        </h1>
      </header>
      <section
        aria-labelledby="coin-image"
        className="flex justify-center items-center"
      >
        <Image
          src={`/${coinData.name}.png`}
          alt={coinData.web_slug}
          width={104}
          height={104}
        />
      </section>
      <section aria-labelledby="coin-details" className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>Name</p>
          <p className="font-medium">{coinData.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Symbol</p>
          <p className="font-medium">{coinData.symbol.toUpperCase()}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Price</p>
          <p className="font-medium">
            {coinData.market_data.current_price.usd.toLocaleString()}$
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Description</p>
          <p className="font-medium line-clamp-4">{coinData.description.en}</p>
        </div>
      </section>
    </article>
  );
};
export default CoinPage;

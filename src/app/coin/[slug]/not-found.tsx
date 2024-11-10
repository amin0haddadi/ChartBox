import Image from "next/image";

const CustomNotFound = () => {
  return (
    <article className="flex flex-col bg-[#FFFFFF] w-[604px] text-black p-10 rounded-3xl shadow-custom gap-8">
      <header>
        <h1 className="font-semibold text-[19px] pb-[21px] border-b-[1px] border-[#F5F5F5]">
          Not Found
        </h1>
      </header>
      <section
        aria-labelledby="not-found-message"
        className="flex flex-col justify-center items-center gap-6"
      >
        <Image
          src="/close-circle.png"
          alt="Not Found"
          width={104}
          height={104}
        />
        <p className="font-medium">Symbol not found!</p>
      </section>
    </article>
  );
};

export default CustomNotFound;

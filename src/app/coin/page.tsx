const Home = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] w-[604px] text-black p-10 rounded-3xl shadow-custom gap-8">
      <div className="font-semibold text-[19px] pb-4 border-b-[1px] border-[#F5F5F5]">
        crypto
      </div>
      <div className="flex flex-col gap-4">
        <div className="">Enter Symbol Name and Search:</div>
        <input
          type="text"
          placeholder="Symbol Name"
          className="border-[1px] border-[#F5F5F5] rounded-1 px-5 py-3 placeholder-[#242424]"
        ></input>
      </div>
      <button className="rounded-1 px-5 py-3 bg-[#0059FF] text-[#FFFFFF] items-center hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default Home;

import Products from "../Products";

const Trending = () => {
  return (
    <section className="w-[90%] mx-auto">
      <h3 className="font-bold text-3xl text-slate-100 mb-3">
        Whats trending now
      </h3>
      <p className="mb-5">Discover the most trending products in Rebel</p>

      <div className="flex items-center justify-between text-sm">
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full active:bg-slate-100 mb-5">
          All items
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full">
          Men{" "}
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full">
          Women
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full">
          Kids
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full">
          Jewls
        </p>
      </div>

      <div className="flex space-x-3  justify-center items-center p-2 bg-slate-100 rounded-full mb-5">
        <i>///</i>
        <p>Filter</p>
      </div>
      <Products />
    </section>
  );
};

export default Trending;

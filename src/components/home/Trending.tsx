import { LuFilter } from "react-icons/lu";

import Products from "../Products";

const Trending = () => {
  return (
    <section className="w-[90%] mx-auto py-10">
      <h3 className="font-bold text-3xl text-slate-100 mb-3">
        Whats trending now
      </h3>
      <p className="mb-5">Discover the most trending products in Rebel</p>

      <div className="flex items-center justify-between text-sm overflow-x-scroll flex-shrink-0">
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full active:bg-slate-100 mb-5 shrink-0">
          All items
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full shrink-0">
          Men{" "}
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full shrink-0">
          Women
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full shrink-0">
          Kids
        </p>
        <p className="hover:bg-slate-100 hover:text-slate-900 py-2 px-5 rounded-full shrink-0">
          Jewls
        </p>
      </div>

      <div className="flex space-x-3  justify-center items-center p-2 bg-slate-100 text-slate-900 rounded-full mb-5 text-sm">
        <i>
          <LuFilter className="text-2xl" />
        </i>
        <p>Filter</p>
      </div>
      <Products />
    </section>
  );
};

export default Trending;

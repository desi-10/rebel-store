import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Products from "../Products";

const NewArrivals = () => {
  return (
    <section className="py-10">
      <div className="w-[90%] 2xl:w-[1440px] mx-auto py-10">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl font-bold text-slate-100">
            New Arrivals. {""}
            <span className="text-slate-500">REY backpacks & bags</span>
          </h3>
          <div className="flex items-center space-x-5">
            <i className="border rounded-full p-2">
              <AiOutlineArrowLeft className="text-2xl rounded-full" />
            </i>
            <i className="border rounded-full p-2">
              <AiOutlineArrowRight className="text-2xl rounded-full" />
            </i>
          </div>
        </div>

        <section className="flex flex-shrink-0 gap-10 overflow-x-scroll w-full py-5">
          <Products />
        </section>
      </div>
    </section>
  );
};

export default NewArrivals;

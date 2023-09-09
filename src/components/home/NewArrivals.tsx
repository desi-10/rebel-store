import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHeart,
} from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { HiArrowsPointingOut } from "react-icons/hi2";

const NewArrivals = () => {
  return (
    <section>
      <div className="w-[90%] 2xl:w-[1440px] mx-auto py-20">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl font-bold">
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

        <section className="flex flex-shrink-0 flex-auto gap-10 overflow-x-scroll w-full py-5">
          <div className=" shrink-0 w-full md:w-[320px]">
            <div className="p-5 bg-gray-900 rounded-3xl mb-5">
              <div className="flex justify-end">
                <p className="bg-black p-2 rounded-full">
                  <i>
                    <AiOutlineHeart className="text-2xl" />
                  </i>
                </p>
              </div>

              <div className="h-64"></div>

              <section className="hidden md:flex justify-center items-center space-x-2 text-sm">
                <div className="flex items-center bg-white px-5 py-2 rounded-full shadow-lg text-black">
                  <i className="mr-2">
                    <PiBag />
                  </i>
                  <p>Add to bag</p>
                </div>

                <div className="flex items-center bg-black  px-5 py-2 rounded-full shadow-lg">
                  <i className="mr-2">
                    <HiArrowsPointingOut />
                  </i>
                  <p>Quick view</p>
                </div>
              </section>
            </div>

            <div className="mb-3 space-x-3 flex">
              <p className="w-10 h-5 rounded-full bg-red-500"></p>
              <p className="w-10 h-5 rounded-full bg-blue-500"></p>
              <p className="w-10 h-5 rounded-full bg-green-500"></p>
            </div>

            <p className="font-bold text-white mb-2">Leather Gloves</p>
            <p className="mb-5">Perfect mint green</p>

            <div className="flex justify-between items-center">
              <p className="py-1 px-5 text-green-500 border-2 border-green-500 rounded-lg">
                $42.00
              </p>
              <p>/// 4.4(61 reviews)</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default NewArrivals;

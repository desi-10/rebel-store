import { AiOutlineHeart } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <div className=" shrink-0 w-[300px] md:w-[320px]">
        <div className="p-5 bg-gray-900 rounded-3xl mb-5">
          <div className="flex justify-end">
            <p className="bg-black p-2 rounded-full">
              <i>
                <AiOutlineHeart className="text-2xl" />
              </i>
            </p>
          </div>

          <div>
            <img src="/assets/assets/IMG_1966.PNG" alt="" />
          </div>

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

        <p className="font-bold text-slate-100 mb-2">Leather Gloves</p>
        <p className="mb-5">Perfect mint green</p>

        <div className="flex justify-between items-center">
          <p className="py-1 px-5 text-green-500 border-2 border-green-500 rounded-lg">
            $42.00
          </p>
          <div className="flex items-center space-x-3">
            <FaStar className="text-xl text-amber-500" />
            <p> 4.4(61 reviews)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
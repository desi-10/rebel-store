import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [like, setLike] = useState(false);
  return (
    <div className=" shrink-0 w-[300px] md:w-[320px] group">
      <div className="relative p-5 dark:bg-gray-900 bg-slate-200 rounded-3xl mb-5 overflow-hidden">
        <div className="flex justify-end">
          <p className="bg-black p-2 rounded-full">
            {like ? (
              <i onClick={() => setLike(!like)}>
                <AiFillHeart className="text-2xl text-red-500 cursor-pointer" />
              </i>
            ) : (
              <i onClick={() => setLike(!like)}>
                <AiOutlineHeart className="text-2xl cursor-pointer" />
              </i>
            )}
          </p>
        </div>

        <Link to="/products">
          <div>
            <img src="/assets/assets/IMG_1966.PNG" alt="" />
          </div>
        </Link>
        <section className="translate-y-[200%] group-hover:translate-y-0 transition-all duration-300 absolute bottom-5 left-3.5 lg:left-6 z-10 flex justify-center items-center space-x-2 text-sm ">
          <div className="flex items-center bg-white px-5 py-2 rounded-full shadow-lg text-black  whitespace-nowrap cursor-pointer">
            <i className="mr-2">
              <PiBag />
            </i>
            <p>Add to bag</p>
          </div>

          <div className="flex items-center dark:bg-black bg-white px-5 py-2 rounded-full shadow-lg whitespace-nowrap cursor-pointer">
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
      <Link to="/products">
        <p className="font-bold dark:text-slate-100 mb-2">Leather Gloves</p>
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
      </Link>
    </div>
  );
};

export default Products;

import { AiOutlineCheck } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BsArrowsAngleExpand, BsPlus } from "react-icons/bs";
import { CgColorBucket } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Cart = () => {
  return (
    <section className="w-[90%] mx-auto py-5">
      <div className=" border-b border-slate-500 mb-5">
        <h2 className="text-3xl font-bold dark:text-slate-100">Shopping Cart</h2>
        <p className="text-sm my-5 ">
          Homepage / Clothing Categories /{" "}
          <span className="underline">Shopping Cart</span>
        </p>
      </div>

      <section className="grid lg:grid-cols-3 relative gap-5">
        <section className="h-screen lg:col-span-2 lg:border-r border-slate-800 lg:pr-10 overflow-y-scroll">
          <div className="flex gap-3 lg:gap-5 py-10 border-b border-slate-800 mb-5  lg:h-[250px]">
            <div className="bg-slate-100 rounded-xl md:w-[200px]  flex justify-center items-center">
              <img src="/assets/assets/IMG_1968.PNG" alt="" />
            </div>

            <div className="space-y-3 w-full md:flex flex-col justify-between">
              <div className="">
                <section className="md:flex items-center justify-between">
                  <p className="truncate dark:text-slate-100 font-bold text-lg">
                    Leather Gloves
                  </p>

                  <div className="flex md:hidden items-center space-x-3 mb-3 text-black">
                    <div className="flex items-center space-x-1  dark:text-slate-100 border-r pr-5 border-slate-700">
                      <CgColorBucket /> <span>Black</span>
                    </div>
                    <div className="flex items-center space-x-1  dark:text-slate-100 pl-3">
                      <BsArrowsAngleExpand /> <span>2xl</span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center space-x-5">
                    <i className="p-1 rounded-full border border-slate-800">
                      <BiMinus className="text-2xl" />
                    </i>
                    <p className="text-xl dark:text-slate-100">1</p>
                    <i className="p-1 rounded-full border border-slate-800">
                      <BsPlus className="text-2xl" />
                    </i>
                  </div>

                  <div className="flex items-center justify-between">
                    <select
                      name=""
                      id=""
                      className="md:hidden py-2 px-3 bg-gray-800 rounded-lg"
                    >
                      <option value="">1</option>
                    </select>

                    <p className="border-2 rounded-lg py-1 px-3 border-green-500 text-green-500">
                      $74.00
                    </p>
                  </div>
                </section>

                <div className="hidden md:flex items-center space-x-3">
                  <div className="flex items-center space-x-1  dark:text-slate-100 border-r pr-5 border-slate-700">
                    <CgColorBucket /> <span>Black</span>
                  </div>
                  <div className="flex items-center space-x-1  dark:text-slate-100 pl-3">
                    <BsArrowsAngleExpand /> <span>2xl</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center px-2 p-1 text-xs md:text-md rounded-full border border-slate-800 whitespace-nowrap">
                  <span className="mr-2">
                    <AiOutlineCheck />
                  </span>
                  In Stock
                </div>
                <p className="text-sm text-blue-900">Remove</p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-10 sticky top-0">
          <h2 className="text-xl dark:text-slate-100 font-bold mb-5">
            Order Summary
          </h2>

          <section className="mb-5">
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Subtotal</p>
              <p className="dark:text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Shipping estimate</p>
              <p className="dark:text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Tax extimate</p>
              <p className="dark:text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center py-5">
              <p className="text-lg dark:text-slate-100 font-bold">order total</p>
              <p className="dark:text-slate-100 font-bold">$249.000</p>
            </div>
          </section>

          <button className="w-full p-3 bg-slate-100 text-slate-900 rounded-full mb-5">
            Checkout
          </button>

          <div className="flex items-center justify-center">
            <span className="mr-2">
              <IoMdInformationCircleOutline />
            </span>
            <p>
              Learn more <span className="dark:text-slate-100 underline">Taxes</span>{" "}
              and <span className="dark:text-slate-100 underline">Shipping</span>{" "}
              information
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;

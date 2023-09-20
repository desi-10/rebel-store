import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { TbArrowsExchange, TbTruckDelivery } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Line } from "react-icons/ri";
import { PiBag } from "react-icons/pi";

const Products = () => {
  return (
    <main className="w-[90%] mx-auto py-10">
      <section className=" grid  lg:grid-cols-2 lg:gap-10 mb-10">
        <div className="grid gap-5 mb-5">
          <div className="w-full overflow-hidden bg-slate-100 rounded-2xl">
            <img
              src="/assets/assets/IMG_1968.PNG"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="grid grid-rows-1 grid-cols-2 gap-5">
            <div className="h-full overflow-hidden bg-slate-100 rounded-2xl">
              <img
                src="/assets/assets/IMG_1967.PNG"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="w-full overflow-hidden bg-slate-100 rounded-2xl">
              <img src="/assets/assets/IMG_1969.PNG" alt="" />
            </div>
          </div>
        </div>

        <section className="space-y-5">
          <div className="border-b pb-10 border-slate-800">
            <h2 className="text-slate-100 font-bold text-2xl mb-5">
              Heavy Weight Hoodie
            </h2>

            <div className="flex items-center justify-between lg:justify-start mb-5">
              <p className="font-bold text-xl text-green-500 border-2 border-green-500 px-3 rounded-lg">
                $108.00
              </p>
              <section className="flex items-center text-sm lg:text-base border-l pl-5 border-slate-800">
                <i className="mr-2 lg:mr-3">
                  <FaStar className="text-amber-500" />
                </i>
                <p className="text-slate-100 lg:mr-3">
                  4.9 *{" "}
                  <span className="underline text-slate-500">145 reviews</span>
                </p>
                <p className="hidden md:flex text-slate-100 items-center">
                  <i>
                    <WiStars className="text-2xl" />
                  </i>
                  <span>New in</span>
                </p>
              </section>
            </div>

            <section className="mb-5">
              <p className="text-slate-100 mb-3">Color:Black</p>
              <div className="mb-3 space-x-3 flex">
                <p className="w-10 h-5 rounded-full bg-red-500"></p>
                <p className="w-10 h-5 rounded-full bg-blue-500"></p>
                <p className="w-10 h-5 rounded-full bg-green-500"></p>
              </div>
            </section>

            <section className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <p>Size: XS</p>
                <p className="text-blue-500">See sizing chart</p>
              </div>

              <div className="mb-3 space-x-3 flex  items-center">
                <p className="py-1 px-8 border rounded-xl">XS</p>
                <p className="py-1 px-8 border rounded-xl">S</p>
                <p className="py-1 px-8 border rounded-xl">M</p>
              </div>
            </section>

            <section className="flex items-center justify-between space-x-3 lg:space-x-5">
              <div className="flex items-center space-x-5 bg-gray-800 rounded-full p-2">
                <i className="p-1 rounded-full border border-slate-700 bg-slate-900">
                  <BiMinus className="text-2xl" />
                </i>
                <p className="text-xl text-slate-100">1</p>
                <i className="p-1 rounded-full border border-slate-500 bg-slate-900">
                  <BsPlus className="text-2xl" />
                </i>
              </div>
              <button className="flex items-center justify-center w-full py-3 px-5 text-slate-900 bg-slate-100 text-center rounded-full whitespace-nowrap">
                <PiBag className="lg:text-xl" />{" "}
                <span className="ml-2">Add to cart</span>
              </button>
            </section>
          </div>
          <div>
            <summary>
              <p>Description</p>
              <details>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore modi nulla nemo hic itaque, dignissimos laboriosam,
                incidunt iure, voluptate quis natus sint earum optio repellat.
                Porro a atque adipisci.
              </details>
            </summary>
            <summary>
              <p>Description</p>
              <details>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore modi nulla nemo hic itaque, dignissimos laboriosam,
                incidunt iure, voluptate quis natus sint earum optio repellat.
                Porro a atque adipisci.
              </details>
            </summary>
            <summary>
              <p>Description</p>
              <details>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore modi nulla nemo hic itaque, dignissimos laboriosam,
                incidunt iure, voluptate quis natus sint earum optio repellat.
                Porro a atque adipisci.
              </details>
            </summary>
          </div>
        </section>
      </section>
      <section className="grid lg:grid-cols-2 gap-5 mb-10">
        <div className="bg-orange-200 p-5 rounded-2xl text-xl">
          <i className="text-slate-900">
            <TbTruckDelivery className="text-2xl mb-2" />
          </i>
          <p className="text-slate-900">Free shipping</p>
          <small>On orders over $50.00</small>
        </div>
        <div className="bg-blue-200 p-5 rounded-2xl text-xl">
          <i className="text-slate-900">
            <TbArrowsExchange className="text-2xl mb-2" />
          </i>
          <p className="text-slate-900">Very easy to return</p>
          <small>Just phone number</small>
        </div>
        <div className="bg-green-200 p-5 rounded-2xl text-xl">
          <i className="text-slate-900">
            <TfiWorld className="text-2xl mb-2" />
          </i>
          <p className="text-slate-900">Nationwide Delivery</p>
          <small>Fast delivery nationwide</small>
        </div>
        <div className="bg-yellow-200 p-5 rounded-2xl text-xl">
          <i className="text-slate-900">
            <RiRefund2Line className="text-2xl mb-2" />
          </i>
          <p className="text-slate-900">Refund Policy</p>
          <small>60 days return for any reason</small>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-100 mb-5">
          Product Details
        </h2>
        <p className="text-slate-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
          eveniet in. Dolores totam temporibus hic nostrum maxime veritatis.
          Quasi eaque, illo quo veritatis accusamus eveniet ullam laudantium
          nesciunt officia!
        </p>
      </section>
    </main>
  );
};

export default Products;

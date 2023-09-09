import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Discover = () => {
  return (
    <section>
      <div className="w-[90%] 2xl:w-[1440px] mx-auto py-10">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-4xl font-bold text-slate-200">
            Discover more.{" "}
            <span className="text-slate-500">
              Good things are waiting for you
            </span>
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

        <section className="flex flex-shrink-0 flex-auto gap-10 overflow-x-scroll w-full py-5 ">
          <div className="p-5  grid grid-cols-2 bg-amber-100 shrink-0 rounded-xl w-[450px]">
            <div className="flex flex-col justify-between">
              <div>
                <p className="">Explore new arrivals</p>
                <p className="font-bold text-2xl text-black">
                  Shop the latest from top brands
                </p>
              </div>

              <p className="">
                <Link to="" className="px-5 py-2 bg-black rounded-full">
                  Show me all
                </Link>
              </p>
            </div>
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src="/public/assets/pexels-guilherme-almeida-1858175.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Discover;

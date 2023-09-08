import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Discover = () => {
  return (
    <section>
      <div className="w-[90%] lg:w-[1000px] mx-auto py-10">
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

        <section className="flex flex-shrink-0 flex-auto gap-10 overflow-x-scroll w-full py-5">
          <div className="p-5 bg-amber-100 shrink-0 rounded-xl w-[400px]">
            <p className="text-sm">Explore new arrivals</p>
            <p className="font-bold text-xl mb-10 text-black">
              Shop the latest from top brands
            </p>

            <p>
              <Link to="" className="px-5 py-2 bg-black rounded-full">
                Show me all
              </Link>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Discover;

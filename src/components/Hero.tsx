import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const data = [
  {
    p: "In this season, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/assets/IMG_1959.PNG",
  },
  {
    p: "In this season, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/assets/IMG_1960.PNG",
  },
  {
    p: "In this season, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/assets/IMG_1961.PNG",
  },
];

const Hero = () => {
  const [value, setValue] = useState(0);
  const { p, h1, btn, img } = data[value];

  const increase = () => {
    if (value === data.length - 1) {
      setValue(0);
    } else {
      setValue((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (value === 0) {
      setValue(data.length - 1);
    } else {
      setValue((prev) => prev + 1);
    }
  };

  return (
    <section className="relative w-full py-10 lg:p-0 bg-emerald-200">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-10 items-center">
        <article className="font-bold text-black">
          <p className="text-xl mb-5">{p}</p>
          <h2 className="text-4xl lg:text-5xl mb-5">{h1}</h2>
          <button className="flex space-x-3 bg-white rounded-full py-2 px-5">
            <p>{btn}</p>
            <p>
              <CiSearch className="text-2xl" />
            </p>
          </button>
        </article>
        <div className="overflow-hidden  flex justify-center items-center">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div onClick={decrease} className="absolute top-[50%] left-3">
        <i className="border rounded-full p-2 text-slate-100">
          <AiOutlineArrowLeft className="text-2xl rounded-full" />
        </i>
      </div>
      <div onClick={increase} className="absolute top-[50%] right-3">
        <i className="border rounded-full p-2 text-slate-100">
          <AiOutlineArrowRight className="text-2xl rounded-full" />
        </i>
      </div>
    </section>
  );
};

export default Hero;

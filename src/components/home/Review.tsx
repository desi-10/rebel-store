import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="py-10">
      <h2 className="text-center font-bold text-3xl text-slate-100 mb-2">
        Good news from far away
      </h2>
      <p className="text-center mb-10">Lets see what people think of Rebel</p>

      <div className="relative w-20 h-20 rounded-full mx-auto mb-10">
        <div className="absolute top-1 -left-2 bg-emerald-500 rounded-full w-full h-full"></div>
        <img
          src="/assets/assets/IMG_1961.PNG"
          className="bg-black absolute top-0 left-0 z-10 w-full h-full rounded-full"
          alt=""
        />
      </div>

      <div className="text-center text-2xl mb-5 text-slate-100">
        Great quality products, affordable prices, fast and friendly delievry. I
        very recommend
      </div>

      <p className="text-xl text-center mb-3 font-bold text-slate-100">
        Tiana Abie
      </p>
      <div className="flex space-x-2 justify-center items-center">
        <FaStar className="text-xl text-amber-500" />
        <FaStar className="text-xl text-amber-500" />
        <FaStar className="text-xl text-amber-500" />
        <FaStar className="text-xl text-amber-500" />
      </div>
    </section>
  );
};

export default Review;

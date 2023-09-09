import { CiSearch } from "react-icons/ci";

const data = [
  {
    p: "In this seasn, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/assets/IMG_1959.PNG",
  },
  {
    p: "In this seasn, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/assets/IMG_1960.PNG",
  },
  {
    p: "In this seasn, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/pexels-guilherme-almeida-1858175.jpg",
  },
];

const Hero = () => {
  const { p, h1, btn, img } = data[0];

  return (
    <section className="w-full py-10 lg:p-0 bg-emerald-200">
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
    </section>
  );
};

export default Hero;

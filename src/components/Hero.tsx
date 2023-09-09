const data = [
  {
    p: "In this seasn, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/pexels-guilherme-almeida-1858175.jpg",
  },
  {
    p: "In this seasn, find the best",
    h1: "Exclusive collection for everyone",
    btn: "Explore now",
    img: "/assets/pexels-guilherme-almeida-1858175.jpg",
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
    <section className="w-full py-10 bg-emerald-300">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto">
        <article className="font-bold">
          <p>{p}</p>
          <h2 className="text-2xl">{h1}</h2>
          <div>
            <p>{btn}</p>
            <p>///</p>
          </div>
        </article>
        <div className="overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

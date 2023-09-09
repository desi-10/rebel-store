const mission = [
  {
    img: "/assets/assets/IMG_1971.PNG",
    step: "Step 1",
    title: "Filter & Discover",
    desc: "Smart filtering and suggesting make it easy to find",
  },
  {
    img: "/assets/assets/IMG_1972.PNG",
    step: "Step 2",
    title: "Filter & Discover",
    desc: "Smart filtering and suggesting make it easy to find",
  },
  {
    img: "/assets/assets/IMG_1973.PNG",
    step: "Step 3",
    title: "Filter & Discover",
    desc: "Smart filtering and suggesting make it easy to find",
  },
  {
    img: "/assets/assets/IMG_1974.PNG",
    step: "Step 4",
    title: "Filter & Discover",
    desc: "Smart filtering and suggesting make it easy to find",
  },
];
const Mission = () => {
  return (
    <section className="py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        {mission.map((item) => {
          return (
            <section className="text-center mb-10">
              <div className="w-36 h-36 rounded-xl overflow-hidden mx-auto mb-5">
                <img src={item.img} alt="" />
              </div>
              <button className="py-2 px-5 mb-5 bg-blue-200 rounded-full text-blue-500">
                {item.step}
              </button>
              <p className="font-bold text-slate-100 mb-5">{item.title}</p>
              <p>{item.desc}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Mission;

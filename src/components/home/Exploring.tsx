import { BsArrowRight } from "react-icons/bs";
const Exploring = () => {
  return (
    <section className="w-[90%] mx-auto py-10">
      <h3 className="text-3xl text-center mb-5 dark:text-slate-100 font-bold">
        Start Exploring
      </h3>

      <div className="flex justify-between items-center cursor-pointer overflow-x-scroll flex-shrink-0 text-xs dark:bg-gray-900 rounded-full p-1 w-full mb-10 lg:w-[500px] mx-auto">
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Men</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Women</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Kids</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Sports</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Beauty</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Gear</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Tool</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Games</p>
        <p className="hover:dark:bg-slate-800 hover:bg-slate-100 py-2 px-5 rounded-full">Controller</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between bg-slate-200 dark:bg-gray-900 p-5 rounded-xl h-[400px]">
          <div className="flex justify-between items-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex justify-center items-center">
              <img src="/assets/assets/IMG_1968.PNG" alt="" />
            </div>
            <p className="dark:text-slate-100">124 products</p>
          </div>
          <div className="mb-5">
            <p>Manufacturer</p>

            <p className="text-2xl font-bold dark:text-slate-100">Backpack</p>
          </div>

          <div className="flex space-x-5 items-center hover:text-blue-700">
            <p>See Collection </p>
            <i>
              <BsArrowRight />
            </i>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Exploring;

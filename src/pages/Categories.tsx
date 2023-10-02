import React from "react";
import Products from "../components/Products";

const Categories = () => {
  return (
    <section className="w-[90%] mx-auto">
      <header className="py-5 border-b border-gray-800 mb-5">
        <h2 className="text-3xl font-bold text-slate-100 mb-5">
          Men Collection
        </h2>
        <p>
          We not only help you design exceptional products, but also make it
          easy for you <br />
          to share your designs with more like-minded people.
        </p>
      </header>

      <div className="flex justify-between items-center mb-10">
        <ul className="flex text-xl space-x-5">
          <li className="border rounded-full py-1 px-5 border-gray-800">
            100-500
          </li>
          <li className="border rounded-full py-1 px-5 border-gray-800">
            Categories
          </li>
          <li className="border rounded-full py-1 px-5 border-gray-800">
            Colors
          </li>
          <li className="border rounded-full py-1 px-5 border-gray-800">
            Size
          </li>
        </ul>

        <p className="border rounded-full py-1 px-5 border-gray-800">
          Sort order
        </p>
      </div>

      <Products />
    </section>
  );
};

export default Categories;

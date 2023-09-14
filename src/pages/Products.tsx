const Products = () => {
  return (
    <section className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:py-20 lg:space-x-5">
      <div className="">
        <div className="w-full overflow-hidden">
          <img
            src="/assets/assets/IMG_1968.PNG"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="grid grid-rows-1 grid-cols-2">
          <div className="h-full">
            <img
              src="/public/assets/assets/IMG_1967.PNG"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div>
            <div className="">
              <img src="/assets/assets/IMG_1969.PNG" alt="" />
            </div>
            <div className="">
              <img src="/assets/assets/IMG_1969.PNG" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-slate-100 font-bold text-2xl mb-5">
          Heavy Weight Hoodie
        </h2>

        <div className="flex items-center justify-between mb-5">
          <section className="flex items-center space-x-3 text-slate-100">
            <i>///</i>
            <p>New in</p>
          </section>
          <section className="flex items-center text-slate-100">
            <i>///</i>
            <i>///</i>
          </section>
        </div>

        <div className="flex items-center justify-between mb-5">
          <p className="font-bold text-xl text-slate-100">$108.00</p>
          <section className="flex items-center">
            <i>///</i>
            <p className="text-slate-100">
              4.9 *{" "}
              <span className="underline text-slate-500">145 reviews</span>
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

        <section className="flex items-center justify-between space-x-5">
          <div className="flex justify-between items-center py-2 px-5 space-x-5 rounded-full bg-gray-900">
            <i className="w-5 h-5 lg:w-10 lg:h-10 text-center rounded-full text-slate-100 border bg-slate-900">
              -
            </i>
            <p className="font-bold text-slate-100">1</p>
            <i className="w-5 h-5 lg:w-10 lg:h-10 text-center rounded-full text-slate-100 border bg-slate-900">
              +
            </i>
          </div>
          <button className="w-full py-2 lg:py-3 px-5 text-slate-900 bg-slate-100 text-center rounded-full">
            Add to cart
          </button>
        </section>
      </div>
    </section>
  );
};

export default Products;

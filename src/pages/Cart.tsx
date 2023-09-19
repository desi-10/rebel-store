const Cart = () => {
  return (
    <section className="w-[90%] mx-auto py-5">
      <div className=" border-b border-slate-500 mb-5">
        <h2 className="text-3xl font-bold text-slate-100">Shopping Cart</h2>
        <p className="text-sm my-5 ">
          Homepage / Clothing Categories /{" "}
          <span className="underline">Shopping Cart</span>
        </p>
      </div>

      <section className="grid lg:grid-cols-3 gap-5">
        <div className="flex gap-3 lg:gap-5 py-10 border-b border-slate-800 mb-5 lg:col-span-2 lg:h-[300px]">
          <div className="bg-slate-100 rounded-xl sm:w-[150px] md:w-[230px]  flex justify-center items-center">
            <img src="/public/assets/assets/IMG_1968.PNG" alt="" />
          </div>

          <div className="space-y-3 w-full md:flex flex-col justify-between">
            <div>
              <section className="space-y-3 md:flex items-center justify-between">
                <p className="truncate">Leather Gloves</p>

                <div className="flex md:hidden items-center space-x-3">
                  <p>/// Black</p>
                  <p>/// 2xl</p>
                </div>

                <div className="hidden md:flex items-center">aswld</div>

                <div className="flex items-center justify-between">
                  <select
                    name=""
                    id=""
                    className="md:hidden py-2 px-3 bg-gray-800 rounded-lg"
                  >
                    <option value="">1</option>
                  </select>

                  <p className="border-2 rounded-lg py-1 px-3 border-green-500 text-green-500">
                    $74.00
                  </p>
                </div>
              </section>

              <div className="hidden md:flex items-center space-x-3">
                <p>/// Black</p>
                <p>/// 2xl</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="px-2 p-1 text-xs rounded-full border whitespace-nowrap">
                /// In Stock
              </p>
              <p className="text-sm text-blue-900">Remove</p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-xl text-slate-100 font-bold mb-5">
            Order Summary
          </h2>

          <section className="mb-5">
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Subtotal</p>
              <p className="text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Shipping estimate</p>
              <p className="text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center border-b py-5 border-slate-800">
              <p>Tax extimate</p>
              <p className="text-slate-100 font-bold">$249.000</p>
            </div>
            <div className="flex justify-between items-center py-5">
              <p className="text-lg text-slate-100 font-bold">order total</p>
              <p className="text-slate-100 font-bold">$249.000</p>
            </div>
          </section>

          <button className="w-full p-3 bg-slate-100 text-slate-900 rounded-full mb-5">
            Checkout
          </button>

          <div className="flex space-x-3 justify-center ">
            <p>///</p>
            <p>
              Learn more <span className="text-slate-100 underline">Taxes</span>{" "}
              and <span className="text-slate-100 underline">Shipping</span>{" "}
              information
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;

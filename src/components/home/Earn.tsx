import { Link } from "react-router-dom";

const Earn = () => {
  return (
    <section className="py-10">
      <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-10">
        <section>
          <div className="w-10 h-10 rounded-full overflow-hidden mb-5">
            <img
              src="/public/assets/02ec642b-414e-43fd-8b61-e5992c0b4868.JPG"
              alt=""
              className="w-full h-full"
            />
          </div>

          <h3 className="text-3xl font-bold text-white mb-5">
            Earn free money with Rebel
          </h3>

          <p className="text-lg mb-10">
            With Rebel you will get freeship & saving combo..
          </p>

          <div className="space-x-3">
            <Link to="" className="p-3 rounded-full bg-slate-50 text-slate-900">
              {" "}
              Savings combo
            </Link>
            <Link to="/" className="p-3 rounded-full bg-slate-900">
              {" "}
              Discover more
            </Link>
          </div>
        </section>
        <div>
          <img src="/assets/assets/IMG_1970.PNG" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Earn;

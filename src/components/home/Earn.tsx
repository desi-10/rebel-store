import { Link } from "react-router-dom";

const Earn = () => {
  return (
    <section className="">
      <div className="w-[90%] lg:w-[1000px] mx-auto grid lg:grid-cols-2 gap-5">
        <section>
          <p className="mb-5">Logo</p>
          <h3 className="text-3xl font-bold text-white mb-5">
            Earn free money with Rebel
          </h3>
          <p className="text-lg mb-5">
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
        <p>Image</p>
      </div>
    </section>
  );
};

export default Earn;

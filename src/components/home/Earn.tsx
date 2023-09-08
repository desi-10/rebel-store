import { Link } from "react-router-dom";

const Earn = () => {
  return (
    <section className="">
      <div className="w-[90%] lg:w-[1000px] mx-auto grid lg:grid-cols-2 gap-5">
        <section>
          <p>Logo</p>
          <h3>Earn free money with Rebel</h3>
          <p>With REbel you will get freeship & saving combo..</p>

          <div>
            <Link to=""> Savings combo</Link>
            <Link to="/"> Discover more</Link>
          </div>
        </section>
        <p>Image</p>
      </div>
    </section>
  );
};

export default Earn;

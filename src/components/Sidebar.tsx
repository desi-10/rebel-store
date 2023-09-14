import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { PiMoon } from "react-icons/pi";

type ISidebar = {
  setNavToggle: (toggle: boolean) => void;
};

const Sidebar = ({ setNavToggle }: ISidebar) => {
  return (
    <section className="lg:hidden fixed top-0 left-0 w-full h-full md:w-[400px] bg-black z-10 overflow-auto">
      <aside className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/assets/02ec642b-414e-43fd-8b61-e5992c0b4868.JPG"
              alt=""
              className="w-full h-full"
            />
          </div>
          <p
            onClick={() => setNavToggle(false)}
            className="p-2 rounded-full hover:bg-slate-900"
          >
            <VscClose className="text-2xl" />
          </p>
        </div>
        <p className="mb-5">
          Discover the most outstanding articles on all topics of life. Write
          your stories and share them
        </p>

        <div className="flex justify-between items-center space-x-3 mb-5 ">
          <p>socials</p>
          <p className="p-2 rounded-full hover:bg-slate-900">
            <PiMoon className="text-2xl" />
          </p>
        </div>

        <div className="flex items-center p-2 rounded-lg space-x-3 mb-5 bg-slate-900">
          <p>
            <CiSearch className="text-2xl cursor-pointer" />
          </p>
          <input
            type="text"
            className="p-2 rounded-lg w-full bg-transparent"
            placeholder="Type and press enter"
          />
        </div>

        <ul className="grid gap-3">
          <Link to="">MEN</Link>
          <Link to="">WOMEN</Link>
          <Link to="">BEAUTY</Link>
          <Link to="">SPORTS</Link>
          <Link to="">TEMPLATES</Link>
          <Link to="">EXPLORE</Link>
        </ul>
      </aside>
    </section>
  );
};

export default Sidebar;

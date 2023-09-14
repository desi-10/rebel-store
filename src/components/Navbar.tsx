import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import User from "./home/User";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);

  return (
    <section className="border-b border-slate-500 sticky z-50 top-0 inset-x-0 bg-slate-950 text-slate-300">
      <nav className="flex justify-between items-center w-[90%] 2xl:w-[1440px] mx-auto py-5">
        <div onClick={() => setNavToggle(!navToggle)} className="lg:hidden">
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <Link to="/">
          <section className="flex justify-between items-center space-x-2 w-full">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="/assets/02ec642b-414e-43fd-8b61-e5992c0b4868.JPG"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h1 className="font-bold text-lg">Rebels</h1>
          </section>
        </Link>

        {searchToggle && (
          <ul className="hidden lg:flex items-center">
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              Men
            </Link>
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              Women
            </Link>
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              Beauty
            </Link>
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              Sport
            </Link>
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              <div className="flex items-center">
                <p className="mr-1">Templates</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </div>
            </Link>
            <Link
              to="/products"
              className="hover:bg-slate-900 py-2 px-5 rounded-full"
            >
              <div className="flex items-center">
                <p className="mr-1">Explore</p>
                <i>
                  <IoIosArrowDown />
                </i>
              </div>
            </Link>
          </ul>
        )}

        {searchToggle && (
          <ul className="flex items-center">
            <li
              onClick={() => setSearchToggle(!searchToggle)}
              className="hidden lg:block hover:bg-slate-900 p-2 rounded-full"
            >
              <CiSearch className="text-2xl cursor-pointer" />
            </li>
            <li className="">
              <User />
            </li>
            <Link
              to="/cart"
              className="relative hover:bg-slate-900 p-2 rounded-full"
            >
              <PiShoppingCartThin className="text-2xl" />
              <div className="absolute top-0 right-0 p-1 h-4 text-xs text-center rounded-full bg-blue-500 text-white flex justify-center items-center">
                <p>3</p>
              </div>
            </Link>
          </ul>
        )}
        {!searchToggle && (
          <input
            type="text"
            className="py-2 px-3 w-1/2 rounded-full text-black"
            placeholder="Search items ..."
          />
        )}
        {!searchToggle && (
          <button
            onClick={() => setSearchToggle(!searchToggle)}
            className="hover:bg-slate-900 py-2 px-5 rounded-full"
          >
            Cancel
          </button>
        )}
      </nav>

      {navToggle && (
        <div
          onClick={() => setNavToggle(!navToggle)}
          className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-lg w-full h-full"
        ></div>
      )}

      {navToggle && <Sidebar setNavToggle={setNavToggle} />}
    </section>
  );
};

export default Navbar;

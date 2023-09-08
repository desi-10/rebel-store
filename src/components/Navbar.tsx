import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import User from "./home/User";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <section className="border-b border-slate-500 sticky top-0 inset-x-0 bg-black text-slate-300">
      <nav className="flex justify-between items-center w-[90%] lg:w-[1000px] mx-auto py-5">
        <div onClick={() => setNavToggle(!navToggle)} className="lg:hidden">
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <Link to="/">Logo</Link>

        <ul className="hidden lg:flex space-x-5 items-center">
          <Link to="/products">Men</Link>
          <Link to="/products">Women</Link>
          <Link to="/products">Beauty</Link>
          <Link to="/products">Sport</Link>
          <Link to="/products">
            <div className="flex items-center">
              <p className="mr-1">Templates</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
          </Link>
          <Link to="/products">
            <div className="flex items-center">
              <p className="mr-1">Explore</p>
              <i>
                <IoIosArrowDown />
              </i>
            </div>
          </Link>
        </ul>

        <ul className="flex space-x-3 items-center">
          <li className="hidden lg:block">
            <CiSearch className="text-2xl" />
          </li>
          <li className="">
            <User />
          </li>
          <li className="relative">
            <PiShoppingCartThin className="text-2xl" />
            <div className="absolute -top-2 -right-1 p-1 h-4 text-xs text-center rounded-full bg-blue-500 text-white flex justify-center items-center">
              <p>3</p>
            </div>
          </li>
        </ul>
      </nav>
      {navToggle && (
        <div
          onClick={() => setNavToggle(!navToggle)}
          className="fixed inset-0 bg-black/75 w-full h-full"
        ></div>
      )}
    </section>
  );
};

export default Navbar;

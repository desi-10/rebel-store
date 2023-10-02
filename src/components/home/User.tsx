import { useState } from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { RiFilePaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const User = () => {
  const [userToggle, setUserToggle] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setUserToggle(!userToggle)}
        className="hover:bg-slate-900 p-2 rounded-full  cursor-pointer"
      >
        <AiOutlineUser className="text-2xl " />
      </div>
      {userToggle && (
        <div className="absolute z-10 top-10 right-0 px-3 rounded-xl bg-slate-900 w-[250px]">
          <div className=" flex items-center space-x-3 border-b py-5">
            <p className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/assets/pexels-guilherme-almeida-1858175.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </p>
            <div>
              <p className=" truncate font-bold">Eden Smith</p>
              <p className="text-sm truncate">Los Angeles,CA</p>
            </div>
          </div>

          <section className="py-2 border-b">
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:bg-gray-800 py-2 px-3"
            >
              <i>
                <CiUser className="text-2xl" />
              </i>
              <p>My Account</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:bg-gray-800 py-2 px-3"
            >
              <i>
                <RiFilePaperLine className="text-2xl" />
              </i>
              <p>My Order</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:bg-gray-800 py-2 px-3"
            >
              <i>
                {" "}
                <AiOutlineHeart className="text-2xl" />
              </i>
              <p>My Wishlist</p>
            </Link>
          </section>

          <section className="py-2">
            <div className="flex items-center justify-between rounded-lg hover:bg-gray-800 py-2 px-3">
              <Link to="" className="flex items-center space-x-3">
                <i>
                  <HiOutlineLightBulb className="text-2xl" />
                </i>
                <p>Light Theme</p>
              </Link>
              <p
                onClick={() => setLightTheme(!lightTheme)}
                className={`w-10 h-5 bg-slate-500 rounded-full flex items-center px-[2px] cursor-pointer 
                 ${lightTheme ? "justify-end" : " justify-start"} 
                `}
              >
                <p className="w-4 h-4 rounded-full bg-white"></p>
              </p>
            </div>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:bg-gray-800 py-2 px-3"
            >
              <i>
                <BiHelpCircle className="text-2xl" />
              </i>
              <p>Help</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:bg-gray-800 py-2 px-3"
            >
              <i>
                <TbLogout2 className="text-2xl" />
              </i>
              <p>Logout</p>
            </Link>
          </section>
        </div>
      )}
      {userToggle && (
        <div
          onClick={() => setUserToggle(!userToggle)}
          className="fixed inset-0 h-screen w-screen"
        ></div>
      )}
    </div>
  );
};

export default User;

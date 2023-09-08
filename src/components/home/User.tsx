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
  return (
    <div className="relative">
      <div onClick={() => setUserToggle(!userToggle)}>
        <AiOutlineUser className="text-2xl" />
      </div>
      {userToggle && (
        <div className="absolute top-10 right-0 px-5 rounded-xl bg-black w-[250px] font-bold">
          <div className=" flex items-center space-x-3 border-b py-5">
            <p className="w-16 h-16 rounded-full bg-white"></p>
            <div>
              <p className=" truncate">Eden Smith</p>
              <p className="text-sm truncate">Los Angeles,CA</p>
            </div>
          </div>

          <section className="py-5 border-b space-y-2">
            <Link to="" className="flex items-center space-x-3">
              <i>
                <CiUser className="text-2xl" />
              </i>
              <p>My Account</p>
            </Link>
            <Link to="" className="flex items-center space-x-3">
              <i>
                <RiFilePaperLine className="text-2xl" />
              </i>
              <p>My Order</p>
            </Link>
            <Link to="" className="flex items-center space-x-3">
              <i>
                {" "}
                <AiOutlineHeart className="text-2xl" />
              </i>
              <p>My Wishlist</p>
            </Link>
          </section>

          <section className="py-5 space-y-2">
            <div className="flex items-center justify-between">
              <Link to="" className="flex items-center space-x-3">
                <i>
                  <HiOutlineLightBulb className="text-2xl" />
                </i>
                <p>Dark Theme</p>
              </Link>
              <p className="w-10 h-5 bg-slate-500 rounded-full flex justify-start items-center px-[2px]">
                <p className="w-4 h-4 rounded-full bg-white"></p>
              </p>
            </div>
            <Link to="" className="flex items-center space-x-3">
              <i>
                <BiHelpCircle className="text-2xl" />
              </i>
              <p>Help</p>
            </Link>
            <Link to="" className="flex items-center space-x-3">
              <i>
                <TbLogout2 className="text-2xl" />
              </i>
              <p>Logout</p>
            </Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default User;

import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
const User = () => {
  const [userToggle, setUserToggle] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setUserToggle(!userToggle)}>
        <AiOutlineUser className="text-2xl" />
      </div>
      {userToggle && (
        <div className="absolute top-10 right-0 bg-white p-5">
          <div className=" flex justify-center items-center space-x-3">
            <p className="w-10 h-10 rounded-full bg-black"></p>
            <div>
              <p className="text-sm truncate">Eden Smith</p>
              <p className="text-xs truncate">Los Angeles,CA</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;

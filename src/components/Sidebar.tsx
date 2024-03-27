import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdHistory, MdHome, MdPlaylistPlay } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdHome },
    { name: "History", link: "/", icon: MdHistory },
    { name: "Playlists", link: "/", icon: MdPlaylistPlay },
    { name: "Liked", link: "/", icon: AiOutlineHeart },
    { name: "User", link: "/", icon: AiOutlineUser, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line }
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 pr-16">
      <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-60" : "w-16"} duration-500 absolute text-gray-100 px-4 z-50`}>
        <div className="py-3 flex justify-end">
          {!open && <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />}
          {open && (
            <HiX
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

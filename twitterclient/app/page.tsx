import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="pt-8 px-4 col-span-3 ">
          <div className="text-4xl h-fit w-fit  hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitterX style={{ color: "white" }} />
          </div>

          <div className="mt-4 text-2xl font-normal pr-4">
            <ul>
              {sidebarMenuItems.map((item) => {
                return (
                  <li
                    className="text-white font-ChirpRegular cursor-pointer flex justify-start items-center gap-4 hover:bg-gray-800 rounded-[50rem] px-5 py-2 w-fit mt-2"
                    key={item.title}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-3 rounded-full w-full text-white text-lg font-bold">
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>

        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

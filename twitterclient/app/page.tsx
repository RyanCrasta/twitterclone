import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BiHomeCircle, BiMoney } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import FeedCard from "./components/FeedCard";
import { SlOptions } from "react-icons/sl";

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
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="pt-1 px-4 col-span-3 ml-28">
          <div className="text-2xl h-fit w-fit  hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitterX style={{ color: "white" }} />
          </div>

          <div className="mt-2 text-xl font-normal pr-4">
            <ul>
              {sidebarMenuItems.map((item) => {
                return (
                  <li
                    className="text-white font-ChirpRegular cursor-pointer flex justify-start items-center gap-4 hover:bg-gray-800 rounded-[50rem] px-3 py-3 w-fit mt-2"
                    key={item.title}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] px-4 py-2 rounded-full w-full text-white text-lg font-bold">
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll border-gray-600">
          <FeedCard />

          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />

          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

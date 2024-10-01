"use client";
import React, { useCallback } from "react";
import { BsTwitterX } from "react-icons/bs";
import { BiHomeCircle, BiMoney } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import FeedCard from "./components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useCurrentUser } from "@/hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

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
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      console.log("cred", cred);
      const googleToken = cred.credential;

      if (!googleToken) {
        return toast.error(`Google token not found`);
      }

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("Verfied success");
      console.log("verifyGoogleToken", verifyGoogleToken);

      if (verifyGoogleToken) {
        localStorage.setItem("__twitter_token", verifyGoogleToken);

        await queryClient.invalidateQueries(["current-user"]);
      }
    },
    []
  );

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="pt-1 px-4 col-span-3 ml-28 relative">
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

          {user && (
            <div className="mt-5 absolute bottom-5 flex gap-2 items-center bg-slate-800 px-3 py-2 rounded-full">
              {user && user.profileImageURL && (
                <Image
                  className="rounded-full"
                  src={user?.profileImageURL}
                  alt="user-image"
                  height={50}
                  width={50}
                />
              )}

              <div>
                <h3 className="text-xl text-white">
                  {user.firstName} {user.lastName}
                </h3>
              </div>
            </div>
          )}
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

        <div className="col-span-3 p-5">
          {!user && (
            <div className="p-5 bg-slate-700 rounded-lg">
              <h1 className="my-2 text-2xl text-white">New To Twitter?</h1>
              <GoogleLogin onSuccess={handleLoginWithGoogle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

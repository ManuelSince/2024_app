import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type UserProfileCardProps = {
  isLogged: boolean;
  firstname?: string;
  lastname?: string;
  email?: string;
  user_picture_src?: string;
};
export const UserProfileCard = ({
  isLogged = true,
  email = "manuelsince@gmail.com",
  firstname,
  lastname,
  user_picture_src,
}: UserProfileCardProps) => {
  return isLogged ? (
    <div className="duration-400 group relative flex rounded border border-gray-700  px-3 py-1 hover:cursor-pointer hover:border-[hsl(280,100%,70%)] hover:duration-300">
      <div className="flex items-end">
        <span
          id="connected-dot"
          className="h-2 w-2 animate-bounce rounded-full bg-green-400 [animation-delay:-0.3s]"
        ></span>
      </div>
      <div className="flex items-center justify-center">
        <Image
          id="user"
          alt="user image"
          src={
            user_picture_src
              ? user_picture_src
              : "/icons/default_user_picture.png"
          }
          width={25}
          height={25}
        />
      </div>

      <div className="pl-2 text-base/3">
        <p className="text-[10px] font-bold capitalize">
          {lastname ? lastname : email}
        </p>
        <p className="text-[10px] font-light capitalize">
          {firstname ? firstname : ""}
        </p>
      </div>
      <div className="border-1 invisible absolute right-0 z-50 mt-7 h-[150px] w-[330px] overflow-auto overflow-x-hidden rounded border-slate-600 bg-slate-50 p-6 opacity-0 duration-300 after:absolute after:left-0 after:right-0 after:top-[-12px] after:h-[12px] after:w-full after:bg-slate-50 after:opacity-0 after:content-[''] hover:visible hover:mt-[160px] hover:opacity-100 hover:duration-300 group-hover:visible group-hover:top-[32px] group-hover:mt-3 group-hover:opacity-100 group-hover:duration-300">
        <ul className="divide-y-2 capitalize text-black">
          <li>
            <Link href="#">profile</Link>
          </li>
          <li>
            <Link href="#">commande</Link>
          </li>
          <li>
            <Link href="#">infos</Link>
          </li>
          <li>
            <Link href="#">favorite articles</Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="duration-400 group relative flex rounded border border-gray-400 from-[#2e026d] to-[#15162c] px-3 py-1 hover:cursor-pointer hover:border-[hsl(280,100%,70%)] hover:bg-gradient-to-b hover:duration-300">
      <Link href="/auth" className="group-hover:text-[hsl(280,100%,70%)]">
        Sign In
      </Link>
    </div>
  );
};

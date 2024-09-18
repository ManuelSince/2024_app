"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import user_icon from "../../../../public/icons/default_user_picture.png";

const Favorites = (): React.ReactElement => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
  return (
    <div className="relative" onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? (
        <div
          className={`${isToggleOn ? "border-3 flex h-48 w-[300px] flex-col rounded-2xl rounded-r-3xl border-blue-500 bg-slate-100 pb-3" : "m-3 h-[60px] w-[60px] rounded-full border"} duration-400 transition-width absolute z-20 translate-x-[-245px] translate-y-[-1px] border border-gray-700 p-1 transition-opacity`}
        >
          <div
            className="flex h-12 w-full cursor-pointer items-center justify-end gap-12 rounded-xl rounded-r-3xl bg-gradient-to-r from-slate-500 to-slate-600 py-2"
            onClick={() => setIsToggleOn(!isToggleOn)}
          >
            {isToggleOn && <h3 className="font-bold">Services favoris</h3>}
            <div
              className={`border-1 flex h-10 cursor-pointer items-center justify-center rounded-full p-1`}
            >
              <Image
                src={user_icon}
                alt="user_icon"
                width={40}
                height={40}
                className=""
              ></Image>
            </div>
          </div>
          <div
            className={
              isToggleOn
                ? "mt-2 overflow-hidden border-gray-400 p-2 pt-0 text-xs font-bold text-gray-800 hover:overflow-y-auto"
                : "hidden"
            }
          >
            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-200"
              href="/"
            >
              WOJO Neuilly - Espace coworking 40 places - Indisponible
            </Link>

            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-200"
              href="/product"
            >
              Wojo Paris 8e - Champs-Élysées | Bureaux & Coworking & Salles de
              réunion
            </Link>

            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-200"
              href="/about"
            >
              about
            </Link>

            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-300"
              href="#"
            >
              home
            </Link>

            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-300"
              href="#"
            >
              home
            </Link>

            <Link
              className="flex w-full cursor-pointer rounded-md px-2 py-1 hover:bg-blue-300"
              href="#"
            >
              home
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-500 p-1"
          onClick={() => setIsToggleOn(!isToggleOn)}
        >
          <Image
            src={user_icon}
            alt="user_icon"
            width={40}
            height={40}
            className=""
          ></Image>
        </div>
      )}
    </div>
  );
};
export { Favorites };

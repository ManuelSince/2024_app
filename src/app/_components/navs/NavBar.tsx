"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserProfileCard } from "../cards/UserProfileCard";
import { ShoppingCart } from "../cards/ShoppingCart";
import { SearchInput } from "../forms/SearchInput";
import { logo } from "../../images";
import { ImageResponse } from "next/server";
import { Favorites } from "../favorites";
//import SearchBar from "../SearchBar";

const NavBar = (): React.ReactElement => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = (isOpen: boolean) => {
    setNav(isOpen);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, name: "", text: "Home" },
    { id: 2, name: "company", text: "Company" },
    { id: 3, name: "resources", text: "Resources" },
    { id: 4, name: "about", text: "About" },
  ];
  const configItems = [
    { id: 6, name: "reglage", src: "/logo-windows.png" },
    { id: 7, name: "profil", src: "/logo-windows.png" },
    { id: 8, name: "admin", src: "/logo-windows.png" },
  ];
  // const handleWindowResize = () => window.innerWidth >= 960 && handleNav(false);

  useEffect(() => {
    // window.addEventListener("resize", handleWindowResize);

    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <nav className="my-1 flex items-center justify-center">
      <div className="flex w-4/5 items-center gap-2 justify-self-start">
        {/* Logo */}
        <div
          id="logo"
          className=" flex h-[35px] w-[35px] shrink-0 rounded bg-white/10 shadow-lg ring-1 ring-black/5 sm:h-[48px] sm:w-[48px]"
        >
          <div onClick={() => handleNav(!nav)} className="flex items-center">
            <Image src={logo} width={60} height={60} alt="logo" className="" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden h-[35px] w-4/5  items-center justify-center gap-4 divide-x-2 divide-gray-100 divide-opacity-50 rounded bg-white/10 px-5 py-3 shadow-lg ring-1 ring-black/5 sm:h-[48px] xl:flex">
          <ul className="flex w-4/5 items-center justify-center px-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <Link
                  href={`/${item.name}`}
                  className="cursor-pointer rounded-md from-[#2e026d] to-[#15162c] px-4 py-2 duration-300 hover:bg-gradient-to-b hover:text-[hsl(280,100%,70%)]"
                  data-tooltip-target="tooltip"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </ul>
          <div className="relative flex w-1/5 items-center justify-evenly gap-2">
            <ShoppingCart className="rounded-md from-[#2e026d] to-[#15162c] px-4 py-1.5 hover:cursor-pointer hover:bg-gradient-to-b hover:duration-300" />
            <SearchInput className="rounded-md from-[#2e026d] to-[#15162c] px-4 py-2 hover:bg-gradient-to-b hover:duration-500" />
            <div>
              <Favorites />
            </div>
          </div>

          {/* <SearchBar className="flex w-2/5 items-center justify-center px-2" /> */}
        </div>

        {/* Config Nav*/}
        <ul className=" hidden h-[48px] shrink-0 items-center justify-center gap-2 rounded bg-white/10 p-3 shadow-lg ring-1 ring-black/5 lg:flex">
          <li className="">
            <UserProfileCard
              isLogged={false}
              email="manuelsince@gmail.com"
              firstname="manuel"
              lastname="since"
              user_picture_src=""
            />
          </li>
          <Link
            href={`/`}
            className=" cursor-pointer rounded-md from-[#2e026d] to-[#15162c] py-2 duration-300 hover:bg-gradient-to-b hover:text-[hsl(280,100%,70%)]"
          >
            <Image src={logo} width={30} height={30} alt="logo" />
          </Link>
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={() => handleNav(!nav)} className="block md:hidden"></div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed left-0 top-[55px] h-full w-[400px] rounded bg-gradient-to-r from-blue-800 to-indigo-900 p-3 shadow-lg ring-1 ring-black/5 duration-500 ease-in-out"
              : "fixed bottom-0 left-[-100%] top-[55px] w-[400px] duration-500 ease-in-out"
          }
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-between">
            <Image src="/logo-windows.png" alt="" width={70} height={70} />
            {/* <SearchBar className="" /> */}
            <div onClick={() => handleNav(!nav)}>
              <Image
                src="/icons/close-icon.png"
                alt="close"
                width={30}
                height={30}
                className="cursor-pointer hover:rotate-12"
              />
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <div className="mt-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer rounded-xl border-b border-gray-600 from-[#2e026d] to-blue-800 p-4 text-white duration-300 hover:bg-gradient-to-r hover:text-white hover:transition-all"
              >
                {item.text} hee
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

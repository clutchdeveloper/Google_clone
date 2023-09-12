"use client";
import logo from "../app/logo.png";
import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMicrophone, HiOutlineSearch } from "react-icons/hi";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return null;

    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center">
        <Image src={logo} height={40} width={120} className="cursor-pointer" onClick={() => router.push("/")} />

        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
          <HiMiniXMark className="h-7 sm:mr-3 text-2xl text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
          <HiMicrophone className="h-5 w-10 mr-2 hidden sm:inline-flex  text-blue-500 border-l-2 pl-4" />
          <HiOutlineSearch className="h-5 w-10 hidden sm:inline-flex  text-blue-500 pl-4" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar url="https://avatars.githubusercontent.com/u/120276096?v=4" className="ml-auto"/>
      </div>
      {/* Header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;

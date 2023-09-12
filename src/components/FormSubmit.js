"use client";
import React, { useRef } from "react";
import logo from "../app/logo.png";
import Image from "next/image";
import { HiMicrophone, HiOutlineSearch } from "react-icons/hi";
import { useRouter } from "next/navigation";

function FormSubmit() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = async (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return null;

    router.push(`/search?term=${term}`);
  };
  return (
    <>
      <form className="flex flex-col items-center flex-grow mt-40 w-4/5">
        <Image src={logo} width={300} height={200} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl">
          <HiOutlineSearch className="h-8 text-xl mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
          <HiMicrophone className="h-8 text-xl " />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>

          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </>
  );
}

export default FormSubmit;

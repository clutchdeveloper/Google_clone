import React from "react";
import { HiOutlinePlay, HiOutlineMap, HiOutlinePhotograph, HiOutlineSearch, HiDotsVertical, HiOutlineNewspaper } from "react-icons/hi";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={HiOutlineSearch} title="All" selected />
        <HeaderOption Icon={HiOutlinePhotograph} title="Images" />
        <HeaderOption Icon={HiOutlinePlay} title="Videos" />
        <HeaderOption Icon={HiOutlineNewspaper} title="News" />
        <HeaderOption Icon={HiOutlineMap} title="Maps"  />
        <HeaderOption Icon={HiDotsVertical} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;


import Avatar from "../components/Avatar";
import { HiViewGrid } from "react-icons/hi";

import Footer from "@/components/Footer";
import Button from "@/components/Button";
import FormSubmit from "../components/FormSubmit";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right   */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icons */}

          <HiViewGrid className="h-10 w-10 p-2 rounded-full hover:bg-gray-100  cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/120276096?v=4" />
        </div>
      </header>
      {/* Body */}
      
      <FormSubmit />
      {/* Footer */}
      <Footer />
    </div>
  );
}

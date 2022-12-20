import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-2xl ">
      <div className="relative container mx-auto p-5 bg-white   ">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl	font-Caveat ">MEOOWWW </h1>
          <div className=" md:flex space-x-6  ">
            <a className="text-3xl	font-Caveat" target="_blank" href="https://unsplash.com/s/photos/cats">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

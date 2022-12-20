import React from "react";
import { imgs } from "./imgs";

export const Content = () => {
  return (
    <div className="pt-10 pb-10">
      <div
        class="flex flex-col items-center gap-10 
        md:flex-row flex-wrap justify-center gap-x-16 lg:gap-25 2xl:gap-28
        
        "
      >
        {imgs.map((img) => {
          return <img className="w-3/4 drop-shadow-2xl hover:scale-125 duration-300  md:w-4/12 2xl:w-3/12 rounded-lg" key={img.id} src={img.url} />;
        })}
      </div>
    </div>
  );
};

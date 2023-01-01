import React from "react";
import { imgs } from "./imgs";
import Slider from "react-slick";
import { useRef } from "react";
import { useState } from "react";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
}

export const Content = () => {
  const sliderRef = useRef(null);
  const [sliderOn, setSliderOn] = useState(false);

  return (
    <div className={`pt-10 pb-10 relative`}>
      <div
        className={`flex flex-col items-center gap-10 
        md:flex-row flex-wrap justify-center gap-x-16 lg:gap-25 2xl:gap-28 ${sliderOn ? "hidden" : "block"}`}
      >
        {imgs.map((img) => {
          return (
            <img
              key={img.id}
              src={img.url}
              onClick={() => {
                sliderRef.current.slickGoTo(img.id);
                setSliderOn(!sliderOn);
              }}
              className="w-3/4 drop-shadow-2xl hover:scale-125 duration-300  md:w-4/12 2xl:w-3/12 rounded-lg"
            />
          );
        })}
      </div>
      <div
        className={`${sliderOn ? "flex justify-center items-center bg-gray-300 h-[calc(100vh_-_3.5rem)] absolute top-0 left-0 w-full" : "hidden"}`}
        onClick={() => {
          setSliderOn(!sliderOn);
        }}
      >
        <Slider
          ref={sliderRef}
          onClick={(e) => {
            e.stopPropagation();
          }}
          {...settings}
          className="w-3/5 mx-auto 2xl:w-2/5 "
        >
          {imgs.map((img) => {
            return <img key={img.id} src={img.url} className={`w-full p-4 h-full`} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

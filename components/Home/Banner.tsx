import React from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import Image from "next/image";
import { HomeBanner } from "@/assets";
import { ParallaxImage } from "../Reusabe/ParallaxImage";

const Banner = () => {
  return (
    <ContainerLayout>
      <div className=" py-20 w-full">
        <ParallaxImage src={HomeBanner} alt="Banner Image" className=" md:aspect-video aspect-4/4 rounded-2xl" intensity={30}  />
      </div>
    </ContainerLayout>
  );
};

export default Banner;

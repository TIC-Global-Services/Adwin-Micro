"use client";

import ContainerLayout from "../Layout/ContainerLayout";
import { GlobeSvg, PoweringGrowthImg } from "@/assets";
import { motion } from "framer-motion";
import { ParallaxImage } from "../Reusabe/ParallaxImage";
import Image from "next/image";

const PoweringGrowth = () => {
  return (
    <ContainerLayout>
      <div className="py-16 md:py-20 space-y-12">
        {/* Heading */}

        {/* Image + Text Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-600 space-y-6  w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Powering Growth Worldwide
            </h1>
            <p>
              Adwin Global has steadily built a robust international network
              through a combination of high-quality products, proven OEM
              partnerships, and country-specific solutions. Our products are
              tailored to thrive in high-temperature, rural, and
              energy-deficient environments, making them a trusted choice in
              emerging and fast-growing markets.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex justify-center md:justify-start rounded-2xl"
          >
            <ParallaxImage
              src={PoweringGrowthImg}
              alt="Bowman Adwin"
              roundedClass=" rounded-2xl"
              className=" aspect-16/7 "
              roundedImage={true}
              intensity={5}
            />
          </motion.div>
        </div>
      </div>

      <div className=" flex flex-col gap-8 items-center justify-center text-center py-10">
        <div className=" rounded-2xl">
          <Image src={GlobeSvg} alt=" Globe SVG" width={200} height={200} className=" rounded-2xl"  />
        </div>
        <p className=" text-xl md:text-3xl text-primary font-semibold max-w-4xl">
          We currently serve 10+ countries across Asia, Africa, and the Middle
          East, with a growing base of channel partners, distributors, and
          institutional clients.
        </p>
      </div>
    </ContainerLayout>
  );
};

export default PoweringGrowth;

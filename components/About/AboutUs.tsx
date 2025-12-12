"use client";

import ContainerLayout from "../Layout/ContainerLayout";
import { AboutUsImg } from "@/assets";
import { motion } from "framer-motion";
import { ParallaxImage } from "../Reusabe/ParallaxImage";

const AboutUs = () => {
  return (
    <ContainerLayout>
      <div className="py-16 md:py-20 space-y-12">
        {/* Heading */}

        {/* Image + Text Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

           {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-600 space-y-6  w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              About Us
            </h1>
            <p>
             Established in 1995, the Unique Group built its foundation in plywood and wooden panels, gradually expanding into fertilizers, cement, MDF, particle boards, and LED lighting. With a vision to lead in the power sector, the Group launched Unique Energos Pvt. Ltd., which now manufactures advanced energy products.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex justify-center md:justify-start"
          >
            <ParallaxImage
              src={AboutUsImg}
              alt="Bowman Adwin"
              className=" aspect-video md:aspect-16/5 rounded-2xl"
              roundedImage={true}
              intensity={20}
            />
          </motion.div>

         
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AboutUs;

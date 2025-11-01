"use client";

import { ParallaxImage } from "../Reusabe/ParallaxImage";
import { ContactHeroBanner } from "@/assets";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center lg:items-start justify-center text-center overflow-hidden">
        
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ParallaxImage
          src={ContactHeroBanner}
          alt="Contact Hero Banner"
          className="w-full h-full"
          hoverZoom={false}
        />
        <div className="absolute inset-0 bg-black/70 w-full h-full z-10" />
      </div>

      {/* Text Section */}
      <div className="relative z-20 mx-auto space-y-6 px-4 max-w-3xl text-white lg:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-bold leading-tight"
        >
          Power up your business <br />
          with Adwin Global
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="text-gray-300 font-archivo"
        >
          Looking to distribute Adwin products in your region or build OEM partnerships? Get in touch with our international sales team.
        </motion.p>
      </div>

    </section>
  );
};

export default ContactHero;

"use client";

import { ParallaxImage } from "../Reusabe/ParallaxImage";
import { AboutHeroBanner } from "@/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center lg:items-start justify-center text-center overflow-hidden">
      {/* Background Section */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ParallaxImage
          src={AboutHeroBanner}
          alt="About Hero Banner"
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
          Built on Expertise. <br />Powered by Technology.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="text-gray-300 font-archivo"
        >
          From strong manufacturing roots to sustainable power innovations, we fuel growth and progress worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="px-6 py-3 border border-white rounded-lg text-white hover:bg-primary hover:border-primary transition-all duration-300 inline-block"
          >
            Contact For More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

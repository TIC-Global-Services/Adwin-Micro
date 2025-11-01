"use client";

import { useState } from "react";
import Image from "next/image";
import ContainerLayout from "../Layout/ContainerLayout";
import Link from "next/link";
import { OurNetworkImg } from "@/assets";
import { motion } from "framer-motion";

const OurNetworkHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 120; // smaller movement
    const y = (e.clientY - innerHeight / 2) / 120;
    setMousePosition({ x, y });
  };

  return (
    <ContainerLayout noPadding>
      <div
        onMouseMove={handleMouseMove}
        className="min-h-screen bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(215,232,227,1)_100%)] flex flex-col items-center text-center overflow-hidden"
      >
        {/* Text Section */}
        <div className="mx-auto space-y-6 pt-32 px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-bold"
          >
            Trusted Across Borders. <br />
            <span className="text-primary">Growing Across Continents.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl text-gray-500 mx-auto font-archivo"
          >
            From strong manufacturing roots to sustainable power innovations, we
            fuel growth and progress worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="px-6 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact For More
            </Link>
          </motion.div>
        </div>

        {/* Globe Image Section */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          transition={{ duration: 0 }}
          className="relative w-full flex justify-center mt-10"
        >
          <motion.div
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]"
          >
            <Image
              src={OurNetworkImg}
              alt="Our Network Image"
              fill
              priority
              className="object-cover object-top pointer-events-none select-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </ContainerLayout>
  );
};

export default OurNetworkHero;

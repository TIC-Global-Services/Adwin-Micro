"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ContainerLayout from "../Layout/ContainerLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  description: string;
  image: StaticImageData;
  link?: string;
  bgGradient?: string;
  textAlign?: "center" | "left" | "right";
  minHeight?: string;
  imageWidth?: string;
}

const HeroSection = ({
  title,
  highlight,
  description,
  image,
  link,
  bgGradient = "bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(215,232,227,1)_100%)]",
  textAlign = "center",
  minHeight = "min-h-screen",
  imageWidth = "w-full max-w-[1200px]",
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 120;
    const y = (e.clientY - innerHeight / 2) / 120;
    setMousePosition({ x, y });
  };

  const pathaname = usePathname();

  const essPage = '/products/ess'

  return (
    <ContainerLayout noPadding>
      <div
        onMouseMove={handleMouseMove}
        className={clsx(
          minHeight,
          bgGradient,
          `relative flex flex-col justify-start items-center text-${textAlign} overflow-hidden`
        )}
      >
        {/* === Text Section === */}
        <div
          className={clsx(
            "mx-auto space-y-6 pt-[40%] lg:pt-[8%] px-4 z-10 relative",
            textAlign === "left" ? "md:text-left" : "text-center"
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {title}{" "}
            {highlight && (
              <span className="text-primary block md:inline">{highlight}</span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl text-gray-500 mx-auto md:mx-0 font-archivo"
          >
            {description}
          </motion.p>

          {link && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href={link}
                className="px-6 py-3 border border-primary mt-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 inline-block"
              >
                Contact For More
              </Link>
            </motion.div>
          )}
        </div>

        {/* === Image Section (Parallax) === */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          transition={{ duration: 0 }}
          className={`absolute ${pathaname === essPage ? "bottom-44" : "bottom-20"} md:-bottom-12 lg:-bottom-20 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none`}
        >
          <motion.div
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={clsx(
              "relative",
              "h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]",
              imageWidth
            )}
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain object-bottom"
            />
          </motion.div>
        </motion.div>
      </div>
    </ContainerLayout>
  );
};

export default HeroSection;

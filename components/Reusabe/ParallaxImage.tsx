"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  /** Parallax movement intensity (in %) */
  intensity?: number;
  /** Extra Tailwind classes for the wrapper */
  className?: string;

  roundedImage?: boolean;
  roundedClass?: string;
  /** Enables smooth hover zoom */
  hoverZoom?: boolean;
}

/**
 * Responsive ParallaxImage with adjustable parallax intensity and hover effects.
 */
export const ParallaxImage = ({
  src,
  alt,
  intensity = 30,
  className,
  roundedImage = false,
  roundedClass = "rounded-2xl",
  hoverZoom = true,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${intensity}%`, `${intensity}%`]
  );

  return (
    <div
      ref={ref}
      className={clsx(
        "relative overflow-hidden w-full",
        className
      )}
    >
      <motion.div style={{ y }} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className={clsx(
            "object-cover transition-transform duration-500 ease-in-out",
            hoverZoom && "hover:scale-105", roundedImage && roundedClass
          )}
        />
      </motion.div>
    </div>
  );
};

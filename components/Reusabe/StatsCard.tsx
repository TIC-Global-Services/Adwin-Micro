"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type StatProps = {
  Icon?: React.ElementType; // React icon component
  imageSrc?: string;        // Optional image instead of icon
  value?: number;
  suffix: string;
  label: string;
  isText?: boolean;
};

const StatCard = ({
  Icon,
  imageSrc,
  value = 0,
  suffix,
  label,
  isText,
}: StatProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startCounting = () => {
    if (isText || hasAnimated) return;
    setHasAnimated(true);

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = Number(
        (progress * value).toFixed(value % 1 !== 0 ? 1 : 0)
      );
      setCount(currentValue);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <motion.div
      onViewportEnter={startCounting}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col items-center space-y-3 text-center"
    >
      <div className="text-3xl md:text-4xl text-white">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={label}
            width={48}
            height={48}
            className="hover:scale-110 transition-transform duration-300 object-contain"
          />
        ) : Icon ? (
          <Icon className="hover:scale-110 transition-transform duration-300" />
        ) : null}
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold flex items-baseline gap-1">
        {isText ? (
          <span>{suffix}</span>
        ) : (
          <>
            {count.toLocaleString()}
            <span>{suffix}</span>
          </>
        )}
      </h2>

      <p className="text-sm md:text-base text-gray-200">{label}</p>
    </motion.div>
  );
};

export default StatCard;

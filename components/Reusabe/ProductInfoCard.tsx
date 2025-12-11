"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Verify } from "@/assets/icons"; // ✅ your tick icon

gsap.registerPlugin(ScrollTrigger);

interface ProductInfoCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: StaticImageData;
  points: string[];
  index?: number; // used to determine layout (odd/even)
}

const ProductInfoCard = ({
  title,
  subtitle,
  description,
  image,
  points,
  index = 0,
}: ProductInfoCardProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const isEven = index % 2 !== 0;

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14"
    >
      {/* === Image Section === */}
      <div
        className={`flex-1 ${
          isEven ? "lg:order-2 justify-end" : "lg:order-1 justify-start"
        } flex `}
      >
        <Image
          src={image}
          alt={title}
          className="rounded-lg lg:w-[90%] aspect-4/3  object-cover"
        />
      </div>

      {/* === Content Section === */}
      <div
        className={`flex-1 ${
          isEven ? "lg:order-1" : "lg:order-2"
        } space-y-4 text-gray-700`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-primary font-medium text-sm md:text-base">
            {subtitle}
          </p>
        )}

        <p className="leading-relaxed text-sm md:text-base">{description}</p>

        <ul className="space-y-2 pt-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Verify className="text-primary mt-1" />

              <span className="text-gray-700 text-sm md:text-base">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductInfoCard;

"use client";

import { useEffect, useRef } from "react";
import {
  FullSpectrum,
  GridCasting,
  HeatSealed,
  OEMProducts,
  QualityLongevity,
} from "@/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardContent = [
  {
    text: "Serving international markets with trusted OEM-grade products",
    image: OEMProducts,
  },
  {
    text: "Fully automated heat-sealed battery lines",
    image: HeatSealed,
  },
  {
    text: "Full-spectrum R&D, chemical and electrical labs",
    image: FullSpectrum,
  },
  {
    text: "In-house grid casting, spine casting, and curing chambers",
    image: GridCasting,
  },
  {
    text: "Dedicated to quality, longevity, and performance",
    image: QualityLongevity,
  },
];

const WhyAdwin = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;

    if (!section || !scroll) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const totalScrollWidth = scroll.scrollWidth - window.innerWidth + 200;

      gsap.to(scroll, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scroll.scrollWidth}`,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-gray-800 py-10 lg:py-20"
    >
      <div
        ref={scrollRef}
        className="flex lg:flex-row flex-col lg:space-x-8 space-y-6 lg:space-y-0 px-6 lg:px-16 lg:pr-32"
      >
        {/* === Left Text Card (acts like a card) === */}
        <div className="relative lg:min-w-[30vw] h-[20vh] lg:h-[70vh] rounded-2xl bg-white flex flex-col justify-center items-start  z-20 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Why <span className="text-primary">Adwin Global?</span>
          </h1>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            At Adwin, we combine decades of expertise with cutting-edge
            technology to deliver reliable, high-performance energy solutions
            trusted across global markets.
          </p>
        </div>

        {/* === Image Cards === */}
        {CardContent.map((card, index) => (
          <div
            key={index}
            className="relative lg:min-w-[30vw] h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden  group "
          >
            <img
              src={card.image.src}
              alt={card.text}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            <p className="absolute bottom-6 left-6 right-6 text-white text-lg md:text-xl font-semibold leading-snug">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAdwin;

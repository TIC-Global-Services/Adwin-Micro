"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContainerLayout from "../Layout/ContainerLayout";
import {
  Package,
  Cog,
  ArrowUpRight,
  Network,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    icon: <Package size={36} strokeWidth={1.5} />,
    title: "10+ Export Destinations and expanding every year",
  },
  {
    icon: <Cog size={36} strokeWidth={1.5} />,
    title: "OEM Supplier to Top Indian Brands",
  },
  {
    icon: <ArrowUpRight size={36} strokeWidth={1.5} />,
    title: "Dedicated Export Team for local market compliance",
  },
  {
    icon: <Network size={36} strokeWidth={1.5} />,
    title: "Climate & Voltage Adaptation",
  },
  {
    icon: <Headphones size={36} strokeWidth={1.5} />,
    title: "Limited Regional Support & Training",
  },
];

const KeyNetworkStrengths = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      gsap.set(cards, { opacity: 0, y: 50 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 overflow-hidden"
    >
      <ContainerLayout>
        {/* === Section Title === */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Key Network Strengths
          </h2>
        </div>

        {/* === Cards (Centered Flex Layout) === */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {strengths.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex flex-col justify-center items-center text-center  border border-gray-400 rounded-xl transition-all duration-300 p-8 w-[90%] sm:w-[45%] md:w-[30%] min-h-[180px] md:min-h-[200px]"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default KeyNetworkStrengths;

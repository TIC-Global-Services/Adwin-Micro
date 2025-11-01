'use client'
import Image from "next/image";
import { AboutStatsImg } from "@/assets";
import {    
    CertificateTick,
    ISO,
    UserExpert,
    CarBatterySvg,
    FactorySvg } from "@/assets/icons";
import StatCard, { StatProps } from "../Reusabe/StatsCard";

const AboutStats = () => {
  const StatValues: StatProps[] = [
    { imageSrc: CertificateTick, value: 25, suffix: "+", label: "years legacy" },
    { imageSrc: CarBatterySvg, value: 80000, suffix: "+", label: "battery output" },
    { imageSrc: ISO, suffix: "ISO & MNRE", label: "certified", isText: true },
    { imageSrc: UserExpert, value: 100, suffix: "+", label: "R&D Experts" },
    { imageSrc: FactorySvg, value: 3, suffix: "", label: "Factories" }
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={AboutStatsImg}
          alt="Stats Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10  mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 text-white">
        {StatValues.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AboutStats;

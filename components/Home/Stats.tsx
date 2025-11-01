'use client'
import Image from "next/image";
import { StatsBackground } from "@/assets";
import { CarBattery, GlobeIcon, Factory, OEMIcon } from "@/assets/icons";
import StatCard, { StatProps } from "../Reusabe/StatsCard";

const Stats = () => {
  const StatValues: StatProps[] = [
    { Icon: CarBattery, value: 80000, suffix: "+", label: "units monthly" },
    { Icon: GlobeIcon, value: 10, suffix: "+", label: "global markets" },
    { Icon: Factory, value: 32.5, suffix: "", label: "acre facility" },
    { Icon: OEMIcon, suffix: "OEM", label: "to top brands", isText: true },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={StatsBackground}
          alt="Stats Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Stats Grid */}
      <div className="relative z-10  mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-white">
        {StatValues.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;

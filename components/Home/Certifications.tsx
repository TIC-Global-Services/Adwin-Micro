"use client";

import React from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import { ARAICertified, CECertified, ISO14001, ISO9001 } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificates = [
    {
      name: "ISO 9001:2015 – Quality Management Systems",
      imageSrc: ISO9001,
    },
    {
      name: "ARAI Approved – For E-Rickshaw Battery Standards",
      imageSrc: ARAICertified,
    },
    {
      name: "ISO 14001:2015 – Environmental Management",
      imageSrc: ISO14001,
    },
    {
      name: "CE Certified – EU Product Standards",
      imageSrc: CECertified,
    },
  ];

  return (
    <ContainerLayout>
      <div className="py-16 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#606060] text-3xl md:text-5xl font-bold mb-12"
        >
          Our Certifications
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 place-items-center">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <Image
                  src={cert.imageSrc}
                  alt={cert.name}
                  width={220}
                  height={220}
                  quality={100}
                  className="my-6 transition-all duration-300"
                />
              </motion.div>
              <h2 className="text-gray-500 text-sm md:text-lg font-medium max-w-[250px]">
                {cert.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Certifications;

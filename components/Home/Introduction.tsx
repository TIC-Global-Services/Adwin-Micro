"use client";

import React from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import Image from "next/image";
import { BowmanAdwin } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxImage } from "../Reusabe/ParallaxImage";

const Introduction = () => {
  return (
    <ContainerLayout>
      <div className="py-16 md:py-20 space-y-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center md:text-left"
        >
          Introduction
        </motion.h1>

        {/* Image + Text Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex justify-center md:justify-start"
          >
            <ParallaxImage
              src={BowmanAdwin}
              alt="Bowman Adwin"
              className=" aspect-4/5 sm:aspect-3/2 lg:aspect-4/3 rounded-2xl"
              intensity={20}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-600 space-y-6  w-full"
          >
            <p>
              Welcome to{" "}
              <span className="font-semibold text-primary">Adwin Global</span>,
              the international face of Unique Energos Pvt. Ltd., one of India’s
              fastest-growing manufacturers of power storage and solar energy
              solutions. With facilities in India, Nepal, and Sri Lanka, we
              produce 80,000+ batteries monthly and partner with leading global
              brands.
            </p>

            <p>
              Serving clients across Asia, Africa, and the Middle East, Adwin
              delivers reliable solar, inverter, and automotive power solutions
              designed for performance and engineered for life.
            </p>

            <Link
              href="/about"
              className="inline-block bg-primary px-6 py-3 rounded-xl text-white hover:bg-green-700 transition"
            >
              About us →
            </Link>
          </motion.div>
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-16 md:pt-20 space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-[#4A4A4A]">
            Our Impact in Numbers
          </h1>

          <p className="text-lg max-w-3xl mx-auto text-gray-500">
            Whether you need advanced solar batteries, high-efficiency
            inverters, or automotive-grade power, Adwin is your partner in
            energy that’s designed for performance and engineered for life.
          </p>
        </motion.div>
      </div>
    </ContainerLayout>
  );
};

export default Introduction;

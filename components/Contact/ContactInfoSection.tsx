"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ContainerLayout from "../Layout/ContainerLayout";
import { GreenLogo } from "@/assets"; // adjust import as per your setup

const ContactInfoSection = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white pb-16 md:pb-24">
      <ContainerLayout>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {/* === Head Office === */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="bg-gray-100 rounded-xl  p-6 text-center flex flex-col justify-center items-center  transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
              Head Office:
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              VPO. Dhaurang, Yamuna Nagar<br />Pincode : 135001
            </p>
          </motion.div>

          {/* === Logo (center) === */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="bg-gray-100 rounded-xl  p-6 flex justify-center items-center  transition-all duration-300"
          >
            <Image
              src={GreenLogo}
              alt="Adwin Logo"
              className="w-32 md:w-40 h-auto object-contain"
            />
          </motion.div>

          {/* === Contact Info === */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="bg-gray-100 rounded-xl p-6 text-center flex flex-col justify-center items-center  transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
              Contact Via:
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Email: <span className="font-medium">info@adwinbattery.com</span>
              <br />
              Phone: <span className="font-medium">1800 8914 007</span>
            </p>
          </motion.div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
};

export default ContactInfoSection;

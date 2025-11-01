"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContainerLayout from "../Layout/ContainerLayout";

const CTASection = () => {
  return (
    <ContainerLayout>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#F3F3F3] rounded-xl my-16 px-6 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 "
      >
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-primary"
          >
            Looking to partner with us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base md:text-xl max-w-md"
          >
            Contact us today to become a distributor or OEM partner.
          </motion.p>
        </div>

        {/* Button Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.section>
    </ContainerLayout>
  );
};

export default CTASection;

"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "../Layout/ContainerLayout";
import { v } from "typyn"; 
import { Pattern } from "@/assets"; 

const catalogueSchema = v.object({
  firstName: v.string().min(2).max(50),
  email: v.string().email(),
});

type FormData = {
  firstName: string;
  email: string;
};

const CatalogueDownload = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = catalogueSchema.safe(formData);

    if (!result.success) {
      const { path, message } = result.error;
      setErrors({ [path]: message });
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    console.log("✅ Catalogue form submitted:", result.data);
  };

  return (
    <section className="py-16 md:py-20">
      <ContainerLayout>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden bg-[#EDEBEB] flex flex-col lg:flex-row"
        >
          {/* === Left: Text + Form === */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl md:text-5xl font-bold text-primary leading-snug font-archivo">
              Explore our complete <br />
              range of products
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Type here"
                  className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-primary"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-primary text-white  px-6 py-2 rounded-md transition-all duration-200 hover:bg-primary/90"
              >
                {isSubmitted
                  ? "Catalogue Sent ✔"
                  : "Download Product Catalogue"}
              </motion.button>
            </form>
          </div>

          {/* === Right: Image === */}
          <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto">
            <Image
              src={Pattern}
              alt="Product Catalogue Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
};

export default CatalogueDownload;

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { v } from "typyn";
import { Pattern } from "@/assets"; 

const catalogueSchema = v.object({
  firstName: v.string().min(2).max(50),
  email: v.string().email(),
  catalogueType: v.string().min(1),
});

type FormData = {
  firstName: string;
  email: string;
  catalogueType: string;
};

// --- PDF FILE MAP (100% reliable) ---
const catalogueFiles: Record<string, string> = {
  solar: "Solar-Solutions-Catalogue.pdf",
  lithium: "Lithium-Solutions-Catalogue.pdf",
  "lead-acid": "Lead-Acid-Solutions-Catalogue.pdf",
};

const CatalogueDownload = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    catalogueType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbwKKMNV8LonBqYlBAS1J8fbzU9RvdYOkcEfdEql86wsiDsLEuCA-ft71MVnYBxvGCQ36Q/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = catalogueSchema.safe(formData);

    if (!result.success) {
      const { path, message } = result.error;
      setErrors({ [path]: message });
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // --- Send data to Google Sheet ---
      await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      setIsSubmitted(true);

      // --- DOWNLOAD PDF ---
      const fileKey = formData.catalogueType;
      const pdfFile = catalogueFiles[fileKey];

      if (!pdfFile) {
        alert("Invalid catalogue file.");
        return;
      }

      const pdfPath = `/Catalogues/${pdfFile}`;

      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfFile;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Reset form after 1.5s
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: "", email: "", catalogueType: "" });
      }, 1500);
    } catch (error) {
      console.error("Error saving to sheet:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="px-6 md:px-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden bg-[#EDEBEB] flex flex-col lg:flex-row"
        >
          {/* Left */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl md:text-5xl font-bold text-[#005F20] leading-snug font-archivo">
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
                      : "border-gray-300 focus:ring-[#005F20]"
                  }`}
                  disabled={isLoading}
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
                      : "border-gray-300 focus:ring-[#005F20]"
                  }`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Catalogue Select */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Select Catalogue <span className="text-red-500">*</span>
                </label>
                <select
                  name="catalogueType"
                  value={formData.catalogueType}
                  onChange={handleChange}
                  className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
                    errors.catalogueType
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-[#005F20]"
                  }`}
                  disabled={isLoading}
                >
                  <option value="">Select</option>
                  <option value="solar">Solar Solutions Catalogue</option>
                  <option value="lithium">Lithium Solutions Catalogue</option>
                  <option value="lead-acid">Lead Acid Solutions Catalogue</option>
                </select>
                {errors.catalogueType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.catalogueType}
                  </p>
                )}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 rounded-md text-white transition-all duration-200 ${
                  isSubmitted
                    ? "bg-green-600"
                    : isLoading
                    ? "bg-[#005F20]/70 cursor-not-allowed"
                    : "bg-[#005F20] hover:bg-primary/90"
                }`}
              >
                {isLoading
                  ? "Processing..."
                  : isSubmitted
                  ? "Catalogue Sent ✔"
                  : "Download Product Catalogue"}
              </motion.button>
            </form>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] lg:h-auto">
            <Image src={Pattern} alt="Catalogue" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogueDownload;

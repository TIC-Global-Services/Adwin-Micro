"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v } from "typyn";
import ContainerLayout from "../Layout/ContainerLayout";

// === Typyn Schema ===
const contactSchema = v.object({
  firstName: v.string().min(2).max(50),
  phone: v
    .string()
    .max(10)
    .refine(
      (val) => /^[0-9]{10}$/.test(val),
      "Phone number must be exactly 10 digits"
    ),
  email: v.string().email(),
  company: v.string().min(2).max(100),
  message: v.string().min(2).max(1000),
});

type FormData = {
  firstName: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safe(formData);

    if (!result.success) {
      const { path, message } = result.error;
      console.log("❌ Validation Error:", path, message);
      setErrors({ [path]: message });
      console.log(errors)
      return;
    }

    setErrors({});
    setShowToast(true);
    console.log("✅ Valid Form Data:", result.data);

    // Clear fields
    setFormData({
      firstName: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    });

    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <ContainerLayout className="flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 relative">
      {/* === Toast === */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-sm md:text-base font-medium z-50"
          >
            ✅ Your message has been successfully submitted!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center  mb-10"
      >
        <h1 className="text-2xl md:text-5xl font-semibold text-primary mb-2">
          Connect with us today and
        </h1>
        <h2 className="text-2xl md:text-5xl font-semibold text-primary">
          let’s power a brighter future together
        </h2>
      </motion.div>

      {/* === Form Section === */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="w-full  bg-white px-6 lg:px-20 space-y-6 lg:py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                // Allow only digits while typing
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setFormData({ ...formData, phone: numericValue });
              }}
              maxLength={10}
              placeholder="00000 00000"
              className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Company */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Write company name"
              className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
                errors.company
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>
        </div>

        {/* --- Message --- */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Write your Message here <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={8}
            placeholder="Write here"
            className={`w-full border rounded-md px-4 py-2 resize-none outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-primary"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* --- Submit Button --- */}
        <div className="flex justify-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-primary text-white font-medium px-10 py-3 rounded-md shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </ContainerLayout>
  );
};

export default ContactForm;

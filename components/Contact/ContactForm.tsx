"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v } from "typyn";
import ContainerLayout from "../Layout/ContainerLayout";

// === Typyn Schema ===
const contactSchema = v.object({
  name: v.string().min(2),
  phone: v
    .string()
    .refine((val) => /^[0-9]{10}$/.test(val), "Phone must be 10 digits"),
  email: v.string().email(),
  company: v.string().min(2),
  message: v.string().min(2),
});

type FormData = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // ----------------------------------------
  // VALIDATION
  // ----------------------------------------
 const validate = () => {
  const result = contactSchema.safe(formData);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};

    // Typyn issues is an object, not an array
    Object.entries(result.error).forEach(([field, issue]: any) => {
      fieldErrors[field] = issue.message;
    });

    setErrors(fieldErrors);
    return false;
  }

  setErrors({});
  return true;
};


  // ----------------------------------------
  // HANDLE CHANGE
  // ----------------------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ----------------------------------------
  // SUBMIT HANDLER
  // ----------------------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwT80LdJ9Q0UDEHRpfw5-xFadGpnB6HqNTP10k02JGbLZoarZh_Q1J3sgN78nzIJLcg/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: "",
      });

      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Try again later.");
    } finally {
      setIsLoading(false);
    }
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
            transition={{ duration: 0.3 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-sm md:text-base font-medium z-50"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl md:text-5xl font-semibold text-primary mb-2">
          Connect with us today and
        </h1>
        <h2 className="text-2xl md:text-5xl font-semibold text-primary">
          let’s power a brighter future together
        </h2>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="w-full bg-white px-6 lg:px-20 space-y-6 lg:py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          {/* Phone */}
          <FormInput
            label="Phone Number"
            name="phone"
            value={formData.phone}
            maxLength={10}
            onChange={(e: any) =>
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })
            }
            error={errors.phone}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          {/* Company */}
          <FormInput
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>

        {/* Message */}
        <FormTextarea
          label="Message"
          name="message"
          rows={8}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        {/* Submit */}
        <div className="flex justify-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className="bg-primary text-white font-medium px-10 py-3 rounded-md shadow-md disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Submit"}
          </motion.button>
        </div>
      </motion.form>
    </ContainerLayout>
  );
};

/* ----------------------------------------
   REUSABLE COMPONENTS
---------------------------------------- */

const FormInput = ({
  label,
  error,
  ...props
}: any) => (
  <div>
    <label className="block text-gray-700 text-sm mb-1">{label} *</label>
    <input
      {...props}
      className={`w-full border rounded-md px-4 py-2 outline-none focus:ring-2 ${
        error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const FormTextarea = ({ label, error, ...props }: any) => (
  <div>
    <label className="block text-gray-700 text-sm mb-1">{label} *</label>
    <textarea
      {...props}
      className={`w-full border rounded-md px-4 py-2 resize-none outline-none focus:ring-2 ${
        error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-primary"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ContactForm;

"use client";

import { motion } from "framer-motion";
import ProductInfoCard from "./ProductInfoCard";
import ContainerLayout from "../Layout/ContainerLayout";

interface ProductCategorySectionProps {
  title: string;
  subtitle?: string;
  products: {
    title: string;
    subtitle?: string;
    description: string;
    image: any;
    points: string[];
  }[];
}

const ProductCategorySection = ({
  title,
  subtitle,
  products,
}: ProductCategorySectionProps) => {
  return (
    <section className="bg-white py-10">
      <ContainerLayout>
        {/* === Category Title === */}
       

        {/* === Map Product Cards === */}
        <div className="flex flex-col lg:px-10">
          {products.map((product, i) => (
            <ProductInfoCard key={i} {...product} index={i} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ProductCategorySection;

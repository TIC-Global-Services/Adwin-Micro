import React from "react";
import ProductCategorySection from "../Reusabe/ProductCategorySection";
import { automotiveProducts, essProducts, solarProducts } from "./Data";

const AllProducts = () => {
  return (
    <div className=" py-20">
      <ProductCategorySection
        title="Solar Solutions"
        products={solarProducts}
      />
      <ProductCategorySection
        title="Automotive Solutions"
        products={automotiveProducts}
      />
      <ProductCategorySection
        title="Energy Storage Solutions (ESS)"
        products={essProducts}
      />
    </div>
  );
};

export default AllProducts;

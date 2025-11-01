import { ProductsBanner } from "@/assets";
import AllProducts from "@/components/Products/AllProducts";
import HeroSection from "@/components/Reusabe/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection
        title="Engineered for Performance."
        highlight="Designed for Reliability."
        description="From energy to materials, we engineer solutions that power progress every day."
        link="/contact"
        image={ProductsBanner}
      />
      <AllProducts />
    </div>
  );
};

export default page;

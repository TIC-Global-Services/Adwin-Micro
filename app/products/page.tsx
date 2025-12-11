import OurSolutions from "@/components/Products/OurSolutions";
import DynamicHero from "@/components/Products/ProductsHero";

const page = () => {
  return (
    <div>
      <DynamicHero
        title="Products & Solutions"
        mediaType="image"
        mediaSrc={"https://ik.imagekit.io/adwinpower/Adwin%20Digital%20Assets/Factory/Man%20with%20battery.jpg"}
      />
      <OurSolutions />
    </div>
  );
};

export default page;

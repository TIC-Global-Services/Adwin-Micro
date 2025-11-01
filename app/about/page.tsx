import AboutHero from "@/components/About/AboutHero";
import AboutStats from "@/components/About/AboutStats";
import AboutUs from "@/components/About/AboutUs";
import Directors from "@/components/About/Directors";
import PoweringEnergy from "@/components/About/PoweringEnergy";
import WhyAdwin from "@/components/About/WhyAdwin";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <AboutStats />
      <PoweringEnergy />
      <WhyAdwin />
      <Directors />
    </div>
  );
};

export default page;

import Banner from "@/components/Home/Banner";
import Certifications from "@/components/Home/Certifications";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import Introduction from "@/components/Home/Introduction";
import Stats from "@/components/Home/Stats";

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Stats />
      <Banner />
      <Certifications />
      <CTASection />
    </div>
  );
}

import { notFound } from "next/navigation";

import HeroSection from "@/components/Reusabe/HeroSection";
import ProductCategorySection from "@/components/Reusabe/ProductCategorySection";
import { AutomativeBatteryProduct, AutomotiveBatteryBanner, BatteriesProduct, InverterBanner, InverterProduct, ProductsBanner, SolarBatteryBanner, SolarBatteryProduct, SolarHybridPCUProduct, SolarPanelsProduct } from "@/assets";
import CatalogueDownload from "@/components/Reusabe/CatalogueDownload";

// === Category Data ===
const productsData = {
  solar: {
    hero: {
      title: "Solar ",
      highlight: "Solutions",
      description:
        "From energy to materials, we engineer solutions that power progress every day.",
      image: SolarBatteryBanner,
      imageWidth: " w-full lg:w-1/2"
    },
    products: [
      {
        title: "Solar Battery",
        subtitle: "Available from 40AH to 250AH.",
        description:
          "Adwin’s deep-cycle solar batteries are engineered for longer backup, fast recharge, and reliable solar integration.",
        image: SolarBatteryProduct,
        points: [
          "High recovery from deep discharge",
          "Optimized for solar charge controllers",
          "Long lifespan and low maintenance",
          "Eco-safe vent plugs with minimal fumes",
        ],
      },
      {
        title: "Solar Hybrid PCU (PWM & MPPT)",
        description:
          "Adwin’s Solar PCUs integrate grid, solar, and battery power with intelligent charging logic.",
        image: SolarHybridPCUProduct,
        points: [
          "Hybrid mode with grid/solar prioritization",
          "Smart LCD+LED status display",
          "Generator compatible with RS-232 comms",
          "Auto recovery & protections built-in",
        ],
      },
      {
        title: "Solar Panels",
        description:
          "Built with high-efficiency PERC and Half-Cut mono cells, Adwin Solar Panels offer up to 23.08% efficiency and strong resistance to PID, wind, and snow loads.",
        image: SolarPanelsProduct,
        points: [
          "Multiple wattages: 40W–550W",
          "High durability, even in harsh climates",
          "Bifacial & DCR options for government projects",
          "Easy installation & 1500V DC system support",
        ],
      },
    ],
  },

  automotive: {
    hero: {
      title: "Automotive",
      highlight: "Solutions",
      description:
        "From energy to materials, we engineer solutions that power progress every day.",
      image: AutomotiveBatteryBanner,
      imageWidth: " w-full lg:w-1/2"
    },
    products: [
      {
        title: "Automotive Battery",
        subtitle: "Range: 35AH–150AH including DIN variants.",
        description:
          "Adwin GRATA Graphene automotive batteries are built with advanced nano-carbon and calcium-lead alloys for longer life, high cranking, and minimal maintenance.",
        image: AutomativeBatteryProduct,
        points: [
          "High crank power, even in extreme weather",
          "Faster recharge from deep sulphation",
          "Suitable for frequent start-stop use",
          "Extended life with low maintenance",
        ],
      },
    ],
  },

  ess: {
    hero: {
      title: "Energy Storage",
      highlight: "Solutions",
      description:
        "From energy to materials, we engineer solutions that power progress every day.",
      image: InverterBanner,
      imageWidth: "w-full"

    },
    products: [
      {
        title: "Inverter",
        subtitle: "Available from 900VA to 10KVA.",
        description:
          "Adwin’s Pure Sinewave Inverters are engineered for stable power output, digital control, and compatibility with solar, lithium, and lead-acid batteries.",
        image: InverterProduct,
        points: [
          "Zero-volt battery revival",
          "Reverse polarity & overload protection",
          "Smart charging modes (low/high current)",
          "LCD status display with safety indicators",
        ],
      },
      {
        title: "Battery",
        subtitle: "Wide range: 40AH–500AH.",
        description:
          "Our ESS battery portfolio includes both lead-acid and lithium models optimized for backup, solar, and hybrid setups.",
        image: BatteriesProduct,
        points: [
          "Available in tubular, SMF, and LiFePO₄ variants",
          "Long lifecycle with high charge acceptance",
          "Fast recharge and deep discharge recovery",
          "BIS & MNRE certified models available",
        ],
      },
    ],
  },
};

// ✅ FIXED Dynamic Page (async)
export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params; // ✅ unwrap the Promise correctly

  console.log("Active category:", category);

  const categoryData = productsData[category as keyof typeof productsData];

  if (!categoryData) return notFound();

  return (
    <div>
      <HeroSection
        title={categoryData.hero.title}
        highlight={categoryData.hero.highlight}
        description={categoryData.hero.description}
        image={categoryData.hero.image || ProductsBanner}
        imageWidth={categoryData.hero.imageWidth}
      />
      <ProductCategorySection
        title={categoryData.hero.highlight}
        subtitle={categoryData.hero.description}
        products={categoryData.products}
      />
      <CatalogueDownload />
    </div>
  );
}

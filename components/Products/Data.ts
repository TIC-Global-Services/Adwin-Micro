import { AutomativeBattery, InbuiltESS, Inverter, NormalBattery, SolarBattery, SolarHybridPCU, SolarPanels } from "@/assets";

export const solarProducts = [
  {
    title: "Solar Battery",
    subtitle: "Available from 40AH to 250AH.",
    description:
      "Adwin’s deep-cycle solar batteries are engineered for longer backup, fast recharge, and reliable solar integration. Designed with nano-carbon tech, these batteries handle daily charge-discharge cycles, making them perfect for off-grid and hybrid setups.",
    image: SolarBattery,
    points: [
      "High recovery from deep discharge",
      "Optimized for solar charge controllers",
      "Long lifespan and low maintenance",
      "Eco-safe vent plugs with minimal fumes",
    ],
  },
  {
    title: "Solar Hybrid PCU (PWM & MPPT)",
    subtitle: "",
    description:
      "Adwin’s Solar PCUs integrate grid, solar, and battery power with intelligent charging logic. Available in PWM (900VA–2.75KVA) and MPPT (1KVA–10KVA) variants, they deliver maximum energy harvesting with minimal loss.",
    image: SolarHybridPCU,
    points: [
      "Hybrid mode with grid/solar prioritization",
      "Smart LCD+LED status display",
      "Generator compatible with RS-232 comms",
      "Auto recovery & protections built-in",
    ],
  },
  {
    title: "Solar Panels",
    subtitle: "",
    description:
      "Built with high-efficiency PERC and Half-Cut mono cells, Adwin Solar Panels offer up to 23.08% efficiency and strong resistance to PID, wind, and snow loads. Available in mono, bifacial, and DCR variants.",
    image: SolarPanels,
    points: [
      "Multiple wattages: 40W–550W",
      "High durability, even in harsh climates",
      "Bifacial & DCR options for government projects",
      "Easy installation & 1500V DC system support",
    ],
  },
  {
    title: "Inbuilt ESS (Solar + Lithium)",
    subtitle: "",
    description:
      "Compact, wall-mount systems that combine Lithium (LiFePO4) batteries with an integrated solar inverter. Designed for modern homes and businesses seeking silent, maintenance-free, and intelligent energy.",
    image: InbuiltESS,
    points: [
      "Zero-maintenance integrated design",
      "Fast recharge and longer battery life",
      "Smart solar utilization and load priority",
      "Ideal for space-saving urban installs",
    ],
  },
];


export const automotiveProducts = [
  {
    title: "Automotive Battery",
    subtitle: "Range: 35AH–150AH including DIN variants.",
    description:
      "Adwin GRATA Graphene automotive batteries are built with advanced nano-carbon and calcium-lead alloys for longer life, high cranking, and minimal maintenance. Compatible with cars, tractors, and commercial vehicles.",
    image: AutomativeBattery,
    points: [
      "High crank power, even in extreme weather",
      "Faster recharge from deep sulphation",
      "Suitable for frequent start-stop use",
      "Extended life with low maintenance",
    ],
  },
];

export const essProducts = [
  {
    title: "Inverter",
    subtitle: "Available from 900VA to 10KVA.",
    description:
      "Adwin’s Pure Sinewave Inverters are engineered for stable power output, digital control, and compatibility with solar, lithium, and lead-acid batteries. Designed for reliability and efficiency in both home and industrial setups.",
    image: Inverter,
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
      "Our ESS battery portfolio includes both lead-acid and lithium models optimized for backup, solar, and hybrid applications. With fast-charging, deep discharge recovery, and long backup cycles, Adwin batteries are a reliable choice for global markets.",
    image: NormalBattery,
    points: [
      "Available in tubular, SMF, and LiFePO₄ variants",
      "Long lifecycle with high charge acceptance",
      "Fast recharge and deep discharge recovery",
      "BIS & MNRE certified models available",
    ],
  },
];
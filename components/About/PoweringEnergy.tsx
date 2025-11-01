"use client";
import { Verify } from "@/assets/icons";
import ContainerLayout from "../Layout/ContainerLayout";

const PoweringEnergy = () => {
  const points = [
    "State-of-the-art Infrastructure Across 3 Countries",
    "Engineered for Harsh Climates and Conditions",
    "Reliable Power for Global Applications",
    "Scalable Solutions for Every Requirement",
  ];

  return (
    <ContainerLayout>
      <div className="grid md:grid-cols-2 gap-10 items-start py-12">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700 leading-snug">
            <span className="text-primary">Powering Energy</span> <br />
            Solutions That Last
          </h1>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-gray-600">
          <p>
            With over 32.5 acres of advanced manufacturing in Yamuna Nagar,
            India, and plants in Nepal and Sri Lanka, Adwin delivers
            global-standard energy solutions built for diverse needs and
            challenging climates.
          </p>

          <ul className="space-y-3">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <Verify className="text-primary mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default PoweringEnergy;

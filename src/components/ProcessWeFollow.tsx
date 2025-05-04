'use client'; // Assuming ChefronCardText might use client features

import { StaticImageData } from 'next/image'; // Import Image for icons
import { ChefronCardText } from "./ChefronCard";

// Import assets directly
import Comprehend from "../assets/Comprehend.png";
import Design from "../assets/Design.png";
import Development from "../assets/Development.png";
import Test from "../assets/Test.png";
import Maintaince from "../assets/Maintaince.png";

interface ProcessStep {
  icon: StaticImageData; // Use StaticImageData for imported images
  title: string;
}

const ProcessWeFollow = () => {
  const steps: ProcessStep[] = [
    { icon: Comprehend, title: "Comprehend" },
    { icon: Design, title: "Design" },
    { icon: Development, title: "Development" },
    { icon: Test, title: "Test" },
    { icon: Maintaince, title: "Maintenance" }, // Corrected title spelling
  ];

  return (
    // Section container with background, padding, and borders
    <section className="w-full bg-green-50 py-12 border-t border-b border-green-100">
      {/* Inner container with max-width and padding */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-10 font-neue">
          Process We Follow
        </h2>

        {/* Flex container for the cards */}
        {/* Note: The 'gap-6' class from the original code was removed in the prompt's example, kept it removed here */}
        <div className="flex items-center justify-center flex-wrap">
          {steps.map((step, index) => (
            <ChefronCardText
              key={index}
              text={step.title}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessWeFollow;
'use client';

import ServiceCard from "@/components/Servicecard";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessWeFollow from "@/components/ProcessWeFollow";
import TechStackPage from "@/components/TechStack";
import Faq from "@/components/Faq";
import Contactus from "@/components/Contactus";
import PastProjects from "@/components/PastProjects";
import GifImage from "@/assets/AI.gif";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <>
      <section className="py-16 relative overflow-hidden">
        {/* Radial gradient background */}
        <div
          className="absolute top-1/3 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-60 z-0"
          style={{
            background:
              'radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))',
          }}
        ></div>
        <div
          className="absolute z-0 left-1/2 -top-1/6 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-80 z-0"
          style={{
            background:
              'radial-gradient(circle at top right, purple, rgba(240, 249, 255, 0.4))',
          }}
        ></div>
        <div
          className="absolute z-0 left-2/3 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-80 z-0"
          style={{
            background:
              'radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))',
          }}
        ></div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Heading section */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-5 items-center">
            <h2 className="text-5xl col-span-3 md:text-6xl font-bold text-blue-600 mb-2 font-neue">
              Software That <span className="text-teal-500">Fits,</span>
              <br />
              Made Just For <span className="text-teal-500">You.</span>
            </h2>

            <div className="opacity-90 col-span-2">
              <Image
                src={GifImage}
                blurDataURL="/AI.gif"
                alt="Animated AI graphic"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          <ServiceCardContainer />
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <WhyChooseUs />
        <PastProjects />
        <ProcessWeFollow />
        <TechStackPage />
        <Contactus />
        <Faq />
      </section>
    </>
  );
};

export default ServicesSection;

const ServiceCardContainer = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Sites so smooth, even your grandma will scroll. We build fast, pretty, pixel-perfect magic.",
      iconPlaceholder: "</>",
    },
    {
      title: "App Development",
      description:
        "From ‘What if…’ to ‘Download now!’ — we turn ideas into addictive, tappable realities.",
      iconPlaceholder: "<📱>",
    },
    {
      title: "Blockchain Dev",
      description:
        "Not just crypto talk. We build chains that actually do things. Decentralized? Yes. Confusing? Never.",
      iconPlaceholder: "⛓️",
    },
    {
      title: "Code Outsource",
      description:
        "Outsource to us — your code gets done, your team gets sleep, your boss gets wowed.",
      iconPlaceholder: "⚙️",
    },
    {
      title: "Backend Dev",
      description:
        "Our backend devs are like ninjas — silent, efficient, and always saving your app’s life.",
      iconPlaceholder: "{ }",
    },
    {
      title: "AI Integration",
      description:
        "Slap some brains on your business — we bolt on AI like it’s Iron Man tech. ",
      iconPlaceholder: "🤖",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-blue-700 text-center mb-8 font-neue">
        Services That We Offer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            iconPlaceholder={service.iconPlaceholder}
            gradientDirection={index % 2 === 0 ? "ltr" : "rtl"}
          />
        ))}
      </div>
    </div>
  );
};

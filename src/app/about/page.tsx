import React from "react";
import ServiceCardContainer from "@/components/ServicesCardContainer";
// import OtherProjects from "@/components/OtherProjects";
import ProcessWeFollow from "@/components/ProcessWeFollow";
import Contactus from "@/components/Contactus";
import Faq from "@/components/Faq";
import AboutImage from "@/assets/About.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      {[
        { top: "top-1/6", color: "yellow" },
        { top: "", left: "left-1/2", color: "blue" },
        { top: "top-1/3", right: "right-0", color: "blue" },
        { top: "top-2/3", left: "left-0", color: "yellow" },
        { bottom: "bottom-1/12", right: "right-0", color: "blue" },
      ].map((style, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full blur-3xl h-[400px] w-[400px] opacity-50 z-0 ${style.top || ""
            } ${style.left || ""} ${style.right || ""} ${style.bottom || ""}`}
          style={{
            background: `radial-gradient(circle at top right, ${style.color}, rgba(240, 249, 255, 0.4))`,
          }}
        />
      ))}

      {/* Content */}
      <AboutUsCard />
      <div className="max-w-5xl mx-auto my-4">
        <ServiceCardContainer />
      </div>
      {/* <OtherProjects /> */}
      <ProcessWeFollow />
      <Contactus />
      <Faq />
    </section>
  );
};

export default AboutPage;

const AboutUsCard = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-4 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 text-center font-neue">
          About Us.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={AboutImage}
            alt="Team collaboration"
            width={224}
            height={224}
            className="object-cover rounded-lg"
            priority
          />
          <div className="text-gray-700 text-lg leading-relaxed font-agrandir">
            <p>
              We are a company founded by 10x engineers from top tech firms like
              Google, Meta, LinkedIn, and Microsoft. With deep technical
              expertise and experience building products used by millions, we
              understand technology at its core.
            </p>
            <p className="mt-4">
              Unlike traditional IT consultancies that rely on subpar talent,
              leading to buggy, delayed, and over-budget projects, we take a
              different approach. We believe AI is amplifying individual impact
              to an unprecedented degree—enabling elite engineers to build
              high-quality solutions directly for businesses while earning at
              par with Big Tech.
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Our mission is to leverage AI and top-tier engineering talent to
          deliver IT solutions that are faster, more cost-effective, and far
          superior in quality. If you are looking for 10x engineers to build
          your next IT product/startup, you should consider us.
        </p>
      </div>
    </div>
  );
};

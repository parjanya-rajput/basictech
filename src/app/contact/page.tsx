
import React from "react";
import Contactus from "@/components/Contactus";
import Faq from "@/components/Faq";

const ContactPage = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background Blobs */}
      <div
        className="absolute top-1/6 left-0 rounded-full blur-3xl h-[400px] w-[400px] opacity-50 z-0"
        style={{
          background: "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>

      <div
        className="absolute z-0 left-1/2 rounded-full blur-3xl h-[400px] w-[400px] opacity-50"
        style={{
          background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>

      <div
        className="absolute z-0 right-0 top-1/3 rounded-full blur-3xl h-[400px] w-[400px] opacity-50"
        style={{
          background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>

      <div
        className="absolute z-0 left-0 top-2/3 rounded-full blur-3xl h-[400px] w-[400px] opacity-50"
        style={{
          background: "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Contactus />
        <Faq />
      </div>
    </section>
  );
};

export default ContactPage;

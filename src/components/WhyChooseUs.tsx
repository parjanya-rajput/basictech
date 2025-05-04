

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "10+ Projects Done",
      description:
        "We’ve been there, built that — over 10 times. Experience that codes confidence into every line.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z" />
          <rect width="20" height="14" x="2" y="8" rx="2" />
          <path d="M6 13v3" />
          <path d="M10 13v3" />
          <path d="M14 13v3" />
          <path d="M18 13v3" />
        </svg>
      ),
      title: "AI Powered",
      description:
        "We don’t just code — we think. AI in our stack means smarter, sharper solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
      title: "Cost-Effective",
      description:
        "Big tech dreams? Small budget? Perfect. We deliver premium without the premium price tag.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      ),
      title: "Fast Delivery",
      description:
        "Deadline? What deadline? We’re done before your coffee cools. Speed without the stress.",
    },
  ];

  return (
    <section className="w-full bg-green-50 py-12 border-t border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10 font-neue">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 text-blue-500">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 font-agrandir-heavy">{benefit.title}</h3>
                <p className="text-xs text-gray-500 mt-1 font-agrandir">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

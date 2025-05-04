'use client'; // Add 'use client' if ServiceCard uses client-side hooks or event handlers

import ServiceCard from './Servicecard'; // Assuming Servicecard.tsx is in the same directory

// Define the structure of a service object for better type safety
interface Service {
    title: string;
    description: string;
    iconPlaceholder: string;
}

const ServiceCardContainer = () => {
    const services: Service[] = [
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
            iconPlaceholder: "<📱>", // Note: Ensure your font supports these characters or use icons
        },
        {
            title: "Blockchain Dev",
            description:
                "Not just crypto talk. We build chains that actually do things. Decentralized? Yes. Confusing? Never.",
            iconPlaceholder: "⛓️", // Note: Ensure your font supports these characters or use icons
        },
        {
            title: "Code Outsource",
            description:
                "Outsource to us — your code gets done, your team gets sleep, your boss gets wowed.",
            iconPlaceholder: "⚙️", // Note: Ensure your font supports these characters or use icons
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
            iconPlaceholder: "🤖", // Note: Ensure your font supports these characters or use icons
        },
    ];

    return (
        // Container div for the services section
        <div>
            {/* Section Title */}
            <h3 className="text-2xl font-semibold text-blue-700 text-center mb-8 font-neue">
                Services That We Offer
            </h3>

            {/* Grid layout for service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through the services array to render each ServiceCard */}
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

// Export the component as the default export
export default ServiceCardContainer;
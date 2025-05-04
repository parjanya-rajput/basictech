'use client'; // This component uses an <a> tag for navigation, which is fine in server components too, but 'use client' is safe if you add interactivity later.

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "919173497162";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
            aria-label="Chat on WhatsApp" // Accessibility label
        >
            <FaWhatsapp size={40} />
        </a>
    );
};

export default WhatsAppButton;
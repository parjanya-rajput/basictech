'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import ContactImage from '../assets/Contact.png';

const ContactUs = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit(); // submits to Google Form
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className='relative max-w-5xl mx-auto z-10 py-10'>
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 font-neue">Connect with us</h2>

      <div className="bg-white/80 rounded-lg shadow-md p-6 md:p-8 mb-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex justify-center">
              <Image src={ContactImage} alt="Contact illustration" className="max-w-full h-auto" />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8">
            <iframe name="hiddenFrame" style={{ display: "none" }}></iframe>
            <form
              target="hiddenFrame"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfX9B7G9FbEta72nTyhK3B8aBON_REhfHw_Y0VEmP0hVDn5AQ/formResponse"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="entry.369276310"
                    value={formData["entry.369276310"] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="entry.17229440"
                    value={formData["entry.17229440"] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="entry.1335922925"
                    value={formData["entry.1335922925"] || ''}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">Message</label>
                <textarea
                  id="message"
                  name="entry.1223925742"
                  value={formData["entry.1223925742"] || ''}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

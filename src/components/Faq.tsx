'use client';

import React from "react";
// import { useState } from "react";

const FaqItems = [
  {
    id: 1,
    question: "How fast Can I expect a 5-6 pager website ready from design to production?",
    answer: "A week is more than enough for us"
  },
  {
    id: 2,
    question: "Do we provide extensive Maintainance and real time support?",
    answer: "Yes we provide extensive backend support and that too real time for our higher valued clients"
  },
  {
    id: 3,
    question: "I have tight deadline commitment, for building my applications?",
    answer: "We have extensive team, we don't mind putting in more workforce to meet overwhelming deadlines"
  },
  {
    id: 4,
    question: "How we will be different from our competitor?",
    answer: "All of our engineers 10x engineers and they will be leveraging AI to deliver the same quality cheaply to you , so you will be getting better product faster and cheaper than anywhere else"
  },
  {
    id: 5,
    question: "Can you help me scope out my project?",
    answer: "Absolutely. We often start with a free consultation to understand your vision, define requirements, and suggest a tech roadmap. We’re happy to help even if you’re still at the idea stage."
  },
  {
    id: 6,
    question: "How does pricing work?",
    answer: "We offer flexible pricing models based on your needs: Fixed-price for well-defined projects \n Monthly retainers for ongoing work \n Hourly rates for short-term consulting \n We’ll work with you to find a model that fits your budget and goals."
  },
  {
    id: 7,
    question: "Do you work with early-stage startups?",
    answer: "Yes! We love working with early-stage startups—especially those who need to go from idea to MVP quickly without compromising on engineering quality"
  }
];

export default function Faq() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 font-neue">
        Frequently Asked Questions
      </h2>

      <div className="bg-gray-50 rounded-lg overflow-hidden mb-10">
        {FaqItems.map((item) => (
          <details
            key={item.id}
            className="group border border-gray-200 rounded-lg mb-2 transition-all duration-300 ease-in-out hover:bg-gray-50"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-green-50 to-yellow-100 transition-all duration-300 ease-in-out hover:from-green-100 hover:to-yellow-200">
              <span className="text-sm font-medium text-green-800 transition-colors duration-300 group-hover:text-green-900 font-ibm">
                {item.question}
              </span>
              <span className="text-green-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="p-4 bg-white/80 shadow-lg transition-all duration-300 ease-in-out">
              <p className="text-sm text-gray-600 transform transition-opacity duration-300 opacity-100">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

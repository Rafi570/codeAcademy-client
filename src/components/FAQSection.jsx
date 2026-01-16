"use client";
import { useState } from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What is CodeAcademy?",
      answer:
        "CodeAcademy is an online learning platform where you can learn programming and modern technologies with real-world projects.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "No. Our courses are beginner-friendly. You can start from zero and grow step by step.",
    },
    {
      question: "Are the courses online or offline?",
      answer:
        "All courses are online, so you can learn anytime and from anywhere.",
    },
    {
      question: "Will I get a certificate after completion?",
      answer:
        "Yes, you will receive a certificate after successfully completing a course.",
    },
    {
      question: "Do you provide job or career support?",
      answer:
        "Yes, we provide career guidance, interview preparation, and job placement support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl font-bold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="text-gray-600 mt-3 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

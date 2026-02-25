"use client";

import { useState } from "react";

export default function FAQAccordionClient({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(-1);

  return (
    <div className="mt-10 space-y-4">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white">
          <button
            onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
            type="button"
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <span className="text-2xl text-gray-500">{activeFaq === index ? "−" : "+"}</span>
          </button>
          {activeFaq === index && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

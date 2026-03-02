"use client"

import Image from "next/image"

export default function WhyChooseUs() {
  const points = [
    {
      title: "Profit Over Vanity Metrics",
      text: "We focus on revenue, margins, CAC, ROAS, and LTV — not impressions or clicks.",
      bg: "bg-white",
      textColor: "text-gray-800",
      descColor: "text-gray-600",
      position: "left-0 top-10",
    },
    {
      title: "Clear Data. Clear Decisions.",
      text: "Every strategy is backed by real performance data and structured testing.",
      bg: "bg-purple-600 ",
      textColor: "text-white",
      descColor: "text-purple-100",
      position: "right-0 top-16",
    },
    {
      title: "Systems, Not Campaigns",
      text: "We fix funnels, retention, and tracking — not just ad performance.",
      bg: "bg-purple-600",
      textColor: "text-white",
      descColor: "text-purple-100",
      position: "left-10 bottom-10",
    },
    {
      title: "Strategy First. Then Scale.",
      text: "We build a solid foundation before increasing spend.",
      bg: "bg-white",
      textColor: "text-gray-800",
      descColor: "text-gray-600",
      position: "right-10 bottom-10",
    },
    // {
    //   title: "Transparent Partnership",
    //   text: "Clear reporting. Honest communication. No hidden tactics.",
    //   bg: "bg-white",
    //   textColor: "text-gray-800",
    //   descColor: "text-gray-600",
    //   position: "left-1/2 -translate-x-1/2 -bottom-24",
    // },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-10 ">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl tracking-tight">
            WHY CHOOSE US?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-purple-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We don’t just run ads — we build profitable growth systems.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative mt-10 flex justify-center">

          <div
            className="relative w-full h-[600px] max-w-3xl rounded-2xl bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: "url('/about2.jpg')",
            }}
          >
            {/* Overlay for slight darkening */}
            <div className="absolute inset-0 rounded-2xl bg-black/20"></div>

            {/* Spacer to maintain height */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/4]"></div>
          </div>

          {/* Floating Boxes (Desktop Only) */}
          <div className="hidden lg:block">
            {points.map((point, index) => (
              <div
                key={index}
                className={`absolute w-72 border border-gray-300 rounded-2xl p-6 shadow-xl ${point.bg} ${point.position}`}
              >
                <h3 className={`text-lg font-semibold ${point.textColor}`}>
                  {point.title}
                </h3>
                <p className={`mt-2 text-sm ${point.descColor}`}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="mt-16 space-y-6 lg:hidden">
          {points.map((point, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg ${point.bg}`}
            >
              <h3 className={`text-lg font-semibold ${point.textColor}`}>
                {point.title}
              </h3>
              <p className={`mt-2 text-sm ${point.descColor}`}>
                {point.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
"use client";

import Image from "next/image";

const features = [
  {
    title: "Custom WordPress Development",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
  {
    title: "Responsive Design for all Device",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
  {
    title: "Speed Optimization",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
  {
    title: "Secure And Scalable Website",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
  {
    title: "Seamless E-commerce Integration",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
  {
    title: "Customizable Solution",
    desc: "Create stunning, professional-quality websites in record time with our powerful UI kit. Elevate your SAAS game today!",
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#070816] text-white py-24 overflow-hidden">
      <div className=" mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            Benefits
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold leading-tight mb-16">
          Delivering Excellence: Features & Benefits <br />
          That Drive Success
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-40 blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-sm">⬢</span>
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-32">

          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              Our Projects
            </span>
          </div>

          <h3 className="text-center text-3xl md:text-4xl font-semibold mb-14">
            Check out our latest complete <br />
            Project
          </h3>

          {/* Projects Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition duration-300"
              >
                <Image
                  src={`/projects/project${item}.jpg`}
                  alt="project"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-20">
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
          </div>

        </div>
      </div>
    </section>
  );
}

import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"
import { FaWhatsapp } from "react-icons/fa"

export const metadata = buildMetadata({
  title: "Performance Marketing Services",
  description:
    "Scale profitably with TubeHelper performance marketing services across Meta, Google, and YouTube.",
  path: "/services/performance_marketing",
  keywords: ["performance marketing services", "meta ads agency", "google ads ecommerce"],
})

const trustPoints = [
  "Data-first paid media strategy",
  "Full-funnel campaign architecture (TOF/MOF/BOF)",
  "Advanced tracking & attribution",
  "Structured creative testing",
  "Profit-focused scaling models",
]

const services = [
  {
    title: "Meta & Instagram Advertising for Structured Scale",
    image: "/instagramAds.jpg",
    description:"We build full-funnel Meta systems designed to attract, convert, and retain high-value customers.",
     points: [
      "TOF / MOF / BOF campaign structure",
      "Ongoing creative testing",
      "Audience segmentation & scaling",
      "Retargeting systems",
      "Conversion tracking integration",
    ],
  },
  {
    title: "Google Ads Management (Search & Shopping)",
    image: "/googleAds.jpg",
    description:"Capture high-intent demand with structured bidding, clean data, and optimized product feeds.",
        points: [
      "Search & Shopping campaign structure",
      "Performance Max strategy",
      "Product feed optimization",
      "Keyword segmentation",
      "Landing page alignment",
    ],
  },
  {
    title: "YouTube Advertising for Demand Generation",
    image: "/youtubeAds.jpg",
    description:"Build video acquisition systems that move users from awareness to purchase.",
    points: [
      "Structured video funnel strategy",
      "Targeting & retargeting systems",
      "Conversion-focused campaigns",
      "Creative testing frameworks",
      "YouTube remarketing",
    ],
  },
]

const frameworkSteps = [
  {
    title: "Audit & Strategy",
    description: "We analyze funnels, creatives, tracking accuracy, CAC, and profitability gaps.",
  },
  {
    title: "Funnel Architecture",
    description: "We build structured systems across Meta, Google, and YouTube.",
  },
  {
    title: "Creative Testing & Validation",
    description: "We test messaging and creative angles to identify scalable winners.",
  },
  {
    title: "Controlled Scaling",
    description: "We increase ad spend only on validated segments while maintaining strong ROAS.",
  },
]

const results = [
  "Higher ROAS",
  "Lower CAC",
  "Improved conversion rates",
  "Increased lifetime value",
  "* Stable, sustainable scaling",
]

const faqs = [
  {
    question: "What is performance marketing?",
    answer:"Performance marketing is structured paid acquisition focused on measurable revenue outcomes — not impressions or vanity metrics."
  },
  {
    question: "How long does it take to see results?",
    answer:"Initial performance signals appear within weeks. Stable, scalable growth typically takes 60–90 days of structured testing and optimization."  },
  {
    question: "Which platform is best, Meta or Google?",
    answer:
"It depends on your product, margins, and audience intent. We build cross-channel systems aligned with your unit economics."  },
  {
    question: "Do you provide tracking setup?",
    answer:
"Yes. Accurate tracking and attribution are foundational to our approach."  },
]

export default function PerformanceMarketingPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#dff3ef] pb-14  md:rounded-b-[80px] md:pb-20 pt-32">
        <div className=" grid w-full grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl mx-auto max-w-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Performance Marketing Services That Drive Profitable Scale
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-700 sm:text-lg lg:mx-0">
              We don&apos;t just run ads. We build structured acquisition systems designed to increase revenue while protecting margins.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                              href="https://wa.me/919897165137"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex w-full items-center font-medium justify-center gap-2 rounded-full shadow-md border border-gray-200 bg-white px-6 py-3 text-sm backdrop-blur-md transition hover:bg-black hover:text-white sm:w-auto sm:text-base"
                            >
                              <FaWhatsapp className="text-2xl" />
                              Chat Now
                            </a>
              
                            <a
                              href="tel:+919897165137"
                              className="flex w-full items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-lg transition hover:opacity-90 sm:w-auto sm:text-base"
                            >
                              Book Your Free Strategy Call
                              <MoveUpRight className="h-4 w-4" />
                            </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl">
            <Image
              src="/performance_marketing.jpg"
              alt="Performance marketing hero visual"
              width={900}
              height={650}
              className="w-full rounded-[60px] md:rounded-[90px] lg:rounded-[120px] border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto mx-auto max-w-7xl  grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="/performance2.jpg"
              alt="Performance dashboard"
              width={860}
              height={620}
              className="w-full rounded-3xl border border-gray-200 object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              TRUSTED PERFORMANCE MARKETING FOR SCALING ECOMMERCE BRANDS
            </h2>
            <p className="mt-5 text-gray-700">
We help established ecommerce and D2C brands scale profitably through structured paid acquisition, full-funnel optimization, and accurate tracking.            </p>
            <p className="mt-3 text-gray-700">
Our focus isn’t just traffic.
It’s predictable, measurable revenue growth.            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
               <a href="tel:+919897165137"><button className="rounded-lg cursor-pointer bg-black px-5 py-3 text-sm font-medium text-white">
                Get Free Strategy Call
              </button></a>
               <a href="/how_it_works"><button className="rounded-lg border cursor-pointer border-gray-300 px-5 py-3 text-sm font-medium text-gray-800">
                View Case Studies
              </button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto mx-auto max-w-7xl ">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            OUR PERFORMANCE MARKETING SERVICES
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={720}
                  height={420}
                  className="mb-5 w-full rounded-xl object-cover"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
        OUR 4-STEP PERFORMANCE MARKETING FRAMEWORK
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {frameworkSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-gray-200 p-5">
              
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {results.map((result) => (
              <div key={result} className="rounded-xl bg-gray-50  py-2 text-center text-sm  text-gray-800">
                {result}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#dff3ef] via-white to-[#eaf9f5] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            READY TO SCALE PROFITABLY?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            If you&apos;re serious about structured acquisition systems that drive predictable revenue, let&apos;s build your growth infrastructure.
          </p>
         <a href="https://wa.me/919897165137"
           target="_blank"
           rel="noopener noreferrer"><button className="mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Book Your Free Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button></a> 
        </div>
      </section>
    </main>
  )
}

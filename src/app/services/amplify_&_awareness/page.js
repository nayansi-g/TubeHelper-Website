import Image from "next/image"
import { MoveUpRight, PhoneIncoming } from "lucide-react"
import FAQAccordionClient from "@/components/FAQAccordionClient"
import { buildMetadata } from "@/lib/seo"
import { FaWhatsapp } from "react-icons/fa"

export const metadata = buildMetadata({
  title: "Brand Awareness and Reach Services",
  description:
    "Expand brand visibility across channels with strategic awareness campaigns aligned to measurable growth.",
  path: "/services/amplify_&_awareness",
  keywords: ["brand awareness services", "multi-channel marketing", "audience expansion strategy"],
})

const expansionPoints = [
  "Audience research & segmentation",
  "Market positioning analysis",
  "Competitive visibility analysis",
  "Lookalike & interest expansion",
  "Multi-platform targeting strategy",
]

const multiChanelPoints =[
  "Meta (Facebook & Instagram)",
  "Google Display Network",
  "YouTube",
  "Short-form video platforms",
  "Programmatic display"
]

const strategyPoints = [
" Communicate your value proposition quickly",
"Strengthen brand identity",
"Improve engagement and recall",
"Support acquisition campaigns"
]

const revenuePoints=[
  "Retargeting systems",
  "Conversion-focused landing pages",
  "CRM tracking and attribution",
  "Performance marketing campaigns"
]

const frameworkSteps = [
  {
    title: "Step 1: Brand Positioning & Audience Research",
    description: "We define your positioning and identify high-potential audience segments.",
  },
  {
    title: "Step 2: Creative & Messaging Development",
    description: "We develop attention-driven campaign concepts aligned with brand strategy.",
  },
  {
    title: "Step 3: Multi-Channel Distribution",
    description: "We deploy awareness campaigns across strategic platforms.",
  },
  {
    title: "Step 4: Optimization & Scaling",
    description:
      "We analyze engagement and performance data to scale effective campaigns.",
  },
]

const results = [
  "Expanded audience reach",
  "Increased engagement",
  "Stronger brand recall",
  "Lower long-term customer acquisition costs",
  "Increased trust and credibility",
  "Sustainable growth foundation",
]

const audience = [
  "Ecommerce brands scaling acquisition",
  "D2C brands entering competitive markets",
  "Startups launching new products",
  "Established brands expanding market share",
  "Companies preparing to scale performance marketing",
]

const trustPoints = [
 { title:"Data-Driven Audience Targeting",
  desc:"We identify audiences with the highest growth potential."},
  { title:"Multi-Channel Campaign Execution",
   desc:"Consistent visibility across major platforms."},
 { title: "Strategic Creative Positioning",
   desc:"Messaging designed to capture attention and reinforce brand value."},
 { title: "Alignment with Performance Marketing",
   desc:"Awareness campaigns support acquisition and revenue growth."},
 {  title:"Measurable Visibility Metrics",
   desc:"Clear reporting on reach, engagement, and audience expansion."}
]

const faqs = [
  {
    question: "What is brand awareness marketing?",
    answer:
"Brand awareness marketing focuses on increasing visibility and familiarity with your brand among relevant audiences before they reach purchase intent."  },
  {
    question: "Does brand awareness generate revenue?",
    answer:
"Yes. Strong brand visibility improves trust, lowers acquisition costs, and increases the effectiveness of performance marketing campaigns."  },
  {
    question: "How do you measure brand awareness?",
    answer:
"We measure reach, engagement, brand recall signals, audience growth, and how awareness campaigns influence downstream conversions."  },
  {
    question: "Is brand awareness only for large companies?",
    answer:
"No. Growing brands often benefit the most because awareness helps reduce long-term customer acquisition costs."  },
]

export default function AmplifyBrandAwarenessPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="rounded-b-[50px] bg-[#6C2277] pb-14  md:rounded-b-[80px] md:pb-20 pt-32">
        <div className="mx-auto grid w-full grid-cols-1 mx-auto  items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-gray-100 font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Amplify Brand Visibility & Expand Market Reach
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 sm:text-lg lg:mx-0">
We help ecommerce and D2C brands increase visibility, expand audience reach, and turn brand attention into measurable revenue growth.
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
              src="/AmplifiHero.jpg"
              alt="Brand awareness hero visual"
              width={900}
              height={650}
              className="w-full rounded-l-[60px] md:rounded-l-[90px] lg:rounded-l-[120px] border border-white/70 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Attention Is the New Competitive Advantage
          </h2>
          <p className="mt-6 text-gray-700">
            In today&apos;s market, brands that capture attention early win long term.
          </p>
          <p className="mt-6 text-gray-700">Without strong brand visibility:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 px-4 py-3">Customer acquisition becomes more expensive</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Trust takes longer to build</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Conversion rates remain lower</div>
            <div className="rounded-xl border border-gray-200 px-4 py-3">Competitors dominate audience attention</div>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-900">
We design structured brand visibility strategies that increase reach, engagement, and long-term brand recall while supporting profitable growth.          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            What Brand Amplification Really Means
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-gray-700">
            Brand awareness isn&apos;t just impressions. It&apos;s strategic visibility that positions your brand in front of the right audience before purchase intent forms.
          </p>
          <p className="mt-6 text-gray-700">Our approach focuses on:</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Expanding qualified audience reach</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Strengthening brand recall</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Increasing engagement with your brand</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">Supporting acquisition and conversion campaigns</div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 sm:col-span-2 lg:col-span-1">
              Aligning visibility with revenue growth
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-gray-700">
We combine strategy, creative positioning, and multi-channel distribution so your brand stays visible where your customers spend attention.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className=" mx-auto max-w-7xl ">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
           Our Brand Awareness & Reach Services
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Audience Expansion Strategy
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
Data-Driven Audience Expansion              </h3>
              <p className="mt-5 text-gray-300">
We identify high-potential audience segments and expand your reach using structured targeting and platform insights.
              </p>
              <p className="mt-3 text-gray-300">
The goal is not just more reach — but relevant reach aligned with your brand positioning.
              </p>
              <p className="mt-6 font-medium text-white">What We Do:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {expansionPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Amplify1.jpg"
                alt="Audience expansion visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Amplify2.jpg"
                alt="Multi-channel visibility visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Multi-Channel Brand Visibility
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
Coordinated Awareness Campaigns Across Platforms
              </h3>
              <p className="mt-5 text-gray-300">
Strong brand visibility requires consistent messaging across multiple platforms.
              </p>
              <p className="mt-6 font-medium text-white">We deploy coordinated campaigns across:</p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {multiChanelPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-5 text-gray-300">
Our campaigns prioritize reach, engagement, and audience expansion while maintaining message consistency.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Creative Strategy & Messaging Alignment
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Creative Built for Attention and Recall
              </h3>
              <p className="mt-5 text-gray-300">
Creative plays a critical role in capturing attention and reinforcing brand positioning.
              </p>
              <p className="mt-3 text-gray-300">
We design creative strategies that:              </p>

<ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {strategyPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-3 text-gray-300">
All messaging is aligned with long-term growth and performance marketing objectives.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/Amplify3.jpg"
                alt="Creative strategy visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/Amplify4.jpg"
                alt="Awareness to conversion alignment visual"
                width={860}
                height={620}
                className="w-full rounded-3xl border border-white/15 object-cover shadow-xl"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                Awareness to Conversion Alignment
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Turning Visibility into Revenue
              </h3>
              <p className="mt-5 text-gray-300">
Brand awareness campaigns must support downstream conversion.
              </p>
              <p className="mt-3 text-gray-300">
We integrate awareness strategies with:
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {revenuePoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <p className="mt-3 text-gray-300">
This ensures brand visibility contributes directly to measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid items-center gap-10">
          <div>
            <h2 className="text-3xl font-semibold  text-center sm:text-4xl">
              Our 4-Step Brand Amplification Framework
            </h2>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
              {frameworkSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 p-5">
                  {/* <p className="text-sm font-semibold text-gray-500">0{index + 1}</p> */}
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            What Strong Brand Visibility Delivers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-700">
Strategic visibility strengthens every other marketing channel.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Who Benefits From Brand Amplification
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-200 px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
           Why Brands Trust TubeHelper for Brand Visibility
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-gray-100">
                {item.title}
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-gray-200">We don&apos;t run generic awareness campaigns. We build structured visibility systems that support scalable growth.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Brand Awareness FAQs
          </h2>
          <FAQAccordionClient faqs={faqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#eef6ff] via-white to-[#f0f7ff] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Expand Your Brand’s Reach?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-700">
            Let&apos;s build a structured visibility strategy that strengthens your market presence and supports measurable growth.
          </p>
         <a href="tel:+919897165137"> <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
            Book Your Brand Amplification Strategy Call
            <MoveUpRight className="h-4 w-4" />
          </button></a>
        </div>
      </section>
    </main>
  )
}

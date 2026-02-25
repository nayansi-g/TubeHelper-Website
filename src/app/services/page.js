import PerformanceMarketingPage from "./performance_marketing/page"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Digital Marketing Services",
  description:
    "Explore TubeHelper services including performance marketing, ecommerce growth, SEO, analytics, and brand awareness.",
  path: "/services",
  keywords: ["digital marketing services", "ecommerce marketing services"],
})

export default function ServicesPage() {
  return (
   <PerformanceMarketingPage />
  )
}

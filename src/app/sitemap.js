import blogData from "../../Blog.json";
import { siteConfig } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/about_us",
  "/blog",
  "/contact",
  "/e-commerce_tips",
  "/faq",
  "/free_resources",
  "/guides",
  "/how_it_works",
  "/privacy_policy",
  "/refund_policy",
  "/reviews",
  "/support",
  "/terms_of_use",
  "/services",
  "/services/performance_marketing",
  "/services/e-commerce_growth",
  "/services/organic_growth",
  "/services/analytics_&_automation",
  "/services/amplify_&_awareness",
];

export default function sitemap() {
  const now = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const blogPages = (blogData.blogs || []).map((blog) => ({
    url: `${siteConfig.url}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: blog.featured ? 0.8 : 0.6,
  }));

  return [...pages, ...blogPages];
}

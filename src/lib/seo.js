const SITE_URL = "https://tubehelper.in";

export const defaultKeywords = [
  "TubeHelper",
  "digital marketing agency",
  "performance marketing",
  "ecommerce growth",
  "shopify marketing",
  "conversion rate optimization",
  "SEO services",
  "GA4 tracking",
  "marketing automation",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.jpg",
}) {
  const url = `${SITE_URL}${path}`;
  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "TubeHelper",
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const siteConfig = {
  name: "TubeHelper",
  url: SITE_URL,
  email: "contact@tubehelper.in",
  phone: "+91 9897165137",
};

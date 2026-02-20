import Link from "next/link"

const blogs = [
  {
    id: 1,
    slug: "mastering-javascript-2026",
    title: "Mastering JavaScript in 2026",
    excerpt: "Learn modern JavaScript concepts like closures, promises, async/await and ES6+ features.",
    category: "JavaScript",
    date: "Feb 10, 2026",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "react-best-practices",
    title: "React Best Practices for Clean Code",
    excerpt: "Write scalable and clean React applications using best folder structure and hooks pattern.",
    category: "ReactJS",
    date: "Feb 05, 2026",
    readTime: "6 min read"
  },
  {
    id: 3,
    slug: "nextjs-seo-guide",
    title: "Next.js SEO Complete Guide",
    excerpt: "Learn how to optimize your Next.js website for better search engine rankings.",
    category: "NextJS",
    date: "Jan 28, 2026",
    readTime: "4 min read"
  },
  {
    id: 4,
    slug: "nodejs-backend-architecture",
    title: "Node.js Backend Architecture",
    excerpt: "Design scalable backend systems using Node.js and Express.",
    category: "NodeJS",
    date: "Jan 20, 2026",
    readTime: "7 min read"
  },
  {
    id: 5,
    slug: "mongodb-performance-tips",
    title: "MongoDB Performance Optimization",
    excerpt: "Improve your MongoDB queries and indexing strategy.",
    category: "Database",
    date: "Jan 15, 2026",
    readTime: "5 min read"
  },
  {
    id: 6,
    slug: "fullstack-roadmap-2026",
    title: "Full Stack Developer Roadmap 2026",
    excerpt: "Step-by-step roadmap to become a MERN stack developer.",
    category: "Career",
    date: "Jan 05, 2026",
    readTime: "8 min read"
  },
  {
    id: 7,
    slug: "deploy-nextjs-vercel",
    title: "Deploy Next.js App on Vercel",
    excerpt: "Learn how to deploy your Next.js project in minutes.",
    category: "Deployment",
    date: "Dec 28, 2025",
    readTime: "3 min read"
  },
  {
    id: 8,
    slug: "ai-in-web-development",
    title: "AI in Modern Web Development",
    excerpt: "How AI is transforming frontend and backend development.",
    category: "AI",
    date: "Dec 15, 2025",
    readTime: "6 min read"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#080B1A] text-white px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Our Latest Blogs
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay updated with modern web development trends and tutorials.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:scale-105 transition duration-300"
          >
            <div className="text-sm text-purple-400 mb-2">
              {blog.category}
            </div>

            <h2 className="text-xl font-semibold mb-3">
              {blog.title}
            </h2>

            <p className="text-gray-400 mb-4 text-sm">
              {blog.excerpt}
            </p>

            <div className="flex justify-between text-xs text-gray-500 mb-6">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>

            <Link href={`/blogs/${blog.slug}`}>
              <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
                Read Article
              </button>
            </Link>
          </div>
        ))}

      </div>
    </main>
  )
}

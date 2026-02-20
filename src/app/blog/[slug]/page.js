import Link from "next/link"

const blogContent = {
  "mastering-javascript-2026": {
    title: "Mastering JavaScript in 2026",
    content: `
      JavaScript remains the most powerful language in web development.

      Topics you must master:
      - Closures
      - Async/Await
      - Promises
      - ES6+ Features

      Practice daily and build real projects.
    `
  },

  "react-best-practices": {
    title: "React Best Practices for Clean Code",
    content: `
      Use reusable components.
      Maintain proper folder structure.
      Use custom hooks.
      Keep state minimal.
    `
  }
}

export default function BlogDetails({ params }) {
  const blog = blogContent[params.slug]

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#080B1A] text-white flex items-center justify-center">
        <div>
          <h1 className="text-3xl mb-4">Blog Not Found</h1>
          <Link href="/blogs">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500">
              Go Back
            </button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#080B1A] text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <Link href="/blogs">
          <button className="mb-8 text-purple-400 hover:underline">
            ← Back to Blogs
          </button>
        </Link>

        <h1 className="text-4xl font-semibold mb-8">
          {blog.title}
        </h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 leading-8 whitespace-pre-line text-gray-300">
          {blog.content}
        </div>

      </div>
    </main>
  )
}

import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Markdown Resume Builder</h1>
      <p className="mb-6 max-w-xl text-center text-lg">
        Create professional resumes with Markdown and export them as PDFs instantly.
      </p>
      <Link
        href="/editor"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
      >
        Get Started
      </Link>

      <section className="mt-16 flex space-x-6">
        <img
          alt="Next.js"
          src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white"
          className="h-10"
        />
        <img
          alt="React"
          src="https://img.shields.io/badge/React-blue?logo=react&logoColor=white"
          className="h-10"
        />
        <img
          alt="Tailwind CSS"
          src="https://img.shields.io/badge/Tailwind_CSS-teal?logo=tailwind-css&logoColor=white"
          className="h-10"
        />
        <img
          alt="TypeScript"
          src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white"
          className="h-10"
        />
      </section>
    </main>
  )
}

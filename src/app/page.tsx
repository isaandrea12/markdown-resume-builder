"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <header className="pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-hero mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Resume Builder
          </h1>
          <p className="text-lead mb-8 max-w-3xl mx-auto">
            Create ATS-optimized resumes that get you noticed. Trusted by
            thousands of corporate professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/editor">
              <button className="btn btn-primary btn-lg">
                Start Building Your Resume
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Why Use Our Builder Section */}
      <section id="features" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ResumeBuilder Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for corporate professionals who need to create
              compelling resumes that pass through ATS systems and impress
              hiring managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body items-center text-center m-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-2">
                  ATS-Optimized Design
                </h3>
                <p className="text-gray-600">
                  Minimalist design specifically crafted for corporate
                  professionals. Clean formatting that passes through Applicant
                  Tracking Systems.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body items-center text-center m-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-2">
                  One-Click PDF Export
                </h3>
                <p className="text-gray-600">
                  Export high-quality PDFs with perfect formatting. No more
                  wrestling with Word documents or dealing with broken layouts.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body items-center text-center m-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-2">
                  Privacy & Performance
                </h3>
                <p className="text-gray-600">
                  Built with privacy in mind - your data never leaves your
                  browser. Lightning-fast performance for a seamless editing
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Designed for Corporate Success
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Markdown Simplicity
                    </h3>
                    <p className="text-gray-600">
                      Focus on content, not formatting. Write your resume in
                      simple, clean markdown.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Real-time Preview
                    </h3>
                    <p className="text-gray-600">
                      See exactly how your resume will look as you type with
                      live preview.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Professional Templates
                    </h3>
                    <p className="text-gray-600">
                      Start with proven templates used by successful
                      professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-900 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-400 rounded"></div>
                    <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-400 rounded w-4/6"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Professional Resume?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who've landed their dream jobs with
            our resume builder.
          </p>
          <Link href="/editor">
            <button className="btn btn-secondary btn-lg">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

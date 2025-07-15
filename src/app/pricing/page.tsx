"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build unlimited resumes for free. Pay only when you export to PDF.
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Free Plan */}
            <div className="card bg-white shadow-lg border-2 border-gray-200">
              <div className="card-body text-center p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Free</h2>
                <div className="text-5xl font-bold text-gray-900 mb-4">
                  $0
                  <span className="text-lg font-normal text-gray-500">
                    /forever
                  </span>
                </div>
                <p className="text-gray-600 mb-8">
                  Perfect for getting started and creating your professional
                  resume
                </p>

                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      Unlimited resume building
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      Real-time markdown preview
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      ATS-optimized templates
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      Privacy-focused (local storage)
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">Professional styling</span>
                  </li>
                </ul>

                <Link href="/editor">
                  <button className="btn btn-secondary btn-lg w-full">
                    Get Started Free
                  </button>
                </Link>
              </div>
            </div>

            {/* Pay-per-Export */}
            <div className="card bg-white shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="card-body text-center p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  PDF Export
                </h2>
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  $4
                  <span className="text-lg font-normal text-gray-500">
                    /export
                  </span>
                </div>
                <p className="text-gray-600 mb-8">
                  Pay only when you need a professional PDF of your resume
                </p>

                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
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
                    <span className="text-gray-700">Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      <strong>High-quality PDF export</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      <strong>Perfect formatting</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      <strong>Optimized for printing</strong>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
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
                    <span className="text-gray-700">
                      <strong>Ready for job applications</strong>
                    </span>
                  </li>
                </ul>

                <Link href="/editor">
                  <button className="btn btn-primary btn-lg w-full">
                    Start Building & Export When Ready
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Our Pricing Makes Sense
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Subscription
              </h3>
              <p className="text-gray-600">
                Pay only when you need it. No monthly fees, no recurring
                charges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Access
              </h3>
              <p className="text-gray-600">
                Start building immediately. Export when your resume is perfect.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Quality
              </h3>
              <p className="text-gray-600">
                Every $4 gets you a perfectly formatted, ATS-ready PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="card bg-white">
              <div className="card-body m-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I build multiple resumes for free?
                </h3>
                <p className="text-gray-600">
                  Yes! You can create and edit unlimited resumes for free. You
                  only pay when you want to export a resume as a PDF.
                </p>
              </div>
            </div>
            <div className="card bg-white">
              <div className="card-body m-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Your resume data is stored locally in your browser
                  and never sent to our servers unless you choose to export to
                  PDF.
                </p>
              </div>
            </div>
            <div className="card bg-white">
              <div className="card-body m-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards through our secure Stripe
                  integration. Payment is processed only when you export to PDF.
                </p>
              </div>
            </div>
            <div className="card bg-white">
              <div className="card-body m-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I export the same resume multiple times?
                </h3>
                <p className="text-gray-600">
                  Each export is $4. If you need to make changes and export
                  again, you'll need to pay for each new export.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start for free and export when you're ready to apply for your dream
            job.
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

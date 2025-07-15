"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GetAppIcon from "@mui/icons-material/GetApp";
import SecurityIcon from "@mui/icons-material/Security";
import CheckIcon from "@mui/icons-material/Check";

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
              <div className="card-body text-center px-6 py-8">
                {/* Wrapper div to center icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircleIcon sx={{ fontSize: 32, color: "white" }} />
                  </div>
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
              <div className="card-body text-center px-6 py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <GetAppIcon sx={{ fontSize: 32, color: "white" }} />
                  </div>
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
              <div className="card-body text-center px-6 py-8">
                {/* Centered Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <SecurityIcon sx={{ fontSize: 32, color: "white" }} />
                  </div>
                </div>
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-2">
                  Privacy & Performance
                </h3>
                <p className="text-gray-600">
                  Built with privacy in mind – your data never leaves your
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
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
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
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
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
                    <CheckIcon sx={{ fontSize: 16, color: "white" }} />
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

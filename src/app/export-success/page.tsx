'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import html2pdf from 'html2pdf.js'

export default function ExportSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isGenerating, setIsGenerating] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (sessionId) {
      verifyPaymentAndExport()
    }
  }, [sessionId])

  const verifyPaymentAndExport = async () => {
    try {
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })

      const result = await response.json()

      if (result.success && result.resumeData) {
        await generatePDF(result.resumeData)
      } else {
        setError('Payment verification failed')
      }
    } catch (error) {
      console.error('Error verifying payment:', error)
      setError('Failed to verify payment')
    } finally {
      setIsGenerating(false)
    }
  }

  const generatePDF = async (resumeData: string) => {
    try {
      // Create a temporary div with the resume content
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = `
        <div style="max-width: 8.5in; margin: 0 auto; padding: 1in; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1f2937;">
          ${resumeData}
        </div>
      `
      tempDiv.style.position = 'absolute'
      tempDiv.style.left = '-9999px'
      document.body.appendChild(tempDiv)

      await html2pdf()
        .from(tempDiv)
        .set({
          margin: 0.5,
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        })
        .save()

      document.body.removeChild(tempDiv)
    } catch (error) {
      console.error('Error generating PDF:', error)
      setError('Failed to generate PDF')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card bg-white shadow-xl">
          <div className="card-body text-center p-8">
            {isGenerating ? (
              <>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your PDF</h2>
                <p className="text-gray-600">
                  Please wait while we process your payment and generate your professional resume PDF...
                </p>
              </>
            ) : error ? (
              <>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Export Failed</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <Link href="/editor">
                  <button className="btn btn-primary">
                    Back to Editor
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
                <p className="text-gray-600 mb-6">
                  Your resume PDF has been generated and downloaded successfully.
                </p>
                <div className="space-y-3">
                  <Link href="/editor">
                    <button className="btn btn-primary w-full">
                      Create Another Resume
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="btn btn-outline w-full">
                      Back to Home
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
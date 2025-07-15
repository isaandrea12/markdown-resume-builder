'use client'

import html2pdf from 'html2pdf.js'

type ExportButtonProps = {
  previewRef: React.RefObject<HTMLDivElement>
}

export default function ExportButton({ previewRef }: ExportButtonProps) {
  const handleExport = () => {
    if (!previewRef.current) return

    html2pdf()
      .from(previewRef.current)
      .set({
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .save()
  }

  return (
    <div className="p-4 border-t flex justify-end">
      <button
        onClick={handleExport}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Export as PDF
      </button>
    </div>
  )
}

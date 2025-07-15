'use client'

import { useState, useRef } from 'react'
import Preview from '@/components/Preview'
import ExportButton from '@/components/ExportButton'

export default function EditorPage() {
  const [markdown, setMarkdown] = useState(`# Jane Smith
Senior Data Analyst  
New York, NY · janesmith@email.com

## Experience
**Acme Corp** – Senior Analyst  
*2019 – Present*  
- Led team of 5 analysts in delivering monthly reporting
- Created dashboards that saved 80+ hours/month

## Education
**B.S. in Statistics**  
University of XYZ, 2016

## Skills
SQL, Python, Excel, Tableau`)

  const previewRef = useRef<HTMLDivElement>(null)

  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1">
        {/* Editor */}
        <textarea
          className="w-1/2 p-4 font-mono border-r resize-none"
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        />

        {/* Preview */}
        <div
          className="w-1/2 p-8 overflow-auto bg-white"
          ref={previewRef}
          id="resume-preview"
        >
          <Preview markdown={markdown} />
        </div>
      </div>

      {/* Export Button */}
      <ExportButton previewRef={previewRef} />
    </main>
  )
}

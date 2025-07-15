"use client";

import { useState, useRef, useCallback } from "react";
import Preview from "@/components/Preview";
import ExportButton from "@/components/ExportButton";
import EditorToolbar from "@/components/EditorToolbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
SQL, Python, Excel, Tableau`);

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMarkdownChange = useCallback((value: string) => {
    setMarkdown(value);
    // Update word count
    const words = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
  }, []);

  const handleInsert = useCallback(
    (text: string) => {
      if (textareaRef.current) {
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue =
          markdown.substring(0, start) + text + markdown.substring(end);

        handleMarkdownChange(newValue);

        // Focus and set cursor position
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(start + text.length, start + text.length);
        }, 0);
      }
    },
    [markdown, handleMarkdownChange]
  );

  const handleLoadTemplate = useCallback(
    (template: string) => {
      handleMarkdownChange(template);
    },
    [handleMarkdownChange]
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Resume Editor
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm text-gray-500">{wordCount} words</span>
            </div>
          </div>

          {/* Mobile View Toggle */}
          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className={`btn btn-sm ${isPreviewMode ? "btn-primary" : "btn-outline"}`}
              >
                {isPreviewMode ? "Edit" : "Preview"}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
              <CheckCircleIcon sx={{ fontSize: 16, color: "green" }} />
              Live Preview
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <EditorToolbar
        onInsert={handleInsert}
        onLoadTemplate={handleLoadTemplate}
      />

      {/* Main Editor Area */}
      <div
        className="flex overflow-hidden"
        style={{ height: "calc(100vh - 200px)" }}
      >
        {/* Editor Panel */}
        <div
          className={`${isPreviewMode ? "hidden" : "flex"} lg:flex lg:w-1/2 flex-col bg-white border-r border-gray-200`}
        >
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              className="w-full h-full py-6 pr-6 pl-16 md:pl-20 font-mono text-sm leading-relaxed resize-none border-none outline-none custom-scrollbar"
              value={markdown}
              onChange={(e) => handleMarkdownChange(e.target.value)}
              placeholder="Start typing your resume in Markdown..."
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: "14px",
                lineHeight: "1.6",
                tabSize: 2,
              }}
            />

            {/* Line Numbers (optional enhancement) */}
            <div className="absolute top-0 left-0 w-12 h-full bg-gray-50 border-r border-gray-200 pointer-events-none hidden md:block">
              <div
                className="py-6 pr-2 text-gray-400 font-mono text-right"
                style={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {markdown.split("\n").map((_, index) => (
                  <div key={index}>{index + 1}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div
          className={`${isPreviewMode ? "flex" : "hidden"} lg:flex lg:w-1/2 flex-col bg-gray-50`}
        >
          <div className="flex-1 overflow-auto custom-scrollbar">
            <div className="p-4">
              <div className="max-w-2xl mx-auto">
                {/* Paper-like preview container */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div
                    className="p-6"
                    ref={previewRef}
                    id="resume-preview"
                    style={{
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      minHeight: "calc(100vh - 300px)",
                    }}
                  >
                    <Preview markdown={markdown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Export Button */}
      <ExportButton previewRef={previewRef} />
    </div>
  );
}

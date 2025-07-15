"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { resumeTemplates } from "@/data/templates";

type EditorToolbarProps = {
  onInsert: (text: string) => void;
  onLoadTemplate: (template: string) => void;
};

export default function EditorToolbar({
  onInsert,
  onLoadTemplate,
}: EditorToolbarProps) {

  const formatButtons = [
    { label: "Bold", syntax: "**text**", icon: "B" },
    { label: "Italic", syntax: "*text*", icon: "I" },
    { label: "Heading", syntax: "## Heading", icon: "H" },
    { label: "Bullet Point", syntax: "- Item", icon: "•" },
  ];

  const quickInserts = [
    {
      label: "Experience Section",
      text: "\n## Experience\n**Company Name** | Job Title  \n*Start Date – End Date*  \n- Achievement or responsibility\n- Achievement or responsibility\n",
    },
    {
      label: "Education Section",
      text: "\n## Education\n**Degree** | University Name, Year\n",
    },
    {
      label: "Skills Section",
      text: "\n## Skills\nSkill 1, Skill 2, Skill 3, Skill 4\n",
    },
    {
      label: "Contact Info",
      text: "City, State · email@example.com · (555) 123-4567\n",
    },
  ];

  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Formatting Buttons */}
        <div className="flex items-center gap-1 border-r border-gray-200 pr-3 mr-1">
          <span className="text-sm font-medium text-gray-700 mr-2 hidden sm:block">
            Format:
          </span>
          {formatButtons.map((button) => (
            <button
              key={button.label}
              onClick={() => onInsert(button.syntax)}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors border border-transparent hover:border-gray-300"
              title={button.label}
            >
              {button.icon}
            </button>
          ))}
        </div>

        {/* Quick Insert Dropdown */}
        <div className="relative border-r border-gray-200 pr-3 mr-1">
          <button
            onClick={() => setIsAddSectionOpen(!isAddSectionOpen)}
            className="btn btn-sm btn-outline gap-1"
          >
            <AddIcon sx={{ fontSize: 20 }} className="mr-1.5" />
            <span className="hidden sm:inline">Add Section</span>
            <span className="sm:hidden">Add</span>
          </button>

          {isAddSectionOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsAddSectionOpen(false)}
              />
              <div className="absolute top-full left-0 mt-1 z-20 bg-white rounded-lg border border-gray-200 shadow-lg w-56">
                <div className="p-2">
                  {quickInserts.map((insert) => (
                    <button
                      key={insert.label}
                      onClick={() => {
                        onInsert(insert.text);
                        setIsAddSectionOpen(false);
                      }}
                      className="text-sm text-left w-full hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                    >
                      {insert.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Templates Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsTemplatesOpen(!isTemplatesOpen)}
            className="btn btn-sm btn-primary gap-1"
          >
            <DescriptionIcon sx={{ fontSize: 20 }} className="mr-1.5" />
            Templates
          </button>

          {isTemplatesOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsTemplatesOpen(false)}
              />
              <div className="absolute top-full left-0 mt-1 z-20 bg-white rounded-lg border border-gray-200 shadow-lg w-60">
                <div className="p-2">
                  {resumeTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => {
                        onLoadTemplate(template.content);
                        setIsTemplatesOpen(false);
                      }}
                      className="text-left w-full hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {template.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {template.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Help Button */}
        <div className="ml-auto relative">
          <button
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="btn btn-sm btn-ghost"
          >
            <HelpOutlineIcon className="w-4 h-4" />
          </button>

          {isHelpOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsHelpOpen(false)}
              />
              <div className="absolute top-full right-0 mt-1 z-20 bg-white rounded-lg border border-gray-200 shadow-lg w-80">
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-3 text-gray-900">
                    Markdown Help
                  </h3>
                  <div className="text-xs space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        **Bold text**
                      </code>
                      <span>→</span>
                      <strong>Bold text</strong>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        *Italic text*
                      </code>
                      <span>→</span>
                      <em>Italic text</em>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        ## Heading
                      </code>
                      <span>→</span>
                      <span className="font-semibold">Large heading</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        - List item
                      </code>
                      <span>→</span>
                      <span>• List item</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

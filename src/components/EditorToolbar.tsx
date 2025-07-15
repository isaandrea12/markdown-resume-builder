"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type EditorToolbarProps = {
  onInsert: (text: string) => void;
  onLoadTemplate: (template: string) => void;
};

export default function EditorToolbar({
  onInsert,
  onLoadTemplate,
}: EditorToolbarProps) {
  const templates = {
    professional: `# John Doe
Senior Software Engineer  
San Francisco, CA · john.doe@email.com · (555) 123-4567 · linkedin.com/in/johndoe

## Summary
Experienced software engineer with 8+ years developing scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact products used by millions of users.

## Experience
**Senior Software Engineer** | Google  
*2020 – Present*  
- Led development of core search features serving 1B+ daily users
- Mentored 5 junior engineers and improved team productivity by 40%
- Architected microservices reducing system latency by 60%

**Software Engineer** | Airbnb  
*2018 – 2020*  
- Built booking platform features processing $10M+ in transactions
- Implemented A/B testing framework used across 20+ product teams
- Reduced page load times by 45% through performance optimizations

## Education
**M.S. Computer Science** | Stanford University, 2018  
**B.S. Computer Science** | UC Berkeley, 2016

## Skills
**Programming:** Python, JavaScript, Go, Java  
**Technologies:** React, Node.js, PostgreSQL, AWS, Docker  
**Leadership:** Team Management, Technical Mentoring, Agile Development`,

    marketing: `# Sarah Johnson
Digital Marketing Manager  
Austin, TX · sarah.johnson@email.com · (555) 987-6543

## Professional Summary
Results-driven marketing professional with 6+ years of experience in digital marketing, brand management, and growth strategy. Proven ability to increase brand awareness and drive revenue growth through data-driven campaigns.

## Experience
**Digital Marketing Manager** | HubSpot  
*2021 – Present*  
- Increased organic traffic by 150% through SEO optimization and content strategy
- Managed $2M annual advertising budget across multiple channels
- Led rebranding initiative that improved brand recognition by 35%

**Marketing Specialist** | Salesforce  
*2019 – 2021*  
- Executed email marketing campaigns with 25% average open rate
- Created social media strategy resulting in 200% follower growth
- Collaborated with sales team to generate 500+ qualified leads monthly

## Education
**MBA, Marketing** | University of Texas at Austin, 2019  
**B.A. Communications** | Texas A&M University, 2017

## Core Competencies
• Digital Marketing Strategy • Content Creation • SEO/SEM  
• Social Media Marketing • Email Marketing • Analytics & Reporting  
• Brand Management • Campaign Optimization • Lead Generation`,

    minimal: `# Alex Chen
Product Designer  
Seattle, WA · alex.chen@email.com

## Experience
**Senior Product Designer** | Microsoft  
*2020 – Present*  
- Design user experiences for Microsoft Teams (50M+ daily users)
- Lead design system initiatives across multiple product teams

**Product Designer** | Spotify  
*2018 – 2020*  
- Created mobile app features improving user engagement by 30%
- Conducted user research and usability testing for new features

## Education
**B.A. Design** | Art Center College of Design, 2018

## Skills
Figma, Sketch, Prototyping, User Research, Design Systems`,
  };

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
                  <button
                    onClick={() => {
                      onLoadTemplate(templates.professional);
                      setIsTemplatesOpen(false);
                    }}
                    className="text-left w-full hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        Professional
                      </div>
                      <div className="text-xs text-gray-500">
                        Tech/Corporate roles
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      onLoadTemplate(templates.marketing);
                      setIsTemplatesOpen(false);
                    }}
                    className="text-left w-full hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                  >
                    <div>
                      <div className="font-medium text-gray-900">Marketing</div>
                      <div className="text-xs text-gray-500">
                        Marketing/Sales roles
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      onLoadTemplate(templates.minimal);
                      setIsTemplatesOpen(false);
                    }}
                    className="text-left w-full hover:bg-gray-50 px-3 py-2 rounded-md transition-colors block"
                  >
                    <div>
                      <div className="font-medium text-gray-900">Minimal</div>
                      <div className="text-xs text-gray-500">
                        Clean and simple
                      </div>
                    </div>
                  </button>
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

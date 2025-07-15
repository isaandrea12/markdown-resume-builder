# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 13 application that provides a markdown-based resume builder with PDF export functionality. The application targets corporate professionals and features a clean, modern interface for creating ATS-friendly resumes.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint linting
- `npm run format` - Format code with Prettier

## Architecture Overview
The application follows a typical Next.js 13 app router structure:

- **Landing Page** (`src/app/page.tsx`) - Marketing page with call-to-action
- **Editor Page** (`src/app/editor/page.tsx`) - Main application with split-pane editor/preview
- **Preview Component** (`src/components/Preview.tsx`) - Renders markdown using react-markdown
- **Export Component** (`src/components/ExportButton.tsx`) - PDF export using html2pdf.js

## Key Technologies
- **Next.js 13** with App Router
- **React 18** with client-side state management
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **react-markdown** with remark-gfm for markdown rendering
- **html2pdf.js** for PDF export functionality

## Styling Guidelines
- Uses Tailwind CSS with a professional, minimalist design
- Inter font family for modern typography
- Color palette focused on blues, grays, and whites for corporate appeal
- Responsive design patterns for mobile and desktop

## Component Structure
- Components are functional React components using hooks
- State management is handled with useState at the component level
- Refs are used for DOM manipulation (PDF export)
- All components are client-side rendered ("use client" directive)

## Data Flow
1. User types markdown in textarea editor
2. Markdown state updates trigger re-render of Preview component
3. Preview component renders markdown to HTML via react-markdown
4. Export button captures the rendered preview div and converts to PDF

## Development Notes
- The application is primarily client-side with minimal server-side logic
- PDF export quality settings are optimized for resume formatting
- Default resume template is provided as initial markdown content
- The editor uses a split-pane layout (50/50) for optimal workflow
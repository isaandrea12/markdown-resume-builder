"use client";

import { useState } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import GetAppIcon from "@mui/icons-material/GetApp";
import CircularProgress from "@mui/material/CircularProgress";

type ExportButtonProps = {
  previewRef: React.RefObject<HTMLDivElement | null>;
};

export default function ExportButton({ previewRef }: ExportButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    if (!previewRef.current) return;

    setIsLoading(true);

    try {
      // Use html2canvas-pro to capture the element
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      // Create PDF using jsPDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-white">
      <div className="text-sm text-gray-600">
        <p>
          Export as PDF{" "}
          <span className="font-semibold text-green-600">Free for testing</span>
        </p>
        <p className="text-xs text-gray-500">Using html2canvas-pro</p>
      </div>
      <button
        onClick={handleExport}
        disabled={isLoading}
        className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
      >
        {isLoading ? (
          <>
            <CircularProgress size={16} className="text-white" />
            <span>Generating PDF...</span>
          </>
        ) : (
          <>
            <GetAppIcon sx={{ fontSize: 20 }} />
            <span>Export as PDF</span>
          </>
        )}
      </button>
    </div>
  );
}

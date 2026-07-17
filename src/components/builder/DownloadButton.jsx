import React, { useState } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function download() {
    const element = document.getElementById("resume");
    if (!element) {
      console.error("Target element '#resume' not found.");
      return;
    }

    setIsDownloading(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2, 
        useCORS: true, 
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff"
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      
      const pdfWidth = 210; 
      const pdfHeight = 297;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      const pdf = new jsPDF("p", "mm", "a4");
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button
      onClick={download}
      disabled={isDownloading}
      className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition duration-200 font-medium ${
        isDownloading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {isDownloading ? "Generating PDF..." : "Download PDF"}
    </button>
  );
}

export default DownloadButton;
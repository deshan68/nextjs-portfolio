import React from "react";
// import pdf from '../public/resumeFile/cv.pdf'

const PDFDownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1SzF4TPzqyPiAiPCfJjVhD-1dQnsZSlB9/view?usp=drive_link";
    link.target = "_blank";
    link.download = "../public/resumeFile/cv.pdf"; // Replace with desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={downloadPDF}>RESUME</button>;
};

export default PDFDownloadButton;

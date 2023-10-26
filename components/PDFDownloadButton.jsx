import { resume_url } from "@constants";
import React from "react";

const PDFDownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = resume_url;
    link.target = "_blank";
    link.download = "../public/resumeFile/CV.pdf"; // Replace with desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={downloadPDF}>RESUME</button>;
};

export default PDFDownloadButton;

import React from "react";

const PDFDownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1ATRQY4TLmq5nql_CbhpqKCIRFMWkV3Kn/view?usp=share_link";
    link.target = "_blank";
    link.download = "../public/resumeFile/cv.pdf"; // Replace with desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={downloadPDF}>RESUME</button>;
};

export default PDFDownloadButton;

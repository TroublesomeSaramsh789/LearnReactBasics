import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from "./sample.pdf";
import "./app-pages.scss"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.jsx/${pdfjs.version}/pdf.worker.jsx`;

export default function SamplePdf() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Document
      file={samplePDF}
      options={{ workerSrc: "/pdf.worker.jsx" }}
      onLoadSuccess={onDocumentLoadSuccess}
      
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.45}/>
      ))}
    </Document>
  );
}

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Viewer = () => {
  const { className, chapter, topic } = useParams();
  const location = useLocation();

  // Extract pdfUrl from query params
  const queryParams = new URLSearchParams(location.search);
  const pdfUrl = queryParams.get('pdfUrl') || ''; // Get the pdfUrl from the query parameter

  // If pdfUrl is empty, show a fallback message
  if (!pdfUrl) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-800 mb-6 leading-tight">
            No PDF available for this topic.
          </h2>
        </div>
      </div>
    );
  }

  // Function to handle the PDF download (only for button, not iframe)
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl; // Set the href to the PDF URL
    link.download = `${topic.replace(/-/g, ' ')}.pdf`; // Use the topic name as the file name
    link.click(); // Trigger the download by simulating a click event
  };

  // Construct the URL for the iframe, disabling toolbar, navigation pane, and scrollbar
  const iframeUrl = `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 p-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-gray-800 mb-6 leading-tight">
          {topic.replace(/-/g, ' ').toUpperCase()}
        </h2>

        {/* Embed PDF using iframe */}
        <div className="mb-6">
          <iframe
            src={iframeUrl}
            width="100%"
            height="685px"
            title="PDF Viewer"
            className="border-4 border-gray-300 rounded-lg shadow-2xl bg-white"
            wmode="transparent"
            type="application/pdf"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-xl hover:from-blue-600 hover:to-blue-500 transform hover:scale-105 transition-all duration-300"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Viewer;

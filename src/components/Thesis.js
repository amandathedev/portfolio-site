import React from "react";

const Thesis = () => {
  return (
    <div className="thesis-container">
      <h2>Master's Thesis</h2>
      <div className="underline"></div>
      <div className="thesis-content">
        <div className="thesis-preview">
          <img
            src="https://example.com/thumbnail.jpg"  // Replace with an actual thumbnail of your PDF
            alt="Thesis Preview"
            className="thesis-thumbnail"
          />
        </div>
        <div className="thesis-info">
          <h4>Title of Thesis</h4>
          <p className="thesis-description">
            This is a brief overview of the thesis content or abstract. You can download the full PDF below.
          </p>
          <a
            href="https://onedrive-link-to-thesis.pdf"  // Replace with actual PDF link
            className="btn btn-primary thesis-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-pdf"></i> View Thesis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thesis;

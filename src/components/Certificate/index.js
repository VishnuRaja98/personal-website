import React from "react";



  const Certificate = ({ imageSrc, title, issuer, date, certificateURL, skillsGained }) => {
    const handleDownloadClick = (e) => {
        e.preventDefault();
        window.open(certificateURL,"_blank");
      };

    return (
      <div className="certificate-container" onClick={handleDownloadClick}>
        <div className="certificate-image" style={{backgroundImage: `url(${imageSrc})`}}></div>
        <div className="certificate-details">
          <h2>{title}</h2>
          <p className="issuer">{issuer}</p>
          <p className="date">{date}</p>
          {skillsGained && (
            <div className="skills-gained">
              <div className="pill-list">
                {skillsGained.map((skill, index) => (
                  <span key={index} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {/* <a className="pdf-link" href={pdfUrl}  >PDF</a> */}
        </div>
      </div>
    );
  };
export default Certificate;

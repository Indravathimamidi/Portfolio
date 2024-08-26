import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ResumeSection({ edu }) {
  const { year, institution, stream} =
    edu;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h4 className="mi-resume-company">
          {institution}
        </h4>
        <h6 className="mi-resume-company">
          {stream}
        </h6>
      </div>
    </div>
  );
}

export default ResumeSection;

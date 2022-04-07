import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download CV
      </a>
      <a href="#contact" className="btn ">
        Say hi! &#128075;&#127996;
      </a>
    </div>
  );
};

export default CTA;

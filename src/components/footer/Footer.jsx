import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright">
        <small>
          Copyright &copy; 2022 <strong>Ronnie Noche</strong> | All Rights
          Reserved. <br />
          This is licensed under a
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
          >
            {" "}
            Creative Commons Attribution-NonCommercial 4.0 International
            License.
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;

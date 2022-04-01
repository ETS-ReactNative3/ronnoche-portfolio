import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import { RiProjectorLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiBookmarkLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiProjectorLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <HiOutlineMail />
      </a>
    </nav>
  );
};

export default Nav;

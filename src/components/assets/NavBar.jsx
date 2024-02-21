import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  const links = [
    { index: 0, href: "banner", text: "home" },
    { index: 1, href: "project", text: "project" },
    { index: 2, href: "certificate", text: "certificate" },
  ];

  const handleOnClick = (index) => {
    if (index) {
      const element = document.getElementById(links[index].href);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <div className="right">J</div>
        <span className="with-line"></span>
        <div className="left">J</div>
      </div>
      <div className="links">
        {links.map((link, index) => (
          <a
            href={`#${link.href}`}
            key={index}
            onClick={() => handleOnClick(index)}
          >
            <p className={`${link.text}`}>{link.text}</p>
          </a>
        ))}
      </div>
      <button onClick={toContact}>Contact Me</button>
    </div>
  );
};

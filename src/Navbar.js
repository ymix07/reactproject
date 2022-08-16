import React, { useState } from "react";

const Navbar = () => {
    
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const hamburgerClicked = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navigation container">
      <a href="/" className="brand-name">
        Jonathan Spencer
      </a>
      <button className="hamburger" onClick={hamburgerClicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Chats</a>
          </li>
          <li>
            <a href="/">Awards</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
      <button className="btn-primary">Get in touch</button>
    </nav>
  );
};

export default Navbar;

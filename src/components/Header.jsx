import { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <header className="header">
      <div className={`tab ${isActive ? "active" : ""}`}>
        <h1>Hi! I'm Allison</h1>
        <div>
          and I'm a <span>Software Engineer.</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

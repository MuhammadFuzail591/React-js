import React, { useState } from "react";

const Header = ({theme}) => {
  const [isDark, setIsDark] = theme;

  // if(isDark){
  //   document.body.classList.add("dark");
  // }else{
  //   document.body.classList.remove("dark");
  // }

  return (
    <header className={`header-container ${isDark? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            // document.body.classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem("isDarkTheme",!isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          {isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;

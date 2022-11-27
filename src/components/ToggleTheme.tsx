import React, { useEffect, useState } from "react";
import "./toggle-theme.css";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <button
      onClick={changeTheme}
      className={theme === "light" ? "button-light" : "button-dark"}
    >
      {theme === "light" ? "☽" : "☼"}
    </button>
  );
};

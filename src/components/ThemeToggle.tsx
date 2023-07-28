import type React from 'react';
import { useEffect, useState } from 'react';

const ThemeToggle: React.FC<{}> = () => {
  const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="m-4">
      <div className="rounded-md hover:bg-background">
        <button onClick={handleClick} className="w-10 h-10 rounded-md text-4xl font-pixel hover:bg-muted/10 hover:ease-in duration-150">
          {theme === "light" ? "☽" : "☀"}
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle;

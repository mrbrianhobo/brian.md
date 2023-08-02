import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
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
    <motion.div
      className="m-4"
      whileHover={{ backgroundColor: "rgb(var(--background))" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="rounded-md">
        <button onClick={handleClick} className="w-10 h-10 rounded-md text-4xl font-pixel hover:bg-muted/10 hover:ease-in duration-150">
          {theme === "light" ? "☽" : "☀"}
        </button>
      </div>
    </motion.div>
  )
}

export default ThemeToggle;

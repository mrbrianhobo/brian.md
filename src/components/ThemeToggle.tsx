import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

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
      className="m-4 rounded-md"
      whileHover={{ background: "rgb(var(--background))" }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.button
        className="w-10 h-10 rounded-md text-4xl font-pixel"
        onClick={handleClick}
        whileHover={{ background: "rgb(var(--color-muted) / 0.1)" }}
      >
        {theme === "light" ? "☽" : "☀"}
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;

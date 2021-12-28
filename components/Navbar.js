import { useState } from "react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [showTheme, setShowTheme] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true, []);
  }, []);

  if (!mounted) return null;

  const renderThemeButton = () => {
    if (systemTheme === "dark" || theme === "dark") {
      return <FiMoon className="dark:text-cyan-400 h-5 w-5" />;
    } else if (systemTheme === "light" || theme === "light") {
      return <FiSun className="dark:text-cyan-400 h-5 w-5" />;
    }
  };

  const changeTheme = (theme, state) => {
    setTheme(theme);
    setShowTheme(state);
  };
  return (
    <div data-aos="fade-down" data-aos-delay="400" className="mr-8 mt-5">
      <button
        type="button"
        className="absolute right-0 rounded-md"
        onClick={() => setShowTheme(!showTheme)}
      >
        {renderThemeButton()}
      </button>
      <button
        type="button"
        className="absolute right-8 rounded-md"
        onClick={() => setShowLang(!showLang)}
      >
        <MdTranslate className="dark:text-cyan-400 h-5 w-5" />
      </button>

      {showTheme ? (
        <ul className="navDropdown top-8 right-0">
          <li onClick={() => changeTheme("light", !showTheme)}>
            <FiSun className="h-4 w-4 mr-2" />
            Light
          </li>
          <li onClick={() => changeTheme("dark", !showTheme)}>
            <FiMoon className="h-4 w-4 mr-2" />
            Dark
          </li>
          <li onClick={() => changeTheme("system", !showTheme)}>
            <FiSettings className="h-4 w-4 mr-2" />
            System
          </li>
        </ul>
      ) : null}
      {showLang ? (
        <ul className="navDropdown top-8 right-8">
          <li onClick={() => setShowLang(!showLang)}>
            <Link href="/" locale="en">
              English
            </Link>
          </li>
          <li onClick={() => setShowLang(!showLang)}>
            <Link href="/" locale="ja">
              Japanese
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;

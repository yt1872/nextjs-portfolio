import { useState } from "react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [showTheme, setShowTheme] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [mounted, setMounted] = useState(false);
  const refTheme = useRef();
  const refLang = useRef();

  useEffect(() => {
    setMounted(true, []);
    const checkIfClickedOutside = (e) => {
      if (
        showTheme &&
        refTheme.current &&
        !refTheme.current.contains(e.target)
      ) {
        setShowTheme(false);
      }
      if (showLang && refLang.current && !refLang.current.contains(e.target)) {
        setShowLang(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showTheme, showLang]);

  if (!mounted) return null;

  const renderThemeButton = () => {
    if (theme === "system" && systemTheme === "light") {
      return (
        <FiSun className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
      );
    } else if (theme === "system" && systemTheme === "dark") {
      return (
        <FiMoon className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
      );
    } else if (theme === "light") {
      return (
        <FiSun className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
      );
    } else if (theme === "dark") {
      return (
        <FiMoon className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
      );
    }
  };

  const changeTheme = (theme, state) => {
    setTheme(theme);
    setShowTheme(state);
  };

  return (
    <div
      className="mr-8 mt-8 relative z-10"
      data-aos="fade-in"
      data-aos-duration="600"
    >
      <span class="fi fi-gr"></span>
      <button
        type="button"
        className="absolute right-0 rounded-md"
        onClick={() => setShowTheme(!showTheme)}
      >
        {renderThemeButton()}
      </button>
      <button
        type="button"
        className="absolute right-10 rounded-md"
        onClick={() => setShowLang(!showLang)}
      >
        <MdTranslate className="hover:text-cyan-500 hover:dark:text-cyan-400 text-3xl" />
      </button>

      {showTheme ? (
        <ul className="navDropdown top-10 right-0" ref={refTheme}>
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
        <ul className="navDropdown top-10 right-10" ref={refLang}>
          <Link href="/" locale="en">
            <li onClick={() => setShowLang(!showLang)}>
              <img src="./images/uk.png" className="w-4 mr-2"></img>
              English
            </li>
          </Link>
          <Link href="/" locale="ja" onClick={() => setShowLang(false)}>
            <li onClick={() => setShowLang(!showLang)}>
              <img src="./images/japan.png" className="w-4 mr-2"></img>
              日本語
            </li>
          </Link>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;

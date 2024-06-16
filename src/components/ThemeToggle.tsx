import { useCallback, useEffect, useRef, useState } from "react";
import { MdSunny as Sun } from "react-icons/md";
import { BsFillMoonStarsFill as Moon } from "react-icons/bs";

type Theme = "light" | "dark";

const animateIn = "animate-[slide-down-in_0.5s_ease,fade-in_0.5s_ease]";
const animateOut = "animate-[slide-down-out_0.5s_ease,fade-out_0.5s_ease_forwards]";

export const ThemeToggle = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme") as Theme);

  const toggle = useThrottle(() => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }, 1600);

  useEffect(() => {
    if (!mounted.current) mounted.current = true;
  }, []);

  const isDark = theme === "dark";
  return (
    <button
      ref={buttonRef}
      aria-label="Toggle theme"
      className={`pile grow-hover ${mounted.current ? "" : "*:adur-[0s]"} w-[1.5rem] animate-[no-events_0.5s_ease_forwards] items-center
      drop-shadow-lg transition-colors dark:animate-[no-events_0.5s_ease_forwards]`}
      onClick={toggle}
    >
      <Moon className={`${isDark ? animateIn : animateOut} relative left-1`} />
      <Sun className={!isDark ? animateIn : animateOut} size="1.25rem" />
    </button>
  );
};

const useThrottle = (fn: () => void, delay: number) => {
  const [lastRan, setLastRan] = useState(0);

  return useCallback(() => {
    if (Date.now() - lastRan >= delay) {
      fn();
      setLastRan(Date.now());
    }
  }, [fn, lastRan, delay]);
};

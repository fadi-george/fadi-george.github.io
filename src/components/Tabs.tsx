import { useEffect } from "react";
import { motion } from "framer-motion";

const TABS = [
  { name: "work", label: "Work" },
  { name: "skills", label: "Skills" },
  { name: "about", label: "About" },
];
const motionItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Tabs = ({ pathname }: { pathname: string }) => {
  const isHome = pathname === "";

  const activeAnchor = isHome ? undefined : `--${pathname}-tab`;
  useEffect(() => {
    const tabLine = document.getElementById("tab-line");
    if (tabLine) {
      tabLine.style.visibility = "visible";
    }
  }, []);

  return (
    <div className="ancname-[--home] vtn-[navTabs]">
      <motion.nav
        animate="visible"
        className="relative z-[1] me-auto ms-auto flex items-center justify-center"
        initial={isHome ? "hidden" : "visible"}
        onMouseLeave={() => {
          const tabLine = document.getElementById("tab-line");
          if (tabLine) {
            if (isHome) tabLine.style.opacity = "0";
            // @ts-expect-error - no a built-in type yet
            tabLine.style.positionAnchor = activeAnchor;
          }
        }}
        variants={{
          hidden: {
            opacity: 0,
            pointerEvents: "none",
            transition: {
              when: "afterChildren",
            },
          },
          visible: {
            opacity: 1,
            pointerEvents: "auto",
            transition: {
              when: "beforeChildren",
              delay: 2.5,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {TABS.map((tab) => (
          <motion.div key={tab.name} variants={motionItem}>
            <LinkTab href={`/${tab.name}`} isActive={pathname === `${tab.name}`} isCompact={!isHome} name={tab.name}>
              {tab.label}
            </LinkTab>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

const LinkTab = ({
  children,
  href,
  isActive,
  isCompact,
  name,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
  isCompact?: boolean;
  name: string;
}) => {
  return (
    <a
      data-astro-prefetch
      href={href}
      onMouseEnter={() => {
        const tabLine = document.getElementById("tab-line");
        if (!tabLine) return;
        tabLine.style.opacity = "1";
        // @ts-expect-error - no a built-in type yet
        tabLine.style.positionAnchor = `--${name}-tab`;
      }}
      style={{
        // @ts-expect-error - no a built-in type yet
        anchorName: `--${name}-tab`,
      }}
    >
      <span
        className={`${isActive ? "font-semibold" : "font-normal hover:font-medium"} ${
          isCompact ? "min-w-[70px] text-[18px]" : "min-w-[88px] text-[20px]"
        } block px-3 py-1 text-center`}
      >
        {children}
      </span>
    </a>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { GreenLogo, Logo } from "@/assets";

/* ------------------------------------------
   Navigation config
--------------------------------------------- */
type DropdownItem = { title: string; link: string };
type NavItem = { title: string; link: string; dropdown?: DropdownItem[] };

const NAV_ITEMS: NavItem[] = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about" },
  {
    title: "Products",
    link: "/products",
    dropdown: [
      { title: "Solar Solutions", link: "/products/solar" },
      { title: "Automotive Solutions", link: "/products/automotive" },
      { title: "Energy Storage Solutions (ESS)", link: "/products/ess" },
    ],
  },
  { title: "Our Network", link: "/our-network" },
];

/* ------------------------------------------
   Active highlighting logic
--------------------------------------------- */
const isActivePath = (pathname: string, link: string) => {
  if (link === "/" && pathname === "/") return true;
  if (link === "/" && pathname !== "/") return false;

  if (pathname === link) return true;
  return pathname.startsWith(link + "/");
};

/* ------------------------------------------
   Desktop Nav Item
--------------------------------------------- */
const DesktopItem = ({
  item,
  index,
  activeIdx,
  setActiveIdx,
  pathname,
  isLightMode,
  scrolled,
}: any) => {
  const router = useRouter();
  const hasDropdown = !!item.dropdown?.length;
  const isActive = isActivePath(pathname, item.link);

  const baseTextColor = scrolled
    ? "text-primary"
    : isLightMode
    ? "text-white"
    : "text-primary";

  if (!hasDropdown) {
    return (
      <Link
        href={item.link}
        className={`px-4 py-2 text-[16px] rounded-full transition-all duration-200
          ${isActive ? "bg-primary text-white" : baseTextColor}
          hover:bg-primary hover:text-white`}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveIdx(index)}
      onMouseLeave={() => setActiveIdx(null)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 text-[16px] rounded-full cursor-pointer transition-all duration-200
          ${isActive ? "bg-primary text-white" : baseTextColor}
          hover:bg-primary hover:text-white`}
        onClick={(e) => {
          const isChevron = (e.target as HTMLElement).closest(".chevron-zone");
          if (isChevron) {
            setActiveIdx(activeIdx === index ? null : index);
          } else {
            router.push(item.link);
          }
        }}
      >
        {item.title}

        <span className="chevron-zone flex items-center">
          <ChevronDown
            size={16}
            className={`transition-transform duration-150 ${
              activeIdx === index ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {activeIdx === index && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-2xl w-72 py-3 px-3"
          >
            {item.dropdown.map((d: DropdownItem) => (
              <Link
                key={d.title}
                href={d.link}
                className={`block px-4 py-2 rounded-lg text-sm transition 
                  ${
                    pathname === d.link
                      ? "bg-[#ECFCE8] text-primary"
                      : "text-gray-700 hover:bg-[#ECFCE8] hover:text-primary"
                  }`}
              >
                {d.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ------------------------------------------
   Mobile Item (Closes menu on click)
--------------------------------------------- */
const MobileItem = ({
  item,
  index,
  active,
  setActive,
  pathname,
  closeMenu,
}: any) => {
  const hasDropdown = !!item.dropdown?.length;
  const isActive = isActivePath(pathname, item.link);

  return (
    <div className="relative">
      {/* Top-level row */}
      {hasDropdown ? (
        <button
          onClick={() => setActive(active === index ? null : index)}
          className={`flex justify-between items-center w-full py-2 px-3 rounded-md text-left
            ${
              isActive
                ? "text-primary"
                : "text-gray-700 hover:bg-[#ECFCE8] hover:text-primary"
            }`}
        >
          {item.title}
          <ChevronDown
            size={16}
            className={`transition-transform ${
              active === index ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        <Link
          href={item.link}
          className={`block py-2 px-3 rounded-md
            ${
              isActive
                ? "bg-[#ECFCE8] text-primary"
                : "text-gray-700 hover:bg-[#ECFCE8] hover:text-primary"
            }`}
          onClick={closeMenu}   
        >
          {item.title}
        </Link>

        
      )}


      {/* Dropdown */}
      <AnimatePresence>
        {hasDropdown && active === index && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="pl-2 mt-1 space-y-1 overflow-hidden"
          >
            {item.dropdown.map((d: DropdownItem) => (
              <Link
                key={d.title}
                href={d.link}
                className={`block px-3 py-2 rounded-md text-sm
                  ${
                    pathname === d.link
                      ? "bg-[#ECFCE8] text-primary"
                      : "text-gray-600 hover:bg-[#ECFCE8] hover:text-primary"
                  }`}
                onClick={closeMenu}   
              >
                {d.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  );
};

/* ------------------------------------------
   MAIN NAVBAR
--------------------------------------------- */
export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mobileIdx, setMobileIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const lightPages = ["/about", "/contact", "/products"];
  const isLightMode = lightPages.includes(pathname);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    scrolled || !isLightMode ? "text-primary" : "text-white";

  const logoSrc = scrolled ? GreenLogo : isLightMode ? Logo : GreenLogo;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-6
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        ${textColor}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image src={logoSrc} alt="logo" width={140} height={26} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex gap-8 items-center">
          {NAV_ITEMS.map((item, i) => (
            <DesktopItem
              key={item.title}
              item={item}
              index={i}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
              pathname={pathname}
              scrolled={scrolled}
              isLightMode={isLightMode}
            />
          ))}
        </div>

        {/* Contact button */}
        <div className="hidden xl:flex">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={` flex py-2  items-center justify-center text-gray-700 rounded-lg text-sm transition shadow-md
              ${
                scrolled
                  ? "bg-primary text-white"
                  : isLightMode
                  ? "bg-primary text-white"
                  : "border border-primary text-primary hover:bg-primary hover:text-white"
              }
            `}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="xl:hidden bg-white text-primary mt-3 rounded-xl p-4 shadow-md"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <MobileItem
                key={item.title}
                item={item}
                index={i}
                active={mobileIdx}
                setActive={setMobileIdx}
                pathname={pathname}
                closeMenu={() => setMobileOpen(false)}  
              />
            ))}

            {/** ⭐ ADD CONTACT LINK HERE ⭐ */}
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-sm
                ${
                  pathname === "/contact"
                    ? "bg-[#ECFCE8] text-primary"
                    : "text-gray-600 hover:bg-[#ECFCE8] hover:text-primary"
                }`}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

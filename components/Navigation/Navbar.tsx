"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { GreenLogo, Logo } from "@/assets";

interface DropdownItem {
  title: string;
  link: string;
}

interface NavItem {
  title: string;
  link: string;
  dropdown?: DropdownItem[];
}

// ✅ Added Dropdown Items for Products
const NavbarContents: NavItem[] = [
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

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);

  // ✅ Light mode pages
  const lightPages = ["/about", "/contact"];
  const isLightMode = lightPages.includes(pathname);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
    setActiveDropdown(null);
  }, [pathname]);

  const isNavItemActive = (item: NavItem): boolean => {
    if (item.link && pathname === item.link) return true;
    if (item.dropdown) {
      return item.dropdown.some((dropdownItem) => pathname === dropdownItem.link);
    }
    return false;
  };

  const handleDropdownToggle = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index: number): void => {
    if (NavbarContents[index].dropdown) setActiveDropdown(index);
  };

  const handleMouseLeave = (): void => {
    setActiveDropdown(null);
  };

  const handleMobileDropdownToggle = (index: number): void => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null);
  };

  const handleMobileLinkClick = (): void => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`absolute top-0 w-full px-6 md:px-15 z-[100] font-open-sans transition-colors duration-300 ${
        isLightMode ? "text-white" : "text-primary"
      }`}
    >
      <div className="flex justify-between items-center py-4">
        {/* === Logo === */}
        <Link href="/" className="flex gap-2 items-center" onClick={handleMobileLinkClick}>
          <Image
            src={isLightMode ? Logo : GreenLogo}
            alt="logo"
            width={139}
            height={26}
            className="w-[139px] h-[26px]"
          />
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden xl:flex gap-8 items-center">
          {NavbarContents.map((item, index) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isActive = isNavItemActive(item);

            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center gap-1 text-[16px] font-regular transition-all duration-200 hover:px-4 hover:py-2 hover:rounded-full ${
                      isLightMode
                        ? `text-white hover:bg-white hover:text-primary`
                        : `text-primary hover:bg-primary hover:text-white`
                    } ${
                      isActive
                        ? isLightMode
                          ? "bg-white text-primary px-4 py-2 rounded-full"
                          : "bg-primary text-white px-4 py-2 rounded-full"
                        : ""
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-150 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className={`flex items-center gap-1 text-[16px] font-regular transition-all duration-200 hover:px-4 hover:py-2 hover:rounded-full ${
                      isLightMode
                        ? `text-white hover:bg-primary hover:text-white`
                        : `text-primary hover:bg-primary hover:text-white`
                    } ${
                      isActive
                        ? isLightMode
                          ? "bg-primary text-white px-4 py-2 rounded-full"
                          : "bg-primary text-white px-4 py-2 rounded-full"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* === Desktop Dropdown === */}
                <AnimatePresence>
                  {hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl py-4 px-4 z-50 w-80 inline-block whitespace-nowrap text-center shadow-lg"
                    >
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.link}
                          className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 mb-1 ${
                            pathname === dropdownItem.link
                              ? "bg-[#ECFCE8] text-primary"
                              : "text-gray-700 hover:bg-[#ECFCE8] hover:text-primary"
                          }`}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* === Contact Button === */}
        <div className="hidden xl:flex">
          <Link
            href="/contact"
            className={`flex items-center justify-center w-[121px] h-11 rounded-lg text-sm font-medium shadow-md transition duration-150 hover:scale-105 ${
              isLightMode
                ? `bg-primary text-white hover:bg-primary/90`
                : `border border-primary text-primary bg-transparent hover:bg-primary hover:text-white`
            } ${pathname === "/contact" && !isLightMode ? "bg-primary/90" : ""}`}
          >
            Contact us
          </Link>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={toggleMobileMenu}
          className={`xl:hidden p-2 rounded-md transition-colors duration-150 cursor-pointer ${
            isLightMode ? "text-white hover:bg-white/10" : "text-primary hover:bg-gray-100"
          }`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white rounded-[16px] mt-2 py-4 px-4 shadow-md"
          >
            <div className="space-y-2">
              {NavbarContents.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isActive = isNavItemActive(item);

                return (
                  <div key={item.title} className="relative">
                    <div className="flex items-center justify-between">
                      {hasDropdown ? (
                        <button
                          onClick={() => handleMobileDropdownToggle(index)}
                          className={`flex items-center justify-between py-2 px-3 text-[16px] font-medium transition-colors duration-150 flex-1 text-left w-full rounded-md ${
                            isActive
                              ? "text-primary"
                              : "text-gray-700 hover:text-primary hover:bg-[#ECFCE8]"
                          }`}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-150 ${
                              mobileActiveDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={handleMobileLinkClick}
                          className={`flex items-center gap-1 py-2 px-3 text-[16px] font-medium transition-colors duration-150 w-full rounded-[6px] ${
                            isActive
                              ? "text-primary bg-[#ECFCE8]"
                              : "text-gray-700 hover:text-primary hover:bg-[#ECFCE8]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>

                    {/* === Mobile Dropdown === */}
                    <AnimatePresence>
                      {hasDropdown && mobileActiveDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="mt-2 space-y-1 rounded-lg p-2"
                        >
                          {item.dropdown?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.link}
                              onClick={handleMobileLinkClick}
                              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                                pathname === dropdownItem.link
                                  ? "bg-[#ECFCE8] text-primary"
                                  : "text-[#606060] hover:bg-[#ECFCE8] hover:text-primary"
                              }`}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* === Mobile Contact Button === */}
              <Link
                href="/contact"
                onClick={handleMobileLinkClick}
                className={`flex items-center gap-1 py-2 px-3 text-[16px] font-medium transition-colors duration-150 w-full rounded-[6px] ${
                  pathname === "/contact"
                    ? "text-primary bg-[#ECFCE8]"
                    : "text-gray-700 hover:text-primary hover:bg-[#ECFCE8]"
                }`}
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

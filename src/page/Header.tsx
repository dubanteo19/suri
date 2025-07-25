import { USER_ROUTES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "INTRODUCTION", href: "/" },
  { name: "TEACHING PHILOSOPHY", href: USER_ROUTES.PHILOSOPHY },
  { name: "COVER LETTER", href: USER_ROUTES.COVER_LETTER },
  { name: "REFERENCE LETTER", href: USER_ROUTES.REFERENCE_LETTER },
  { name: "RESUME", href: USER_ROUTES.RESUME },
  { name: "CERTIFICATE", href: USER_ROUTES.CERTIFICATE },
  { name: "PROJECTS", href: USER_ROUTES.PROJECTS },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const { pathname } = useLocation();
  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 bg-primary transition-transform duration-300 shadow ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" md:px-20 px-4  py-4 flex items-center justify-between w-full">
        <div className="flex gap-4 items-center">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "hover:text-primary-foreground transition-colors duration-200 ",
                  pathname.substring(1).startsWith(item.href) &&
                    "text-primary-foreground",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-md border-t "
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-colors duration-200 font-bold"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

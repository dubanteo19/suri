import { ImageContainer } from "@/components/common/ImageContainer";
import { GithubIcon } from "@/components/icons/github";
import { AButton } from "@/components/ui/CallToActionButton";
import { GITHUB } from "@/constants/constants";
import { motion } from "framer-motion";
import { Menu as MenuIcon, PaperclipIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
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
  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 shadow ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4  py-2 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <a href="#hero">
            <ImageContainer src="/logo.png" className="size-10" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <Link
          className="  bg-primary hidden md:inline-flex border-black border-2 text-black  rounded 1 px-2     gap-2 items-center justify-center cursor-pointer"
          to={"/resume"}
        >
          Resume
          <PaperclipIcon />
        </Link>
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
          className="md:hidden bg-white shadow-md border-t border-pink-100"
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
          <div className="flex justify-center my-2 items-center gap-2">
            <Link
              className="  bg-primary  inline-flex border-black border-2 text-black  rounded 1 px-2     gap-2 items-center justify-center cursor-pointer"
              to={"/resume"}
            >
              Resume
              <PaperclipIcon />
            </Link>
            <AButton href={GITHUB} icon=<GithubIcon className="size-4" />>
              Github
            </AButton>
          </div>
        </motion.div>
      )}
    </header>
  );
};

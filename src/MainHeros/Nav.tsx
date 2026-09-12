import { useState, useEffect } from "react";
import { X } from "lucide-react";
import hamburgerIcon from "../UI/hamburger.png";
import logoImage from "../UI/logo-text.png";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Technologies", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-100 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Main Navbar */}
      <div
        className="
          mx-auto
          grid
          h-[68px]
          max-w-[1280px]
          grid-cols-3
          items-center
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= LEFT ================= */}

        {/* Mobile: Hamburger */}
        <div className="flex items-center justify-start">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex items-center justify-center text-slate-700 lg:hidden"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <img
                src={hamburgerIcon}
                alt="Menu"
                className="h-6 w-6"
              />
            )}
          </button>

          {/* Desktop: Logo */}
          <a
            href="/"
            className="hidden items-center gap-2.5 lg:flex"
          >
            <img
              src={logoImage}
              alt="DevStack Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* ================= CENTER ================= */}

        {/* Mobile: Logo */}
        <a
          href="/"
          className="flex justify-self-center lg:hidden"
        >
          <img
            src={logoImage}
            alt="DevStack Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop: Nav Links */}
        <nav className="hidden items-center justify-self-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm transition-colors ${
                activeLink === link.href
                  ? "font-semibold text-[#db2777]"
                  : "font-medium text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/*  Sign Up - Sign In buttons */}

        <div className="flex items-center justify-self-end gap-2 sm:gap-4 lg:gap-6">
          {/* Sign In */}
          <a
            href="/signin"
            className="
              text-xs
              font-medium
              text-slate-700
              transition-colors
              hover:text-slate-900
              sm:text-sm
            "
          >
            Sign In
          </a>

          {/* Sign Up */}
          <a
            href="/signup"
            className="
              rounded-full
              bg-[#d91b7e]
              px-3
              py-1.5
              text-xs
              font-semibold
              text-white
              shadow-[0px_1px_1px_#fbcfe8]
              transition-colors
              hover:bg-[#c11871]
              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <nav
          className="
            flex
            flex-col
            gap-1
            border-t
            border-slate-100
            bg-white
            px-4
            py-3
            lg:hidden
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsOpen(false);
              }}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                activeLink === link.href
                  ? "font-semibold text-[#db2777]"
                  : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
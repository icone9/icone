import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "foundation", href: "/#foundation" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];
// ${scrolled ? "bottom-8 md:top-8 md:bottom-auto" : "top-8"}
const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Control background style
      setIsScrolled(currentScrollY > 50);

      // Don't hide navbar if menu is open
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Control show/hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleNavItemClick = (item: (typeof navItems)[0]) => {
    setActive(item.name);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled || isMenuOpen
            ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            className="text-2xl font-bold font-display tracking-wider text-brand-cream uppercase cursor-pointer hover:text-brand-yellow transition-colors duration-300"
          >
            Icone Tech.
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavItemClick(item)}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-brand-yellow ${
                  active === item.name
                    ? "text-brand-yellow"
                    : "text-brand-cream"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#footer"
              className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-bold uppercase text-xs hover:scale-105 transition-transform duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button - Also acts as Close Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center gap-2 group z-[110]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/60 group-hover:text-brand-yellow transition-colors">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1.5 focus:outline-none">
              <span
                className={`w-6 h-0.5 bg-brand-cream transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-brand-cream transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-brand-cream transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[105] bg-brand-dark transition-all duration-500 flex flex-col justify-center items-center ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Extra redundancy: Explicit close button for users who miss the header toggle */}
        <div className="absolute top-8 right-6 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-cream hover:bg-brand-yellow hover:text-brand-dark transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-8 text-center">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavItemClick(item)}
              className="group flex flex-col items-center"
            >
              <span className="text-brand-yellow text-[10px] font-bold uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
              <span className="text-5xl font-display uppercase text-brand-cream hover:text-brand-yellow transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Footer info in mobile menu */}
        <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
          <div className="text-left">
            <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">
              Follow Us
            </div>
            <div className="flex gap-4">
              <span className="text-xs uppercase font-bold text-brand-cream/60">
                Ig
              </span>
              <span className="text-xs uppercase font-bold text-brand-cream/60">
                Tw
              </span>
              <span className="text-xs uppercase font-bold text-brand-cream/60">
                Li
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">
              Inquiry
            </div>
            <div className="text-xs font-bold uppercase text-brand-cream/80">
              hello@brightcove.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

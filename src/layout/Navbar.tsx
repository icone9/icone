import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#footer" },
];
// ${scrolled ? "bottom-8 md:top-8 md:bottom-auto" : "top-8"}
const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 left-0 right-0 flex justify-center transition-all duration-300 top-[unset] md:top-8 bottom-8 md:bottom-[unset]`}
    >
      <nav className="bg-brand-cream/90 backdrop-blur-md text-brand-dark px-2 py-2 rounded-full shadow-xl border border-white/20 flex items-center gap-1">
        {/* Mobile Icon Button (Hidden on Desktop) */}
        <div className="md:hidden bg-brand-yellow p-3 rounded-full mr-1 cursor-pointer">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActive(item.name);
              const el = document.querySelector(item.href);
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`
              hidden md:block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300
              ${
                active === item.name
                  ? "bg-brand-yellow text-brand-dark shadow-md transform scale-105"
                  : "hover:bg-gray-200 text-gray-800"
              }
            `}
          >
            {item.name}
          </a>
        ))}

        {/* Simple mobile view fallback for active item */}
        <a href="#home" className="md:hidden px-4 font-bold uppercase text-sm">
          {active}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

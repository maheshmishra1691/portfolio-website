import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#recognition", label: "RECOGNITION" },
  { href: "#contact", label: "CONTACT" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop();

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleResize = () => {
      lenis?.resize();
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(section) as HTMLElement | null;
    if (!target) return;

    setMenuOpen(false);

    if (window.innerWidth > 1024 && lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 1.5 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const homeUrl = import.meta.env.BASE_URL || "/";

  return (
    <>
      <header className="header">
        <a href={homeUrl} className="navbar-title" data-cursor="disable">
          <img
            src={config.developer.logo}
            alt={config.developer.fullName}
            className="navbar-logo"
          />
        </a>

        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "is-active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-cursor="disable"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-href={link.href}
                  data-cursor="disable"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <HoverLinks text={link.label} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${config.contact.email}`}
            className="navbar-nav-email"
            data-cursor="disable"
          >
            {config.contact.email}
          </a>
        </nav>
      </header>

      <button
        type="button"
        className={`navbar-backdrop ${menuOpen ? "is-open" : ""}`}
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
      />

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

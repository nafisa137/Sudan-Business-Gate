"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",               label: "Home"           },
  { href: "/platform",       label: "Platform"       },
  { href: "/roadmap",        label: "Roadmap"        },
  { href: "/about",          label: "About"          },
  { href: "/register",       label: "Register"       },
  { href: "/recommendation", label: "Recommendation" },
  { href: "/budget",         label: "Budget"         },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="nav-wf" aria-label="Main navigation">
      <div className="nav-logo-wf">
        <div className="logo-mark" aria-hidden="true">
          <div className="logo-tri" />
        </div>
        <div className="nav-brand">
          SBG <span>Sudan Business Gate</span>
        </div>
      </div>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"}`} aria-hidden="true" />
      </button>

      <div
        className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
        role="list"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nl${pathname === href ? " nl-active" : ""}`}
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

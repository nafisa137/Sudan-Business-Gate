"use client";

import "../global.css";
import Link from "next/link";
import { useState } from "react";
export default function Recommendation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
 
      {/* ── NAV ── */}
      <div className="nav-wf">
        <div className="nav-logo-wf">
          <div className="logo-mark"><div className="logo-tri"></div></div>
          <div className="nav-brand">SBG <span>Sudan Business Gate</span></div>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"}`} aria-hidden="true" />
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
<Link href="/" className="nl" onClick={() => setMenuOpen(false)}>Home</Link>
<Link href="/platform" className="nl" onClick={() => setMenuOpen(false)}>Platform</Link>
<Link href="/roadmap" className="nl" onClick={() => setMenuOpen(false)}>Roadmap</Link>
<Link href="/about" className="nl" onClick={() => setMenuOpen(false)}>About</Link>
<Link href="/register" className="nl" onClick={() => setMenuOpen(false)}>Register</Link>
<Link href="/recommendation" className="nl" onClick={() => setMenuOpen(false)}>Recommendation</Link>
<Link href="/budget" className="nl" onClick={() => setMenuOpen(false)}>Budget</Link>

        </div>
      </div>



















    </main>
  );
}

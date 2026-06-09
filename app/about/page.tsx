"use client";

import "./about.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const slides = [
  "/media/APR-Profile_Digi_page-0001.webp",
  "/media/APR-Profile_Digi_page-0002.webp",
  "/media/APR-Profile_Digi_page-0003.webp",
  "/media/APR-Profile_Digi_page-0004.webp",
  "/media/APR-Profile_Digi_page-0005.webp",
  "/media/APR-Profile_Digi_page-0006.webp",
  "/media/APR-Profile_Digi_page-0007.webp",
  "/media/APR-Profile_Digi_page-0008.webp",
  "/media/APR-Profile_Digi_page-0009.webp",
  "/media/APR-Profile_Digi_page-0010.webp",
  "/media/APR-Profile_Digi_page-0011.webp",
  "/media/APR-Profile_Digi_page-0012.webp",
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slides.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    // reset scroll to top on slide change
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const next = () => goTo(Math.min(active + 1, slides.length - 1));
  const prev = () => goTo(Math.max(active - 1, 0));

  return (
    <main className="about-root">
      {/* NAV */}
      <nav className="about-nav">
        <div className="nav-logo-wf">
          <div className="logo-mark"><div className="logo-tri" /></div>
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
      </nav>

      {/* SCROLLABLE SLIDE AREA */}
      <div className="profile-stage" ref={scrollRef}>
        {slides.map((src, i) => (
          <div
            key={i}
            className={`profile-slide${active === i ? " visible" : ""}`}
          >
            <img
              src={src}
              alt={`Company profile page ${i + 1}`}
              className="profile-img"
              loading={i < 3 ? "eager" : "lazy"}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* LEFT / RIGHT CLICK ZONES */}
      <button className="zone zone-prev" onClick={prev} aria-label="Previous page" disabled={active === 0} />
      <button className="zone zone-next" onClick={next} aria-label="Next page" disabled={active === slides.length - 1} />

      {/* DOT NAV */}
      <div className="profile-dots" aria-label="Page navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`profile-dot${active === i ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* PAGE COUNTER */}
      <div className="profile-counter">{active + 1} / {slides.length}</div>
    </main>
  );
}
"use client";
import { useState, useEffect, useRef } from "react";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  // ── static data (no hooks) ──────────────────────────────────────────
  const budgetCategories = [
    { label: "Technical Infrastructure", amount: 68000, share: "29.8%", color: "#185FA5" },
    { label: "Institutional Rollout", amount: 47100, share: "20.7%", color: "#0B1A3D" },
    { label: "Direct Working Capital", amount: 25100, share: "11.0%", color: "#C8922A" },
    { label: "Operational Contingency", amount: 28000, share: "12.3%", color: "#854F0B" },
    { label: "Human Capital (Launch)", amount: 23500, share: "10.3%", color: "#3B6D11" },
    { label: "Business Support Centre", amount: 18500, share: "8.1%", color: "#0F6E56" },
    { label: "Project Management", amount: 10000, share: "4.4%", color: "#185FA5" },
    { label: "Research & Intelligence", amount: 7800, share: "3.4%", color: "#6B21A8" },
  ];
 useEffect(() => {
  crises.forEach(c => {
    const img = new window.Image();
    img.src = c.image;
  });
}, []);

  const crises = [
    {
      title: "Sudan's Economy Has a Visibility Problem",
      body: `Thousands of Sudanese businesses are still operating. They have workers, equipment, supply chains, and capacity. 
             But to the outside world — to international buyers, development banks, and UN agencies — they are effectively invisible.
             The war didn't just destroy alfatih. It destroyed the records.`,
      image: "/media/img2.webp",
    },
    {
      title: "What Was Lost",
      body: `Trade registries. Tax ledgers. Chamber of commerce archives. Municipal licensing records. Across Sudan's commercial corridors, the physical documentation that proves a business exists — and that it can be trusted — has been damaged, displaced, or destroyed.
             Without that paper trail, there is no digital trail. And without a digital trail, there is no access to international finance, procurement contracts, or development funding.`,
      image: "/media/img1.webp",
    },
    {
      title: "The Cost of Invisibility",
      body: `International organizations want to source locally. It is cheaper, faster, and more Recommendations ful. But their compliance rules are non-negotiable. Anti-money laundering protocols. Sanctions screening. Beneficial ownership verification. If a supplier cannot be verified, they cannot be contracted — regardless of their actual capability.
             The result? Between 60% and 85% of humanitarian and reconstruction spending leaves Sudan entirely. It flows to suppliers in neighboring countries while Sudanese businesses — fully capable of delivering — watch from the outside.
             This is not a preference. It is a systems failure.`,
      image: "/media/img10.webp",
    },
    {
      title: "The Real Challenge",
      body: `This is not primarily a technology problem. It is not even purely a documentation problem.
It is an institutional coordination problem.
Sudan's private sector needs a trusted, neutral, verifiable bridge between what exists on the ground and what international institutions require on paper. Until that bridge is built, capital will continue to bypass the domestic economy — and recovery will remain out of reach.`,
      image: "/media/bu.webp",
    },
  ];
 
  const engines = [
    { title: "One Platform. Ten Engines. One Economy!", back: `The challenge facing Sudan's private sector is not a technology gap. It is not simply a documentation problem. It is a coordination failure — and fixing it requires more than a database or a portal. The Sudan Business Gate is designed as a unified digital ecosystem: a single point of interaction where businesses, government institutions, development partners, investors, and procurement entities can all operate from the same trusted infrastructure.` },
    { title: "Not ten systems just One.", back: `Most digital transformation efforts produce a collection of disconnected tools — a registration system here, a tender portal there, a reporting dashboard somewhere else. SBG is architected differently. Every component shares the same data spine, the same verification layer, and the same identity framework.\nWhen a business registers, it is simultaneously visible in the National Directory, eligible for procurement matching, accessible to development finance institutions, and connected to SBEF's administrative network. One action. Full ecosystem access.` },
  ];
useEffect(() => {
  crises.forEach(c => {
    const img = new window.Image();
    img.src = c.image;
  });
}, []);
  // ── hooks (must all be together, after data, before return) ─────────
  const [activeCard, setActiveCard] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const nextCard = () => setActiveCard((prev) => (prev + 1) % crises.length);
  const toggle = (i: number) => setFlipped(flipped === i ? null : i);

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = ["/media/img6.webp", "/media/img7.webp", "/media/img4.webp"];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = rect.top * 0.25; // 0.25 = parallax strength
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "480px", overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "130%",        // taller than container so movement has room
          willChange: "transform",
          transition: "background-image 0.8s ease-in-out",
        }}
      />
    </div>
  );
}
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

      <div className="section-wf">

        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-grid"></div>
          <div className="hero-h1">SUDAN BUSINESS GATE (SBG)<br /> <em style = {{fontSize: '20px'}}>A Recommendation for a National Digital Transformation Programme and Private Sector Economic Infrastructure </em></div>
          <div className="hero-sub">
This memorandum presents a formal proposal to establish the Sudan Business Gate (SBG) as the official digital transformation programme and unified operating infrastructure of the Sudanese Businessmen and Employers Federation (SBEF). 
Designed as a comprehensive, modern business ecosystem, the proposed programme is intended to modernize, integrate, and scale the entirety of SBEF’s statutory functions, member services, data networks,
 and institutional communications
 into a single, high-performance digital environment.
          </div>

        </div>

<div className="sec sec-alt">
  <div className="eyebrow">The problem</div>
  <div className="sec-h2">Sudan's private sector is<br />effectively invisible to the world</div>
  <div className="sec-sub">Three interlocking crises have severed the informational bridge between Sudanese businesses and international capital.</div>

  <div className="cs-box" onClick={nextCard}>
    {crises.map((c, i) => {
  const isActive = i === activeCard;
  const isNext = i === (activeCard + 1) % crises.length;
  return (
    <div key={i} className={`cs-slide${isActive ? " active" : ""}`}>
      <div
        className="cs-bg"
        style={{
          backgroundImage: isActive || isNext ? `url(${c.image})` : "none"
        }}
      />
      <div className="cs-overlay" />
      <div className="cs-content">
        <div className="cs-slide-title">{c.title}</div>
        <div className="cs-body-box">{c.body}</div>
        <div className="cs-footer">
          <div className="cs-dots">
            {crises.map((_, di) => (
              <div key={di} className={`cs-dot${di === activeCard ? " active" : ""}`} />
            ))}
          </div>
          <div className="cs-next">
            {activeCard === crises.length - 1 ? "restart" : "tap anywhere to continue"} →
          </div>
        </div>
      </div>
    </div>
  );
})}
  </div>
</div>


        {/* ── PLATFORM ENGINES ── */}
        
          <div className="engines-grid" >
            {engines.map((eng, i) => (
              <div
                key={i}
                className={`engine-wrap${flipped === i ? " flipped" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="engine-inner">
                  <div className="engine-front">
                    <div className="engine-title">{eng.title}</div>
                    <div className="engine-hint">tap to read →</div>
                  </div>
                  <div className="engine-back">
                    <div className="engine-back-text">{eng.back}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

<ParallaxImage />

<div className="grid" id="cards"></div>

<div style={{ height: "40px" }} />



        

        {/* ── WHO BENEFITS ── */}
        <div className="sec">
          <div className="eyebrow" style={{ fontSize: "26px" }}>Built for every stakeholder in Sudan's recovery</div>
          <div className="sec-sub">SBG is not a single-purpose tool. It is a shared infrastructure — designed so that every participant in Sudan's economic recovery finds a direct, practical reason to engage.</div>
          <div className="stake-grid">
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#E6F1FB", color: "#185FA5" }}>
                <i className="ti ti-chart-bar" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Sudanese business owners</div>
              <div className="stake-body">You are still here. You still have capacity, workers, and supply chains. What you are missing is visibility and a credential the world will trust.
SBG gives you a verified digital identity, free registration in Year 1, access to international tenders matched to your sector, and a call centre that works even without stable internet.</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#EAF3DE", color: "#3B6D11" }}>
                <i className="ti ti-building-government" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Government & SBEF</div>
              <div className="stake-body">SBEF modernization, data sovereignty, and full platform ownership after Month 36.</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#FAEEDA", color: "#854F0B" }}>
                <i className="ti ti-world" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Development organizations</div>
              <div className="stake-body">Verification trust layer, procurement localisation engine, AML/CTF-compliant supplier data.</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#E1F5EE", color: "#0F6E56" }}>
                <i className="ti ti-briefcase" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Business owners</div>
              <div className="stake-body">Free registration in Year 1, USSD access, SBG badge, tender matching, and call centre support.</div>
            </div>
          </div>
        </div>


        
     

      

      </div>
    </main>
  );
}

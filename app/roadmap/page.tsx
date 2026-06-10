"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import './roadmap.css'
import '../globals.css';
import Image from "next/image";


export default function Roadmap() {
  const [menuOpen, setMenuOpen] = useState(false);

 

  const integrations = [
    {
      icon: "ti-building-government",
      title: "Ministry of Trade & Investment",
      body: "Corporate licensing status and investment certificate confirmation flows automatically — replacing weeks of manual submission with an instant authenticated data link.",
      tag: "Licensing & compliance",
      color: "#E6F1FB",
      iconColor: "#185FA5",
    },
    {
      icon: "ti-bank",
      title: "Central Bank of Sudan",
      body: "SBG compliance profiles integrate with central credit assessment infrastructure — giving under-banked SMEs their first credible path to formal finance. A verified SBG profile becomes a credit identity.",
      tag: "Credit & finance",
      color: "#EAF3DE",
      iconColor: "#3B6D11",
    },
    {
      icon: "ti-truck",
      title: "Sudanese Customs Authority",
      body: "Digital trade verification flows replace manual document checks at the border — cutting clearance times and making Sudanese exports more competitive in regional and international markets.",
      tag: "Trade & exports",
      color: "#FAEEDA",
      iconColor: "#854F0B",
    },
    {
      icon: "ti-chart-line",
      title: "Khartoum Stock Exchange",
      body: "Listed corporate entities connect directly to the platform — synchronizing public market indicators with SBG organizational profiles for a single integrated view of Sudan's formal economy.",
      tag: "Capital markets",
      color: "#E1F5EE",
      iconColor: "#0F6E56",
    },
  ];

  const likelihoodColor = (l: string) => {
    if (l === "High") return { bg: "#FCEBEB", color: "#A32D2D" };
    if (l === "Medium") return { bg: "#FAEEDA", color: "#854F0B" };
    return { bg: "#EAF3DE", color: "#3B6D11" };
  };

  const impactColor = (i: string) => {
    if (i === "High") return { bg: "#FCEBEB", color: "#A32D2D" };
    if (i === "Medium") return { bg: "#FAEEDA", color: "#854F0B" };
    return { bg: "#EAF3DE", color: "#3B6D11" };
  };

  useEffect(() => {
  const rows = document.querySelectorAll(".step-row");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  rows.forEach((row) => observer.observe(row));
  return () => observer.disconnect();
}, []);
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

{/* ── PARALLAX IMAGE ── */}
<div
  style={{
    width: "100%",
    height: "480px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: "-20%",
      left: 0,
      width: "100%",
      height: "140%",
      objectFit: "cover",
    }}
  >
    <source src="/media/roadv3.mp4" type="video/mp4" />
  </video>
</div>

<div className="ric-products-wrapper"></div>
        {/* ── PAGE HERO ── */}
        <div className="rm-hero">
          <div className="hero-grid" />

          <div className="rm-hero-h1">
            SBG doesn't sit beside<br />
            Sudan's institutions.<br />
            <em>It connects them.</em>
          </div>
          <div className="rm-hero-sub">
            A verified business registry is only as powerful as the systems it talks to.
            The State API Integration Layer embeds SBG directly into Sudan's regulatory
            and financial architecture — making the platform the central hub for
            authenticated commercial data across the entire state apparatus.
          </div>
          <div className="rm-hero-stats">
            <div className="rm-hero-stat">
              <div className="rm-hs-num">4</div>
              <div className="rm-hs-label">State institutions<br />directly integrated</div>
            </div>
            <div className="rm-hero-stat">
              <div className="rm-hs-num">5</div>
              <div className="rm-hs-label">Operational risks<br />pre-mitigated</div>
            </div>
            <div className="rm-hero-stat">
              <div className="rm-hs-num">API</div>
              <div className="rm-hs-label">Real-time authenticated<br />data exchange</div>
            </div>
            <div className="rm-hero-stat">
              <div className="rm-hs-num">BOT</div>
              <div className="rm-hs-label">Governance framework<br />pre-established</div>
            </div>
          </div>
        </div>

        {/* ── STATE INTEGRATIONS ── */}
        <div className="sec sec-alt">
          <div className="eyebrow" style={{ fontSize: "21px"}}>Strategic Institutional Integrations</div>
          <div className="sec-h2">Four institutional connections.<br />One trusted data spine.</div>
          <div className="sec-sub">
            A company verified on SBG should not need to re-verify itself at every
            institution. The data flows — authenticated, trusted, and instant —
            across every state system that needs it.
          </div>

          <div className="rm-int-grid">
            {integrations.map((item, i) => (
              <div className="rm-int-card" key={i}>
                <div
                  className="rm-int-icon"
                  style={{ background: item.color, color: item.iconColor }}
                >
                  <i className={`ti ${item.icon}`} aria-hidden="true" />
                </div>
                <div className="rm-int-tag">{item.tag}</div>
                <div className="rm-int-title">{item.title}</div>
                <div className="rm-int-body">{item.body}</div>
              </div>
            ))}
          </div>
</div>


{/* ── PARALLAX IMAGE ── */}
<div
  style={{
    width: "100%",
    height: "480px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: "-20%",
      left: 0,
      width: "100%",
      height: "140%",
      objectFit: "cover",
    }}
  >
    <source src="/media/roadv2.mp4" type="video/mp4" />
  </video>
</div>





          {/* ── API FLOW ── */}
        <div className="sec sec-alt">
          <div className="rm-api-flow">
            <div className="rm-api-label">State API Integration Layer</div>
            <div className="rm-api-hub">
              <i className="ti ti-cpu" aria-hidden="true" />
              <span>SBG Data Hub</span>
            </div>
            <div className="rm-api-spokes">
              {["Ministry of Trade", "Central Bank", "Customs Authority", "Stock Exchange"].map((s, i) => (
                <div className="rm-api-spoke" key={i}>
                  <div className="rm-api-spoke-line" />
                  <div className="rm-api-spoke-label">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



{/* ── PARALLAX IMAGE ── */}
<div
  style={{
    width: "100%",
    height: "480px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: "-20%",
      left: 0,
      width: "100%",
      height: "140%",
      objectFit: "cover",
    }}
  >
    <source src="/media/roadv2.mp4" type="video/mp4" />
  </video>
</div>




        {/* ── IMMEDIATE ACTIONS ── */}
<div className="sec">
  <div className="eyebrow">Immediate Actions</div>
  <div className="sec-h2">Four steps to launch</div>
  <div className="sec-sub">
    Upon approval, these are the first four actions required to initialize
    the Sudan Business Gate programme.
  </div>

  <div className="steps-graph">
    {[
      {
        num: "01",
        title: "Establish the Joint Governance Committee",
        body: "Convene SBEF leadership, A-PR executives, and independent financial auditors to oversee technical execution and capital recovery protocols.",
        icon: "ti-users",
      },
      {
        num: "02",
        title: "Finalize the BOT Transition Agreement",
        body: "Ratify binding contractual milestones governing the technical lifecycle, data custodianship boundaries, and the formal handover of all platform assets to SBEF.",
        icon: "ti-file-certificate",
      },
      {
        num: "03",
        title: "Prepare primary hosting environments",
        body: "Initialize procurement and configuration of multi-region cloud servers in Egypt — establishing security configurations and encryption parameters before entering any active company records.",
        icon: "ti-server",
      },
      {
        num: "04",
        title: "Authorize the Research Unit and Support Centre",
        body: "Onboard the five-person analytical team and launch the voice support facility to begin data recovery from historical chamber ledgers and initiate the Phase 1 grassroots adoption campaign.",
        icon: "ti-chart-dots",
      },
    ].map((a, i, arr) => (
      <div className="step-row" key={i}>

        {/* Left: spine */}
        <div className="step-spine">
          <div className="step-node">
            <i className={`ti ${a.icon}`} aria-hidden="true" />
          </div>
          {i < arr.length - 1 && <div className="step-line" />}
        </div>

        {/* Right: content */}
        <div className="step-content">
          <div className="step-meta">
            <span className="step-num">Step {a.num}</span>
            {i < arr.length - 1 && <span className="step-arrow">↓</span>}
          </div>
          <div className="step-title">{a.title}</div>
          <div className="step-body">{a.body}</div>
        </div>

      </div>
    ))}
  </div>
  
</div>

        {/*
        ── FOOTER ──
        <div className="footer-wf">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">▲ Sudan Business Gate</div>
              <div className="footer-tagline">
                A-PR Multi-Activities Co. Ltd.<br />
                49th Street, Amarat, Khartoum, Sudan<br />
                apr.excu@gmail.com · +249 91 238 1655
              </div>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <div className="footer-link">Overview</div>
              <div className="footer-link">Verification tiers</div>
              <div className="footer-link">Procurement bridge</div>
              <div className="footer-link">Technology</div>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-link">About A-PR</div>
              <div className="footer-link">Roadmap</div>
              <div className="footer-link">Contact</div>
            </div>
            <div>
              <div className="footer-col-title">Register</div>
              <div className="footer-link">Business registration</div>
              <div className="footer-link">Get prospectus</div>
              <div className="footer-link">Partner with us</div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 A-PR Multi-Activities Co. Ltd. · Sudan Business Gate</div>
            <div className="footer-copy">Advancing the Narrative. Verifying the Future.</div>
          </div>
        </div>
        */}

=    </main>
  );
}
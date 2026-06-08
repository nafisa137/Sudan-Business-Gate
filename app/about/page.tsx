"use client";

import "./about.css";
import Link from "next/link";
import { useState } from "react";
export default function About() {
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

  <div className="sec sec-alt">
    <div className="eyebrow">The partnership</div>
    <div className="h2">Two institutions. One national mission.</div>
    <div className="sub">SBG is built on a Public-Private Partnership between SBEF, Sudan's principal business federation, and A-PR, the technology and communications firm proposing and operating the platform.</div>
    <div className="about-split">
      <div className="about-card">
        <div className="about-logo"><div className="about-tri"></div><div className="about-logo-text">A-PR</div></div>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#0B1A3D', marginBottom: '6px' }}>A-PR Multi-Activities Co. Ltd.</div>
        <div className="about-body">An independent public relations and communications firm integrating data intelligence with strategic storytelling. Operating partner contributing 93% of capital and assuming full technical risk during the BOT lifecycle.</div>
        <div className="about-services">
          <span className="svc-pill">Strategic Comms</span>
          <span className="svc-pill">Data Analytics</span>
          <span className="svc-pill">Digital Marketing</span>
          <span className="svc-pill">Crisis Management</span>
          <span className="svc-pill">Creative Production</span>
        </div>
      </div>
      <div className="about-card">
        <div className="sbef-logo">SBEF</div>
        <div style={{ fontSize: '11px', fontWeight: 600, color: '#0B1A3D', marginBottom: '6px' }}>Sudanese Businessmen & Employers Federation</div>
        <div className="about-body">Sudan's principal representative body of the private sector. Commissioning authority contributing 7% of capital and providing regulatory backing, institutional credibility, and data custodianship upon BOT transfer.</div>
        <div className="about-services">
          <span className="svc-pill">Regulatory authority</span>
          <span className="svc-pill">18 state chambers</span>
          <span className="svc-pill">Data sovereign owner</span>
        </div>
      </div>
    </div>
  </div>

  <div className="sec">
    <div className="eyebrow">Partnership structure</div>
    <div className="h2">Build · Operate · Transfer</div>
    <div className="sub">A structured 36-month BOT framework ensuring SBEF receives full ownership upon reaching predefined financial milestones.</div>
    <div className="bot-row">
      <div className="bot-card bot-card-b">
        <div className="bot-label bl-b">Build</div>
        <div className="bot-title">Months 1–6</div>
        <div className="bot-body">A-PR deploys 93% of capital. Builds platform, onboards chambers, establishes research centre. SBEF provides governance oversight.</div>
      </div>
      <div className="bot-card bot-card-o">
        <div className="bot-label bl-o">Operate</div>
        <div className="bot-title">Months 6–36</div>
        <div className="bot-body">Platform achieves self-sufficiency by Month 6. A-PR operates as technical custodian. Surplus funds capital recovery account.</div>
      </div>
      <div className="bot-card bot-card-t">
        <div className="bot-label bl-t">Transfer</div>
        <div className="bot-title">Month 36 or earlier</div>
        <div className="bot-body">All platform assets, IP, and data transfer completely to SBEF. A-PR exits or transitions to ongoing service partner role.</div>
      </div>
    </div>
  </div>

  <div className="sec sec-dark">
    <div className="eyebrow" style={{ color: '#C8922A' }}>Get in touch</div>
    <div className="h2-light" style={{ marginBottom: 16 }}>Contact A-PR directly</div>
    <div className="contact-row">
      <div className="contact-pill" style={{ color: '#fff', background: 'rgba(255,255,255,.07)', borderColor: 'rgba(255,255,255,.1)' }}><i className="ti ti-map-pin" style={{ fontSize: 14, color: '#C8922A' }} aria-hidden="true"></i>49th Street, Amarat, Khartoum, Sudan</div>
      <div className="contact-pill" style={{ color: '#fff', background: 'rgba(255,255,255,.07)', borderColor: 'rgba(255,255,255,.1)' }}><i className="ti ti-mail" style={{ fontSize: 14, color: '#C8922A' }} aria-hidden="true"></i>apr.excu@gmail.com</div>
      <div className="contact-pill" style={{ color: '#fff', background: 'rgba(255,255,255,.07)', borderColor: 'rgba(255,255,255,.1)' }}><i className="ti ti-phone" style={{ fontSize: 14, color: '#C8922A' }} aria-hidden="true"></i>+249 91 238 1655</div>
    </div>
  </div>
    </main>
  );
}
"use client";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";





export default function Home() {
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


const crises = [
  {
    title: "Sudan's Economy Has a Visibility Problem",
    body: `Thousands of Sudanese businesses are still operating. They have workers, equipment, supply chains, and capacity. 
           But to the outside world — to international buyers, development banks, and UN agencies — they are effectively invisible.
           The war didn't just destroy alfatih. It destroyed the records.`,
    image: "/media/alfatih.webp",

  },
  {
    title: "What Was Lost",
        body: `Trade registries. Tax ledgers. Chamber of commerce archives. Municipal licensing records. Across Sudan's commercial corridors, the physical documentation that proves a business exists — and that it can be trusted — has been damaged, displaced, or destroyed.
          Without that paper trail, there is no digital trail. And without a digital trail, there is no access to international finance, procurement contracts, or development funding.`,
        image: "/media/chalange.webp",
    },
  {
    title: "The Cost of Invisibility",
    body: `International organizations want to source locally. It is cheaper, faster, and more impactful. But their compliance rules are non-negotiable. Anti-money laundering protocols. Sanctions screening. Beneficial ownership verification. If a supplier cannot be verified, they cannot be contracted — regardless of their actual capability.
           The result? Between 60% and 85% of humanitarian and reconstruction spending leaves Sudan entirely. It flows to suppliers in neighboring countries while Sudanese businesses — fully capable of delivering — watch from the outside.
           This is not a preference. It is a systems failure.`,
image: "/media/b1.webp",
  },
  {
    title: "The Real Challenge",
    body: `This is not primarily a technology problem. It is not even purely a documentation problem.
It is an institutional coordination problem.
Sudan's private sector needs a trusted, neutral, verifiable bridge between what exists on the ground and what international institutions require on paper. Until that bridge is built, capital will continue to bypass the domestic economy — and recovery will remain out of reach.`,
image: "/media/bu.webp",
  }
];

const [activeCard, setActiveCard] = useState(0);

const nextCard = () => {
  setActiveCard((prev) => (prev + 1) % crises.length);
};


const engines = [
  {title:"One Platform. Ten Engines. One Economy!",back:`The challenge facing Sudan's private sector is not a technology gap. It is not simply a documentation problem. It is a coordination failure — and fixing it requires more than a database or a portal. The Sudan Business Gate is designed as a unified digital ecosystem: a single point of interaction where businesses, government institutions, development partners, investors, and procurement entities can all operate from the same trusted infrastructure.`},
  {title:"Not ten systems just One.",back:`Most digital transformation efforts produce a collection of disconnected tools — a registration system here, a tender portal there, a reporting dashboard somewhere else. SBG is architected differently. Every component shares the same data spine, the same verification layer, and the same identity framework.
When a business registers, it is simultaneously visible in the National Directory, eligible for procurement matching, accessible to development finance institutions, and connected to SBEF's administrative network. One action. Full ecosystem access.`},
];

  const [flipped, setFlipped] = useState(() => engines.map(() => false));

  return (
    <main>
      <div className="nav-wf">
        <div className="nav-logo-wf">
          <div className="logo-mark"><div className="logo-tri"></div></div>
          <div className="nav-brand">SBG <span>Sudan Business Gate</span></div>
        </div>
        <Link href="/" className="nl">Home</Link>
        <Link href="/platform" className="nl">Platform</Link>
        <Link href="/roadmap" className="nl">Roadmap</Link>
        <Link href="/impact" className="nl">Impact</Link>
        <Link href="/about" className="nl">About</Link>
        <Link href="/register" className="nl">Register</Link>
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
          <div className="sec-sub">
            Three interlocking crises have severed the informational bridge between
            Sudanese businesses and international capital.
          </div>
<div className="crisis-slider">
  <div
    className="crisis-card"
    onClick={nextCard}
     style={{
    backgroundImage: `url(${crises[activeCard]?.image || "/media/default.webp"})`,
  }}
  >
    <div className="crisis-title">
      {crises[activeCard].title}
    </div>

    <div className="crisis-body">
      {crises[activeCard].body}
    </div>

    <div className="crisis-stat">
      continue →
    </div>
  </div>
</div>
</div>




{/* ── PARALLAX IMAGE — replaced fixed attachment with scroll for perf ── */}
<div style={{
  width: "100%",
  height: "360px",
  position: "relative",
  overflow: "hidden",
}}>
  <div style={{
    backgroundImage: "url('/media/home3.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  }} />
</div>



<div className="grid" id="cards"></div>

<div style={{ height: "40px" }} />


        {/* ── WHO BENEFITS ── */}
        <div className="sec">
          <div className="eyebrow">Built for every stakeholder in Sudan's recovery</div>
          <div className="sec-sub">SBG is not a single-purpose tool. It is a shared infrastructure — designed so that every participant in Sudan's economic recovery finds a direct, practical reason to engage.</div>
          <div className="stake-grid">
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#E6F1FB", color: "#185FA5" }}>
                <i className="ti ti-chart-bar" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Sudanese business owners</div>
              <div className="stake-body">You are still here. You still have capacity, workers, and supply chains. What you are missing is visibility and a credential the world will trust.
SBG gives you a verified digital identity, free registration in Year 1, access to international tenders matched to your sector, and a call centre that works even without stable internet.</div>
              <div className="stake-link">View financials →</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#EAF3DE", color: "#3B6D11" }}>
                <i className="ti ti-building-government" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Government & SBEF</div>
              <div className="stake-body">SBEF modernization, data sovereignty, and full platform ownership after Month 36.</div>
              <div className="stake-link">View framework →</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#FAEEDA", color: "#854F0B" }}>
                <i className="ti ti-world" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Development organizations</div>
              <div className="stake-body">Verification trust layer, procurement localisation engine, AML/CTF-compliant supplier data.</div>
              <div className="stake-link">View platform →</div>
            </div>
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#E1F5EE", color: "#0F6E56" }}>
                <i className="ti ti-briefcase" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Business owners</div>
              <div className="stake-body">Free registration in Year 1, USSD access, SBG badge, tender matching, and call centre support.</div>
              <div className="stake-link">Register now →</div>
            </div>
          </div>
        </div>
{/* ── CAPITAL STRUCTURE ── */}
<div className="sec sec-alt">
  <div className="eyebrow">Capital structure</div>
  <div className="sec-h2">A structure built on accountability, not dependency</div>
  <div className="sec-sub">
    SBG is not a grant programme. It is a structured commercial investment with defined
    ownership, defined risk allocation, and a defined exit — designed so that Sudan's
    institutions end up owning everything.
  </div>

  {/* ── BOT EXPLANATION ── */}
  <div style={{ marginBottom: "28px" }}>
    <div style={{ fontSize: "13px", fontWeight: 500, color: "#0B1A3D", marginBottom: "8px" }}>
      The Build-Operate-Transfer model
    </div>
    <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.75, maxWidth: "620px" }}>
      A-PR builds it, operates it, recovers its capital from platform revenue, then hands
      it over — completely and permanently — to SBEF. No ongoing dependency. No licensing
      fees. No foreign ownership of national data.
    </div>
  </div>

  {/* ── THREE CAPITAL CARDS ── */}
  <div style={{ display: "flex", gap: "12px", marginBottom: "28px", flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: "160px", background: "#0B1A3D", borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>
        A-PR contribution (93%)
      </div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$212,040</div>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>
        Technical execution + full execution risk
      </div>
    </div>
    <div style={{ flex: 1, minWidth: "160px", background: "#0B1A3D", borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>
        SBEF contribution (7%)
      </div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$15,960</div>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>
        Regulatory authority + institutional governance
      </div>
    </div>
    <div style={{ flex: 1, minWidth: "160px", background: "#EAF3DE", border: ".5px solid #C0DD97", borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "10px", color: "#3B6D11", marginBottom: "4px" }}>
        Total capital requirement
      </div>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#3B6D11" }}>$228,000</div>
      <div style={{ fontSize: "10px", color: "#3B6D11", opacity: .7, marginTop: "4px" }}>
        Full platform — not just a website
      </div>
    </div>
  </div>

  {/* ── WHAT $228K FUNDS ── */}
  <div style={{ background: "#F8F7F4", borderRadius: "10px", padding: "20px", marginBottom: "28px" }}>
    <div style={{ fontSize: "12px", fontWeight: 600, color: "#0B1A3D", marginBottom: "12px", letterSpacing: ".04em" }}>
      WHAT $228,000 FUNDS
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {[
        "Multi-region cloud infrastructure (Egypt)",
        "18-state chamber rollout",
        "5-person research & intelligence centre",
        "National multilingual call centre",
        "Odoo ERP integration",
        "Progressive Web App + USSD interface",
        "Full verification compliance engine",
        "Joint Governance Board setup",
      ].map((item, i) => (
        <div key={i} style={{
          fontSize: "12px", color: "#374151",
          background: "#fff", border: ".5px solid #E5E7EB",
          borderRadius: "6px", padding: "6px 12px"
        }}>
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* ── PATH TO SELF-SUFFICIENCY ── */}
  <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "12px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>Month 6</div>
      <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>Full operational self-sufficiency reached</div>
    </div>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "12px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>150%+</div>
      <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>Revenue vs. operating costs by Month 12</div>
    </div>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "12px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>Month 36</div>
      <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>All assets, data & revenue transfer to SBEF</div>
    </div>
  </div>
</div>
        {/* ── BUDGET BREAKDOWN ── */}
        <div className="sec sec-dark">
          <div className="eyebrow" style={{ color: "#C8922A" }}>Budget breakdown</div>
          <div className="sec-h2-light" style={{ marginBottom: "20px" }}>$228,000 total — 21 line items across 8 categories</div>
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "15px",
              color: "rgba(255,255,255,.85)",
            }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
                  <th style={{ textAlign: "left", padding: "8px 10px", fontWeight: 600, color: "#C8922A", fontSize: "10px", letterSpacing: ".04em" }}>Category</th>
                  <th style={{ textAlign: "right", padding: "8px 10px", fontWeight: 600, color: "#C8922A", fontSize: "10px" }}>Amount (USD)</th>
                  <th style={{ textAlign: "right", padding: "8px 10px", fontWeight: 600, color: "#C8922A", fontSize: "10px" }}>Share</th>
                  <th style={{ textAlign: "left", padding: "8px 10px", fontWeight: 600, color: "#C8922A", fontSize: "10px" }}>Allocation</th>
                </tr>
              </thead>
              <tbody>
                {budgetCategories.map((cat, i) => (
                  <tr
  key={i}
  className="budget-row"
  style={{
    borderBottom: "1px solid rgba(255,255,255,.06)",
    animationDelay: `${i * 0.08}s`,
  }}
>
                    <td style={{ padding: "9px 10px", fontWeight: 500 }}>{cat.label}</td>
                    <td style={{ padding: "9px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                      ${cat.amount.toLocaleString()}
                    </td>
                    <td style={{ padding: "9px 10px", textAlign: "right", color: "#C8922A", fontWeight: 600 }}>{cat.share}</td>
                    <td style={{ padding: "9px 10px" }}>
                      <div
                        className="budget-bar"
                        style={{
                          height: "8px",
                          borderRadius: "999px",
                          background: "linear-gradient(90deg,#C8922A,#FFD56A)",
                          width: `${(cat.amount / 68000) * 100}%`,
                          maxWidth: "100%",
                        }}
                      ></div>
                    </td>
                  </tr>
                ))}
                <tr style={{ borderTop: "1px solid rgba(255,255,255,.2)" }}>
                  <td style={{ padding: "10px 10px", fontWeight: 700, color: "#C8922A" }}>Grand Total</td>
                  <td style={{ padding: "10px 10px", textAlign: "right", fontWeight: 700, color: "#C8922A" }}>$228,000</td>
                  <td style={{ padding: "10px 10px", textAlign: "right", fontWeight: 700, color: "#C8922A" }}>100%</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,.4)", background: "rgba(255,255,255,.05)", padding: "6px 10px", borderRadius: "6px", border: ".5px solid rgba(255,255,255,.08)" }}>
              21 budget line items · Multi-region cloud (Egypt) · Odoo ERP · PWA + USSD · 18-state rollout
            </div>
          </div>
        </div>

        {/* ── PARTNERS ── */}
        <div className="sec sec-alt">
          <div className="eyebrow">Partners & clients</div>
          <div className="sec-h2" style={{ marginBottom: "20px" }}>Trusted by institutions across Sudan</div>
          <div className="partners-bar">
            <div className="partner-pill">WHO</div>
            <div className="partner-pill">Smart Africa</div>
            <div className="partner-pill">Ministry of Trade</div>
            <div className="partner-pill">National Info. Center</div>
            <div className="partner-pill">Mutaz Elberier</div>
            <div className="partner-pill">Int'l IDEA</div>
            <div className="partner-pill">Geo & Innovation</div>
            <div className="partner-pill">Z-ER-DA</div>
            <div className="partner-pill">ARPU Plus</div>
            <div className="partner-pill">Sharik</div>
            <div className="partner-pill">Ministry of Health</div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="cta-band">
          <div className="cta-h">Ready to be part of Sudan's recovery?</div>
          <div className="cta-sub">Register your business for free in Year 1. Or request the full investment prospectus.</div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <span className="btn-wf-white">Register your business</span>
            <span className="btn-wf-outline" style={{ borderColor: "rgba(255,255,255,.4)" }}>Download prospectus</span>
          </div>
        </div>

        {/* ── FOOTER ── */}
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
              <div className="footer-link">Impact & Financials</div>
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

      </div>
    </main>
  );
}

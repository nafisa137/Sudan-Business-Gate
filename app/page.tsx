"use client";

import "./globals.css";
import Link from "next/link";

import { useEffect, useState } from "react";
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
          <div className="hero-h1">Sudan's sovereign<br />digital <em>business</em><br />infrastructure</div>
          <div className="hero-sub">
            Rebuilding commercial trust, restoring market access, and reconnecting
            Sudan's private sector to global capital — through one unified digital platform.
          </div>
          <div className="hero-btns">
            <span className="btn-wf-gold">Register your business</span>
            <span className="btn-wf-outline">View the prospectus →</span>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hs-num">25,000+</div>
              <div className="hs-label">Enterprise records<br />within 12 months</div>
            </div>
            <div className="hero-stat">
              <div className="hs-num">$40M+</div>
              <div className="hs-label">International contracts<br />matched by Year 2</div>
            </div>
            <div className="hero-stat">
              <div className="hs-num">$228K</div>
              <div className="hs-label">Total capital<br />requirement</div>
            </div>
            <div className="hero-stat">
              <div className="hs-num">Month 6</div>
              <div className="hs-label">Full operational<br />self-sufficiency</div>
            </div>
          </div>
        </div>

        {/* ── THE PROBLEM ── */}
        <div className="sec sec-alt">
          <div className="eyebrow">The problem</div>
          <div className="sec-h2">Sudan's private sector is<br />effectively invisible to the world</div>
          <div className="sec-sub">
            Three interlocking crises have severed the informational bridge between
            Sudanese businesses and international capital.
          </div>
          <div className="crisis-grid">
            <div className="crisis-card">
              <div className="crisis-num">01</div>
              <div className="crisis-title">Registry destruction</div>
              <div className="crisis-body">
                Physical commercial registries, tax ledgers, and chamber records have been
                lost or destroyed — leaving surviving businesses without verifiable credentials.
              </div>
            </div>
            <div className="crisis-card">
              <div className="crisis-num">02</div>
              <div className="crisis-title">Procurement bypass</div>
              <div className="crisis-body">
                International organizations cannot verify Sudanese suppliers under AML/CTF
                rules, so they route procurement through external regional hubs instead.
              </div>
              <div className="crisis-stat">60–85% of reconstruction spending leaks out</div>
            </div>
            <div className="crisis-card">
              <div className="crisis-num">03</div>
              <div className="crisis-title">Structural trust gap</div>
              <div className="crisis-body">
                The barrier is not institutional preference — it is a structural information
                asymmetry. Without a trusted verification bridge, the formal market risks
                total dilution.
              </div>
            </div>
          </div>
        </div>

        {/* ── THE SOLUTION ── */}
        <div className="sec sec-dark">
          <div className="solution-center">
            <div className="eyebrow" style={{ color: "#C8922A", textAlign: "center" }}>The solution</div>
            <div className="sec-h2-light" style={{ textAlign: "center" }}>
              A unified sovereign ecosystem<br />for Sudan's entire private sector
            </div>
            <div className="sec-sub-light" style={{ margin: "0 auto 24px", textAlign: "center" }}>
              SBG integrates 10 components into one platform — from digital federation
              management to government and institutional integration.
            </div>
          </div>
          <div className="sol-grid">
            <div className="sol-card">
              <div className="sol-num">01</div>
              <div className="sol-title">Digital Federation Platform</div>
              <div className="sol-body">SBEF administration, centralized member database, and regional chamber compliance.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">02</div>
              <div className="sol-title">National Business Directory</div>
              <div className="sol-body">Public ledger of operating enterprises, searchable by sector, location, and capacity.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03</div>
              <div className="sol-title">Business Verification System</div>
              <div className="sol-body">3-tier compliance engine: Silver → Gold → Platinum — trusted by DFIs and UN agencies.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">04</div>
              <div className="sol-title">Procurement & Market Access</div>
              <div className="sol-body">Automated matching of international tenders to verified local suppliers via API links.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">05</div>
              <div className="sol-title">Research & Intelligence Centre</div>
              <div className="sol-body">5-person analytical team generating ground-truth market data for recovery planning.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">06</div>
              <div className="sol-title">National Business Support Centre</div>
              <div className="sol-body">Multi-lingual call centre providing agent-assisted registration and SME onboarding.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">07</div>
              <div className="sol-title">Events & Community Platform</div>
              <div className="sol-body">Trade exhibitions, sector meetings, training sessions, and institutional trade missions.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">08</div>
              <div className="sol-title">Advocacy & Member Services</div>
              <div className="sol-body">Policy distribution, legal consultations, trade dispute reporting, and governance elections.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">09</div>
              <div className="sol-title">Data & Analytics Infrastructure</div>
              <div className="sol-body">Real-time dashboards, operational indicators, and compliance summaries for stakeholders.</div>
            </div>
            <div className="sol-card">
              <div className="sol-num">10</div>
              <div className="sol-title">Gov & Institutional Integration</div>
              <div className="sol-body">Secure API layer connecting SBG to the Central Bank, customs, ministries, and DFIs.</div>
            </div>
          </div>
        </div>

        {/* ── KPIs ── */}
        <div className="sec sec-dark" style={{ paddingTop: "0", paddingBottom: "40px" }}>
          <div className="eyebrow" style={{ color: "#C8922A", marginBottom: "16px" }}>Key performance targets</div>
          <div className="kpi-grid">
            <div className="kpi-card"><div className="kpi-num">25K+</div><div className="kpi-label">Enterprise records within 12 months</div></div>
            <div className="kpi-card"><div className="kpi-num">$40M</div><div className="kpi-label">International contracts matched by Year 2</div></div>
            <div className="kpi-card"><div className="kpi-num">150%+</div><div className="kpi-label">Self-sufficiency index by Month 12</div></div>
            <div className="kpi-card"><div className="kpi-num">18</div><div className="kpi-label">States fully onboarded within 6 months</div></div>
            <div className="kpi-card"><div className="kpi-num">30%</div><div className="kpi-label">Businesses progressing Silver → Gold in Year 1</div></div>
            <div className="kpi-card"><div className="kpi-num">Month 6</div><div className="kpi-label">Break-even & full operational self-sufficiency</div></div>
          </div>
        </div>

        {/* ── WHO BENEFITS ── */}
        <div className="sec">
          <div className="eyebrow">Who benefits</div>
          <div className="sec-h2">Built for every stakeholder</div>
          <div className="sec-sub">SBG serves four distinct audiences with tailored pathways and features.</div>
          <div className="stake-grid">
            <div className="stake-card">
              <div className="stake-icon" style={{ background: "#E6F1FB", color: "#185FA5" }}>
                <i className="ti ti-chart-bar" aria-hidden="true"></i>
              </div>
              <div className="stake-title">Investors</div>
              <div className="stake-body">BOT financial model, KPIs, self-sufficiency path, full risk matrix, and capital recovery schedule.</div>
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
          <div className="sec-h2">Public-Private Partnership — BOT model</div>
          <div className="sec-sub">
            A-PR contributes 93% of capital and assumes full technical risk. SBEF provides
            regulatory backing and 7% of funding. All assets transfer to SBEF at Month 36.
          </div>
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "160px", background: "#0B1A3D", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>A-PR contribution (93%)</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$212,040</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>Technical execution + full risk</div>
            </div>
            <div style={{ flex: 1, minWidth: "160px", background: "#0B1A3D", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>SBEF contribution (7%)</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$15,960</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>Regulatory backing + governance</div>
            </div>
            <div style={{ flex: 1, minWidth: "160px", background: "#EAF3DE", border: ".5px solid #C0DD97", borderRadius: "10px", padding: "16px" }}>
              <div style={{ fontSize: "10px", color: "#3B6D11", marginBottom: "4px" }}>Total capital requirement</div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#3B6D11" }}>$228,000</div>
              <div style={{ fontSize: "10px", color: "#3B6D11", opacity: .7, marginTop: "4px" }}>Break-even projected Month 6</div>
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

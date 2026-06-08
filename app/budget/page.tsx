
  "use client";
  import { useState, useEffect, useRef } from "react";
  import "../globals.css";
  import Link from "next/link";
  
  export default function Budget() {
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
        <Link href="/budget" className="nl active">Budget</Link>
    
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
</div>


  {/* ── THREE CAPITAL CARDS ── */}
  <div style={{ display: "flex", gap: "13px", marginBottom: "28px", flexWrap: "wrap" }}>
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
    <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "13px", letterSpacing: ".04em" }}>
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
          fontSize: "13px", color: "#374151",
          background: "#fff", border: ".5px solid #E5E7EB",
          borderRadius: "6px", padding: "6px 13px"
        }}>
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* ── PATH TO SELF-SUFFICIENCY ── */}
  <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "13px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>Month 6</div>
      <div style={{ fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>Full operational self-sufficiency reached</div>
    </div>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "13px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>150%+</div>
      <div style={{ fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>Revenue vs. operating costs by Month 12</div>
    </div>
    <div style={{ flex: 1, minWidth: "150px", borderLeft: "2px solid #C8922A", paddingLeft: "13px" }}>
      <div style={{ fontSize: "20px", fontWeight: 700, color: "#0B1A3D" }}>Month 36</div>
      <div style={{ fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>All assets, data & revenue transfer to SBEF</div>
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
      </main>
    );
  }

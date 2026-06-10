"use client";
import { useEffect, useState, useRef } from "react";
import "../globals.css";
import Link from "next/link";
import "./budget.css";
export default function Budget() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const budgetCategories = [
    { label: "Technical Infrastructure", amount: 68000, share: "29.8%", color: "#185FA5" },
    { label: "Institutional Rollout", amount: 47100, share: "20.7%", color: "#0B1A3D" },
    { label: "Direct Working Capital", amount: 25100, share: "11.0%", color: "#C8922A" },
    { label: "Operational Contingency", amount: 28000, share: "12.3%", color: "#854F0B" },
    { label: "Human Capital (Launch)", amount: 23500, share: "10.3%", color: "#f7f7f7" },
    { label: "Business Support Centre", amount: 18500, share: "8.1%", color: "#0F6E56" },
    { label: "Project Management", amount: 10000, share: "4.4%", color: "#185FA5" },
    { label: "Research & Intelligence", amount: 7800, share: "3.4%", color: "#6B21A8" },
  ];
 const risks = [
    {
      risk: "Low grassroots adoption in Phase 1",
      likelihood: "Medium",
      impact: "High",
      mitigation:
        "National Business Support Centre provides telephone-assisted registration. Physical chamber clinics deploy to low-connectivity areas. $0 entry tier maintained for all of Year 1.",
    },
    {
      risk: "Extended infrastructure and connectivity disruption",
      likelihood: "High",
      impact: "High",
      mitigation:
        "Progressive Web App caches data offline. USSD gateway operates over basic GSM voice links. Primary hosting infrastructure located in Egypt — insulated from domestic grid failures.",
    },
    {
      risk: "Data integrity failures and registration fraud",
      likelihood: "Medium",
      impact: "High",
      mitigation:
        "Tier 2 mandates human legal review. Tier 3 enforces multi-factor triangulation and physical site audits. Automated international sanctions screening runs continuously across all entities.",
    },
    {
      risk: "Ecosystem governance disputes and institutional friction",
      likelihood: "Low",
      impact: "High",
      mitigation:
        "BOT agreement establishes clear parameters before launch. Joint Governance Board gives SBEF equal representation. Legacy SBEF revenue streams are ring-fenced.",
    },
    {
      risk: "Delays in transitioning to Phase 2 marketplace",
      likelihood: "Medium",
      impact: "Medium",
      mitigation:
        "Transition triggered by documented registry density threshold — not a calendar date. Threshold supervised and confirmed by the Research Centre.",
    },
  ];

  const revenueStreams = [
    { segment: "Premium Corporate", target: "Banks, telecoms, major exporters", fee: "$3,850 / yr", value: "Multi-user profile · B2B sourcing · Priority API integration", color: "#185FA5" },
    { segment: "Medium Enterprise", target: "Manufacturing, transport, agri-cooperatives", fee: "$350 / yr", value: "Verified badge · Procurement alerts · Sector index inclusion", color: "#0B1A3D" },
    { segment: "Small & Micro Enterprise", target: "Local retail, artisans, smallholders", fee: "Free Yr 1 → $100/yr", value: "National directory · Call Centre support · Digital profile", color: "#f7f7f7" },
    { segment: "Research Licensing", target: "Bilateral aid, dev banks, multilateral funds", fee: "$5,000–$15,000 / report", value: "Sector capacity maps · Labour indicators · Field monitoring data", color: "#C8922A" },
    { segment: "B2B Advertising", target: "Legal firms, insurers, logistics, energy", fee: "$200–$400 / mo", value: "Targeted placements in member dashboards & directory searches", color: "#6B21A8" },
  ];

  const kpis = [
    { metric: "25,000+", label: "Active Enterprise Density", sub: "Authenticated records in first 12 months", icon: "🏢" },
    { metric: "$40M", label: "Procurement Localisation Value", sub: "Contracts routed via platform by end of Year 2", icon: "🌍" },
    { metric: "150%+", label: "Self-Sufficiency Index", sub: "Revenue vs. operating costs by Month 12", icon: "📈" },
    { metric: "18 / 18", label: "Chamber Network Coverage", sub: "All SBEF regional chapters onboarded in 6 months", icon: "🗺️" },
    { metric: "30%", label: "Compliance Progression", sub: "Tier 1 → Tier 2+ within first 12 months", icon: "✅" },
  ];



  const platformComponents = [
    { num: "01", name: "Digital Federation Platform", desc: "Primary SBEF admin interface — member databases, compliance, regional chamber coordination." },
    { num: "02", name: "National Business Directory", desc: "Comprehensive public ledger of Sudanese enterprises by sector, location & production capacity." },
    { num: "03", name: "Business Verification System", desc: "Phased compliance engine — document triangulation, beneficial ownership tracking." },
    { num: "04", name: "Procurement & Market Access", desc: "Automated gateway for multilateral tenders, supplier-to-supply-chain linking." },
    { num: "05", name: "Research & Intelligence Centre", desc: "5 specialists generating market reports and economic intelligence products." },
    { num: "06", name: "National Business Support Centre", desc: "Multilingual voice & SMS hub — agent-assisted registration, SME onboarding." },
    { num: "07", name: "Events & Community Platform", desc: "Trade exhibitions, sector meetings, training sessions, institutional missions." },
    { num: "08", name: "Advocacy & Member Services", desc: "Policy distribution, legal consultations, dispute reporting, governance elections." },
    { num: "09", name: "Data & Analytics Infrastructure", desc: "Real-time dashboards, operational indicators, compliance summaries." },
    { num: "10", name: "Government & Institutional Integration", desc: "Secure API routing to Central Bank, federal registries, customs, and IFIs." },
  ];

  const integrations = [
    { name: "Ministry of Trade & Investment", detail: "Automates confirmation of licensing status & investment certificates, accelerating administrative compliance processing.", icon: "🏛️" },
    { name: "Central Bank of Sudan", detail: "SBG compliance profiles create a verified identity channel for formal credit risk assessment for under-banked SMEs.", icon: "🏦" },
    { name: "Sudanese Customs Authority", detail: "Digital trade verification allows registered exporters to clear customs pipelines faster, minimizing border logistics drag.", icon: "🛃" },
    { name: "Khartoum Stock Exchange", detail: "Synchronizes listed corporate entities with SBG profiles for an integrated view of Sudan's formal economy.", icon: "📊" },
  ];

 

  const likelihoodColor = (level: string) => {
    const map: Record<string, { bg: string; color: string }> = {
      High: { bg: "rgba(220,38,38,.1)", color: "#f7f7f7" },
      Medium: { bg: "rgba(200,146,42,.1)", color: "#C8922A" },
      Low: { bg: "rgba(59,109,17,.1)", color: "#f7f7f7" },
    };
    return map[level] || map["Medium"];
  };

  const impactColor = (level: string) => {
    const map: Record<string, { bg: string; color: string }> = {
      High: { bg: "rgba(83, 90, 122, 0.1)", color: "#f7f7f7" },
      Medium: { bg: "rgba(200,146,42,.1)", color: "#C8922A" },
      Low: { bg: "rgba(59,109,17,.1)", color: "#f7f7f7" },
    };
    return map[level] || map["Medium"];
  };

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = ["/media/home3.webp", "/media/b1.webp", "/media/home2.webp"];

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
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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

{/* ── PARALLAX IMAGE ── */}
<div style={{
  width: "100%",
  height: "480px",
  position: "relative",
  overflow: "hidden",
}}>
  <div style={{
    backgroundImage: "url('/media/bu.webp')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  }} />
</div>



      {/* ── MACROECONOMIC PROBLEM STATEMENT ── */}
      <div className="macro-root">
        <div className="macro-inner">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Macroeconomic context
          </div>

          <h2 className="headline">
            The problem SBG is<br />
            <em>engineered to solve</em>
          </h2>

          <p className="subhead">
            Sudan's commercial registries have been devastated. Without verifiable business credentials, international buyers cannot legally contract with Sudanese enterprises — routing procurement to neighbouring jurisdictions instead.
          </p>

          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-num">60–85%</div>
              <div className="stat-label">of humanitarian &amp; reconstruction spending leaks out of Sudan due to the information gap</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">0</div>
              <div className="stat-label">functioning national digital business registry currently exists in Sudan</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">$40M+</div>
              <div className="stat-label">in procurement contracts projected to be re-localised via SBG within 24 months</div>
            </div>
          </div>

          <div className="leakage-bar-wrap">
            <div className="leakage-header">
              <span>Capital flow under current conditions</span>
              <span>Reconstruction spend</span>
            </div>
            <div className="leakage-track">
              <div className="leakage-fill-out"></div>
              <div className="leakage-fill-in"></div>
            </div>
            <div className="leakage-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ background: "#C8922A" }}></div>
                <span style={{ color: "rgb(255, 255, 255)" }}>~72.5% exits Sudan (regional hubs)</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ background: "#185FA5" }}></div>
                <span style={{ color: "rgb(255, 255, 255)" }}>~27.5% reaches domestic market</span>
              </div>
            </div>
          </div>

          <div className="thesis">
            <div className="thesis-label">
              <i className="ti ti-bulb" aria-hidden="true"></i>
              Core thesis
            </div>
            <div className="thesis-body">
              The capital leakage is not driven by preference for foreign vendors — it reflects a
              <strong>structural information asymmetry</strong>.
              Multilateral buyers cannot absorb the regulatory risk of unverified domestic counterparties.
              SBG closes that gap <strong>permanently</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* ── CAPITAL STRUCTURE ── */}
      {/* "A structure built on accountability, not dependency" */}
      <div className="sec sec-alt">
        <div className="eyebrow">Capital structure</div>
        <div className="sec-h2">A structure built on accountability, not dependency</div>
        <div className="sec-sub">
          SBG is not a grant programme. It is a structured commercial investment with defined ownership, defined risk allocation, and a defined exit — designed so that Sudan's institutions end up owning everything.
        </div>
        <div style={{ marginBottom: "28px" }}>
          <div className="bot-label">The Build-Operate-Transfer model</div>
          <div className="bot-description">
            A-PR builds it, operates it, recovers its capital from platform revenue, then hands it over — completely and permanently — to SBEF. No ongoing dependency. No licensing fees. No foreign ownership of national data.
          </div>
        </div>
      </div>

      {/* ── THREE CAPITAL CARDS ── */}
      <div style={{ display: "flex", gap: "13px", marginBottom: "28px", flexWrap: "wrap", padding: "0 clamp(20px,5vw,40px)" }}>
        <div className="capital-card capital-card-dark">
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>A-PR contribution (93%)</div>
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$212,040</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>Technical execution + full execution risk</div>
        </div>
        <div className="capital-card capital-card-dark">
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)", marginBottom: "4px" }}>SBEF contribution (7%)</div>
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#C8922A" }}>$15,960</div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginTop: "4px" }}>Regulatory authority + institutional governance</div>
        </div>
        <div className="capital-card capital-card-green">
          <div style={{ fontSize: "10px", color: "#f7f7f7", marginBottom: "4px" }}>Total capital requirement</div>
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#f7f7f7" }}>$228,000</div>
          <div style={{ fontSize: "10px", color: "#f7f7f7", opacity: .7, marginTop: "4px" }}>Full platform — not just a website</div>
        </div>
      </div>

      {/* ── WHAT $228K FUNDS ── */}
      <div style={{ background: "#F8F7F4", borderRadius: "10px", padding: "20px", margin: "0 clamp(20px,5vw,40px) 28px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "13px", letterSpacing: ".04em" }}>WHAT $228,000 FUNDS</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Multi-region cloud infrastructure (Egypt)", "18-state chamber rollout", "5-person research & intelligence centre", "National multilingual call centre", "Odoo ERP integration", "Progressive Web App + USSD interface", "Full verification compliance engine", "Joint Governance Board setup"].map((item, i) => (
            <div key={i} className="fund-tag">{item}</div>
          ))}
        </div>
      </div>

      {/* ── PATH TO SELF-SUFFICIENCY ── */}
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", padding: "0 clamp(20px,5vw,40px) 40px" }}>
        {[
          { val: "Month 6", sub: "Full operational self-sufficiency reached" },
          { val: "150%+", sub: "Revenue vs. operating costs by Month 12" },
          { val: "Month 36", sub: "All assets, data & revenue transfer to SBEF" },
        ].map((m, i) => (
          <div key={i} className="milestone-item">
            <div className="milestone-val">{m.val}</div>
            <div className="milestone-sub">{m.sub}</div>
          </div>
        ))}
      </div>





      {/* ── BUDGET BREAKDOWN ── */}
      <div className="sec sec-dark">
        <div className="eyebrow" style={{ color: "#C8922A" }}>Budget breakdown</div>
        <div className="sec-h2-light" style={{ marginBottom: "20px" }}>$228,000 total — 21 line items across 8 categories</div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", color: "rgba(255,255,255,.85)" }}>
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
                <tr key={i} className="budget-row" style={{ borderBottom: "1px solid rgba(255,255,255,.06)", animationDelay: `${i * 0.08}s` }}>
                  <td style={{ padding: "9px 10px", fontWeight: 500, fontSize: "14px" }}>{cat.label}</td>
                  <td style={{ padding: "9px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: "14px" }}>${cat.amount.toLocaleString()}</td>
                  <td style={{ padding: "9px 10px", textAlign: "right", color: "#C8922A", fontWeight: 600, fontSize: "14px" }}>{cat.share}</td>
                  <td style={{ padding: "9px 10px" }}>
                    <div className="budget-bar" style={{ height: "8px", borderRadius: "999px", background: "linear-gradient(90deg,#C8922A,#FFD56A)", width: `${(cat.amount / 68000) * 100}%`, maxWidth: "100%" }}></div>
                  </td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,.2)" }}>
                <td style={{ padding: "10px 10px", fontWeight: 700, color: "#C8922A", fontSize: "14px" }}>Grand Total</td>
                <td style={{ padding: "10px 10px", textAlign: "right", fontWeight: 700, color: "#C8922A", fontSize: "14px" }}>$228,000</td>
                <td style={{ padding: "10px 10px", textAlign: "right", fontWeight: 700, color: "#C8922A", fontSize: "14px" }}>100%</td>
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

      {/* ── THEORY OF CHANGE ── */}
      {/* "How the investment creates systemic impact" */}
      <div className="sec sec-gold">
        <div className="eyebrow">Theory of change</div>
        <div className="sec-h2">How the investment creates systemic impact</div>
        <div className="sec-sub">Digital infrastructure is the prerequisite for all subsequent reconstruction assistance. SBG builds the pipeline through which aid funding, development initiatives, and international procurement safely reach the local market.</div>
        <div style={{ display: "flex", alignItems: "stretch", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {[
            { label: "Proposed Investment", sub: "in SBG Digital Platform", bg: "#0B1A3D", color: "#fff", arrow: false },
            { label: "→", sub: "", bg: "transparent", color: "#C8922A", arrow: true },
            { label: "Restored Marketplace", sub: "Compliance & Verified Access", bg: "#185FA5", color: "#fff", arrow: false },
            { label: "→", sub: "", bg: "transparent", color: "#C8922A", arrow: true },
            { label: "Domestic Capital Retention", sub: "60–85% retained locally",fontSize: "14px", bg: "#39663a", color: "#ffffff", arrow: false },
          ].map((node, i) => (
            node.arrow
              ? <div key={i} style={{ fontSize: "22px", color: "#C8922A", fontWeight: 700, display: "flex", alignItems: "center" }}>→</div>
              : <div key={i} className="toc-node" style={{ background: node.bg }}>
                  <div className="toc-node-label" style={{ color: node.color }}>{node.label}</div>
                  <div className="toc-node-sub" style={{ color: node.color }}>{node.sub}</div>
                </div>
          ))}
        </div>
        <div className="infra-callout">
          <div className="infra-callout-title">The infrastructure prerequisite</div>
          <div className="infra-callout-body">
            The economic return on preserving existing enterprise networks is substantially higher than financing re-creation of lost industrial capacity. An operating business already possesses capital machinery, supply connections, and specialized talent — it needs only verification and market visibility to survive. Every enterprise that closes due to information isolation represents capital that will require significant funding to replace.
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
    <source src="/media/budgetv2.mp4" type="video/mp4" />
  </video>
</div>



      {/* ── VERIFICATION TIERS ── */}
      {/* "Three tiers of trust — built for a fragmented environment" */}
      <div className="sec sec-dark">
        <div className="eyebrow" style={{ color: "#C8922A" }}>Verification framework</div>
        <div className="sec-h2-light">Three tiers of trust — built for a fragmented environment</div>
        <div className="sec-sub-light">Progressive formalization that incentivizes compliance without creating barriers to entry. Each tier unlocks greater market access.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              tier: "Tier 1", badge: "Silver", status: "Verified Identity",
              docs: "Self-reported corporate status cross-referenced with historical SBEF paper ledgers and local chamber records.",
              access: "National Business Directory · SBEF advisory alerts · Public profile visibility",
              tierClass: "tier-silver", accessColor: "#ffffff",
            },
            {
              tier: "Tier 2", badge: "Gold", status: "Document Confirmed",
              docs: "Tax registration certificates, municipal trade licenses, and banking records subjected to manual legal compliance review.",
              access: "Procurement Marketplace · Automated tender matches · B2B networking privileges",
              tierClass: "tier-gold", accessColor: "#C8922A",
            },
            {
              tier: "Tier 3", badge: "Platinum", status: "Audited Compliance",
              docs: "Full beneficial ownership declaration, continuous sanctions screening (UN, OFAC, EU), mandatory physical site audit by chamber field units.",
              access: "DFI capital pipelines · Preferred multilateral vendor status · API data access",
              tierClass: "tier-platinum", accessColor: "#a2ccff",
            },
          ].map((t, i) => (
            <div key={i} className={`tier-card ${t.tierClass}`}>
              <div style={{ minWidth: "110px" }}>
                <div className="tier-meta">{t.tier}</div>
                <div className="tier-badge">{t.badge}</div>
                <div className="tier-status">{t.status}</div>
              </div>
              <div style={{ flex: 2, minWidth: "200px" }}>
                <div className="tier-section-label">Documentation</div>
                <div className="tier-docs">{t.docs}</div>
              </div>
              <div style={{ flex: 2, minWidth: "200px" }}>
                <div className="tier-section-label">Ecosystem Access</div>
                <div className="tier-access" style={{ color: t.accessColor }}>{t.access}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── REVENUE & MONETIZATION MATRIX ── */}
      <div className="sec sec-alt">
        <div className="eyebrow">Revenue model</div>
        <div className="sec-h2">Five revenue streams — self-sustaining by Month 6</div>
        <div className="sec-sub">The financial model is engineered for complete operational self-sufficiency without external grant cycles. Early corporate enrollment and research licensing drive initial revenue.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {revenueStreams.map((r, i) => (
            <div key={i} style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "16px 20px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: r.color, marginTop: "5px", flexShrink: 0 }}></div>
              <div style={{ flex: 2, minWidth: "160px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1A3D" }}>{r.segment}</div>
                <div style={{ fontSize: "14px", color: "#9CA3AF", marginTop: "2px" }}>{r.target}</div>
              </div>
              <div style={{ minWidth: "150px" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: r.color }}>{r.fee}</div>
                <div style={{ fontSize: "14px", color: "#9CA3AF", marginTop: "2px" }}>Proposed fee structure</div>
              </div>
              <div style={{ flex: 3, minWidth: "200px" }}>
                <div style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.65 }}>{r.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── KPI TARGETS ── */}
      <div className="sec" style={{ background: "#0B1A3D" }}>
        <div className="eyebrow" style={{ color: "#C8922A" }}>Performance benchmarks</div>
        <div className="sec-h2-light">5 audited KPIs reported quarterly to the Governance Board</div>
        <div className="sec-sub-light">Complete accountability to SBEF leadership and institutional funders — with specific, measurable targets.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.04)", border: ".5px solid rgba(255,255,255,.08)", borderRadius: "10px", padding: "20px 16px" }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{k.icon}</div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#C8922A", letterSpacing: "-.02em", lineHeight: 1 }}>{k.metric}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", marginTop: "8px", marginBottom: "4px" }}>{k.label}</div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,.4)", lineHeight: 1.55 }}>{k.sub}</div>
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
    <source src="/media/budgetv2.mp4" type="video/mp4" />
  </video>
</div>



       {/* ── RISK MATRIX ── */}
<div className="sec sec-dark">
  <div className="eyebrow" style={{ fontSize: "21px"}}>Risk Matrix & Operational Mitigations</div>
  <h2 className="sec-h2-light">We mapped the risks.<br />We built the mitigations.</h2>
  <p className="sec-sub-light" style={{ marginBottom: "48px" }}>
    Every infrastructure programme of this scale carries operational risk.
    What sets SBG apart is that the risk framework was built before the
    platform — not after the first failure.
  </p>

  <div className="rm-risk-list">
    {risks.map((r, i) => (
      <div className="rm-risk-row" key={i}>

        <div className="rm-risk-left">
          <div className="rm-risk-num">{String(i + 1).padStart(2, "0")}</div>
          <div className="rm-risk-title">{r.risk}</div>
          <div className="rm-risk-badges">
            <span className="rm-risk-badge" style={{ background: likelihoodColor(r.likelihood).bg, color: likelihoodColor(r.likelihood).color }}>
              {r.likelihood} likelihood
            </span>
            <span className="rm-risk-badge" style={{ background: impactColor(r.impact).bg, color: impactColor(r.impact).color }}>
              {r.impact} impact
            </span>
          </div>
        </div>

        <div className="rm-risk-right">
          <div className="rm-risk-mit-label">
            <span className="rm-mit-dot" />
            Mitigation
          </div>
          <div className="rm-risk-mitigation">{r.mitigation}</div>
        </div>

      </div>
    ))}
  </div>
</div>





    </main>
  );
}

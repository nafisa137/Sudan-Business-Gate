"use client";

import { useState } from "react";
import Image from "next/image";
import "./platform.css";
import Link from "next/link";



export default function Platform() {
  const engines = [
  { num: "01", title: "Digital Federation Platform", body: "The administrative core. SBEF manages its entire member network, regional chamber activities, and organizational compliance from a single interface." },
  { num: "02", title: "National Business Directory", body: "A living public ledger of Sudan's operating enterprises, searchable by sector, geography, and production capacity. The foundation of everything." },
  { num: "03", title: "Business Verification System", body: "A three-tier compliance engine that triangulates corporate legitimacy without depending on any single destroyed source. Silver. Gold. Platinum." },
  { num: "04", title: "Procurement & Market Access", body: "An automated gateway that matches international tenders to verified local suppliers in real time, across web and low-bandwidth USSD channels simultaneously." },
  { num: "05", title: "Research & Economic Intelligence Centre", body: "Five dedicated analysts converting platform data into licensed market intelligence: sector reports, pricing indexes, and investment-grade field assessments." },
  { num: "06", title: "National Business Support Centre", body: "A nationwide multilingual call centre ensuring that registration is not limited to those with stable internet. Telephone. SMS. Human assistance." },
  { num: "07", title: "Events & Community Platform", body: "The coordination layer for trade exhibitions, sector roundtables, training programmes, and institutional trade missions." },
  { num: "08", title: "Advocacy & Member Services", body: "A secure portal for policy distribution, legal consultations, trade dispute reporting, and internal SBEF governance." },
  { num: "09", title: "Data & Analytics Infrastructure", body: "Real-time dashboards and compliance summaries that give institutional stakeholders an objective, auditable view of Sudan's economic recovery in motion." },
  { num: "10", title: "Government & Institutional Integration", body: "Secure API connections to the Central Bank, Customs Authority, federal ministries, and international financial institutions — making SBG the authoritative data bridge between Sudan's private sector and the state." },
];

  const [flipped, setFlipped] = useState<number | null>(null);
  const toggle = (i: number) => setFlipped(flipped === i ? null : i);

  const rows = [engines.slice(0, 6), engines.slice(6)];

  return (
    <main>
      <div className="nav-wf">
        <div className="nav-logo-wf">
          <div className="logo-mark">
            <div className="logo-tri"></div>
          </div>
          <div className="nav-brand">
            SBG <span>Sudan Business Gateway</span>
          </div>
        </div>

        <Link href="/" className="nl">Home</Link>
        <Link href="/platform" className="nl">Platform</Link>
        <Link href="/roadmap" className="nl">Roadmap</Link>
        <Link href="/impact" className="nl">Impact</Link>
        <Link href="/about" className="nl">About</Link>
        <Link href="/register" className="nl">Register</Link>
      </div>


{/* ── PARALLAX IMAGE ── */}
<div style={{
  width: "100%",
  height: "480px",
  position: "relative",
  overflow: "hidden",
}}>
  <Image
      src="/media/home2.webp"
      alt=""
      fill
      priority
      quality={80}
      sizes="100vw"
      style={{
        objectFit: "cover",
      }} />
</div>

      <section className="sec sec-alt">
        <div className="eyebrow">The platform</div>

        <h2 className="h2">
          The ten components
        </h2>


<div>
      {rows.map((row, ri) => (
        <div className="crisis-grid" key={ri} style={{ marginBottom: "14px" }}>
          {row.map((e, i) => {
            const idx = ri * 6 + i;
            return (
              <div
                key={idx}
                className={`engine-wrap ${flipped === idx ? "flipped" : ""}`}
                onClick={() => toggle(idx)}
              >
                <div className="engine-inner">
                  {/* Front */}
                  <div className="engine-front">
                    <div>
                      <div className="engine-num">{e.num}</div>
                      <div className="engine-title">{e.title}</div>
                    </div>
                    <div className="engine-hint">tap to read →</div>
                  </div>
                  {/* Back */}
                  <div className="engine-back">
                    <div className="engine-back-num">{e.num}</div>
                    <div className="engine-back-title">{e.title}</div>
                    <div className="engine-back-body">{e.body}</div>
                    <div className="engine-back-hint">↩ tap to close</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
      </section>

      {/* ── SBEF MODERNIZATION ── */}
<div className="sec sec-dark">
  <div className="eyebrow" style={{ color: "#C8922A" }}>Institutional modernization</div>
  <div className="sec-h2-light">SBEF doesn't just host SBG.<br />SBG transforms SBEF.</div>
  <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginTop: "32px" }}>

    <div style={{ flex: 2, minWidth: "260px" }}>
      <div style={{ fontSize: "14px", color: "rgba(255,255,255,.65)", lineHeight: 1.8, marginBottom: "20px" }}>
        The Federation has operated for decades as Sudan's principal representative body
        for the private sector — but on legacy infrastructure: manual processes, paper-based
        fee collection, fragmented member records. SBG changes that from the inside out.
      </div>
      <div style={{ fontSize: "14px", color: "rgba(255,255,255,.65)", lineHeight: 1.8 }}>
        By becoming the host and eventual owner of the national business registry, SBEF
        becomes the single authoritative source for private sector data in Sudan — the
        stable, professional counterpart that international development partners need.
      </div>
    </div>

    <div style={{ flex: 1, minWidth: "220px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ background: "rgba(255,255,255,.05)", border: ".5px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "16px" }}>
        <div style={{ fontSize: "13px", color: "#C8922A", fontWeight: 600, marginBottom: "6px" }}>
          Automated administration
        </div>
        <div style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>
          Manual fee collection, compliance tracking, and chamber coordination move into
          a single system that runs automatically — eliminating revenue leakage entirely.
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: ".5px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "16px" }}>
        <div style={{ fontSize: "13px", color: "#C8922A", fontWeight: 600, marginBottom: "6px" }}>
          Real-time national visibility
        </div>
        <div style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>
          Leadership monitors economic health across all states, coordinates responses to
          supply chain disruptions, and manages compliance for thousands of firms simultaneously.
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,.05)", border: ".5px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "16px" }}>
        <div style={{ fontSize: "13px", color: "#C8922A", fontWeight: 600, marginBottom: "6px" }}>
          Sovereign data custodianship
        </div>
        <div style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>
          At Month 36, SBEF owns the registry, the platform, and every revenue stream —
          permanently, without licensing fees or external dependency.
        </div>
      </div>
    </div>

  </div>
</div>


{/* ── PARALLAX IMAGE ── */}
<div style={{
  width: "100%",
  height: "480px",
  position: "relative",
  overflow: "hidden",
}}>
  <Image
      src="/media/home1.webp"
      alt=""
      fill
      priority
      quality={80}
      sizes="100vw"
      style={{
        objectFit: "cover",
      }} />
</div>



{/* ── NATIONAL BUSINESS SUPPORT CENTRE ── */}
<div className="sec sec-alt">
  <div className="eyebrow">National Business Support Centre</div>
  <div className="sec-h2">No internet? No problem.</div>
  <div className="sec-sub">
    Digital transformation that only works for people with stable internet is not
    transformation — it is exclusion with better branding. The Support Centre is the
    human bridge that makes the entire ecosystem accessible to every Sudanese business.
  </div>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", marginBottom: "24px" }}>

    <div style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <i className="ti ti-phone-call" style={{ fontSize: "16px", color: "#C8922A" }} aria-hidden="true" />
        Grassroots onboarding
      </div>
      <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
        Agents register SMEs directly over the phone or via SMS — building official
        verified business profiles without requiring any internet connection or
        technical knowledge.
      </div>
    </div>

    <div style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <i className="ti ti-file-check" style={{ fontSize: "16px", color: "#C8922A" }} aria-hidden="true" />
        Document recovery support
      </div>
      <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
        Specialized intake officers guide business owners through locating, scanning,
        or substituting lost corporate documentation — feeding alternative evidence
        directly into the verification queue.
      </div>
    </div>

    <div style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <i className="ti ti-world" style={{ fontSize: "16px", color: "#C8922A" }} aria-hidden="true" />
        Procurement by phone
      </div>
      <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
        The Centre reads international tenders to registered SMEs, records verbal bid
        confirmations, and submits them to the marketplace. A business with no data
        connection can still compete for an international contract.
      </div>
    </div>

    <div style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <i className="ti ti-broadcast" style={{ fontSize: "16px", color: "#C8922A" }} aria-hidden="true" />
        Regulatory information
      </div>
      <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
        Real-time updates on customs regulations, trade policies, health and safety
        standards, and SBEF initiatives — distributed as a national clearinghouse
        across voice and SMS channels.
      </div>
    </div>

    <div style={{ background: "#fff", border: ".5px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1A3D", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
        <i className="ti ti-map-pin" style={{ fontSize: "16px", color: "#C8922A" }} aria-hidden="true" />
        Mobile registration clinics
      </div>
      <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>
        Physical registration teams deployed to remote areas in coordination with
        regional chamber chapters — bringing modernization directly to rural
        agricultural networks and decentralized supply chains.
      </div>
    </div>

  </div>




  {/* ── RESEARCH & INTELLIGENCE CENTRE ── */}
<div className="sec sec-dark">
  <div className="eyebrow" style={{ color: "#C8922A" }}>Research & Economic Intelligence Centre</div>
  <div className="sec-h2-light">Sudan's biggest problem isn't just<br />destroyed infrastructure. It's destroyed information.</div>
  <div className="sec-sub-light" style={{ maxWidth: "580px", marginBottom: "40px" }}>
    Policymakers cannot plan what they cannot measure. Investors cannot commit to markets
    they cannot see. The Research Centre is how SBG turns the lights back on — and funds
    itself doing it.
  </div>

  {/* ── REVENUE ENGINE CALLOUT ── */}
  <div className="ric-callout">
    <div className="ric-callout-label">Not a research department. A revenue engine.</div>
    <div className="ric-callout-body">
      Operational from Phase 1, the Centre monetizes data that flows through the ecosystem
      naturally as businesses register, verify, and transact. Every enrollment is a data point.
      Every verification is a signal. Every tender match is market intelligence.
    </div>
  </div>





  {/* ── TEAM STRUCTURE ── */}
  <div className="ric-team-label">Five people. One mandate.</div>
  
  <div className="ric-team-grid">
    <div className="ric-team-card">
      <i className="ti ti-chart-line" aria-hidden="true" />
      <div className="ric-team-role">Lead Economic Analysts</div>
      <div className="ric-team-count">2 professionals</div>
      <div className="ric-team-body">
        Macroeconomic modeling, sector capacity analysis, and regional trade policy assessments.
      </div>
    </div>
    <div className="ric-team-card">
      <i className="ti ti-database" aria-hidden="true" />
      <div className="ric-team-role">Data Specialists</div>
      <div className="ric-team-count">2 professionals</div>
      <div className="ric-team-body">
        Managing data pipelines, predictive analytics models, and automated reporting dashboards.
      </div>
    </div>
    <div className="ric-team-card">
      <i className="ti ti-map-search" aria-hidden="true" />
      <div className="ric-team-role">Senior Field Researcher</div>
      <div className="ric-team-count">1 professional</div>
      <div className="ric-team-body">
        Physical validation, localized pricing spot-checks, and qualitative market assessments
        via regional chamber networks.
      </div>
    </div>
  </div>

  {/* ── CENSUS BLOCK ── */}
  <div className="ric-census">
    <div className="ric-census-title">
      The first real-time economic census of post-disruption Sudan
    </div>
    <div className="ric-census-body">
      As enterprises enroll across the platform's verification tiers, the Centre synthesizes
      their inputs into a comprehensive, continuously updated economic census — tracking
      operational capacity, workforce metrics, logistical bottlenecks, and capital import
      requirements across all active industries. Ground-truth data. Not modeled estimates.
      Actual, verified, current market reality.
    </div>
    <div className="ric-census-stats">
      <div className="ric-census-stat">
        <div className="ric-census-num">4</div>
        <div className="ric-census-label">Dimensions tracked per enterprise</div>
      </div>
      <div className="ric-census-stat">
        <div className="ric-census-num">Live</div>
        <div className="ric-census-label">Continuously updated — not annual</div>
      </div>
      <div className="ric-census-stat">
        <div className="ric-census-num">Phase 1</div>
        <div className="ric-census-label">Activated from day one of operations</div>
      </div>
    </div>
  </div>


</div>
{/* ── COMMERCIAL PRODUCTS ── */}
<div className="ric-products-wrapper">
  <div className="ric-products-label">Three commercial products</div>
  <div className="ric-products-label-sub">
    The Centre licenses its analytical outputs through a defined product suite —
    generating revenue from Month 1, independent of registration fee scale.
  </div>

  <div className="ric-products-list">

    <div className="ric-product-row">
      <div className="ric-product-left">
        <div className="ric-product-tag-dark">Syndicated</div>
        <div className="ric-product-title-dark">Market Bulletins</div>
        <div className="ric-product-price-dark">Subscription-based licensing</div>
      </div>
      <div className="ric-product-divider" />
      <div className="ric-product-right">
        Quarterly subscription reports evaluating supply chain integrity, labor trends,
        and inflation dynamics within specific states. Licensed to bilateral aid programmes,
        development banks, and multilateral funds.
      </div>
    </div>

    <div className="ric-product-row">
      <div className="ric-product-left">
        <div className="ric-product-tag-dark">Bespoke</div>
        <div className="ric-product-title-dark">Sponsored Research</div>
        <div className="ric-product-price-dark">$5,000 – $15,000 per engagement</div>
      </div>
      <div className="ric-product-divider" />
      <div className="ric-product-right">
        Custom sector studies and geographic risk profiles commissioned by institutional
        investors conducting pre-investment due diligence. Delivered on a client-defined
        timeline with field-validated data inputs.
      </div>
    </div>

    <div className="ric-product-row" style={{ borderBottom: "none" }}>
      <div className="ric-product-left">
        <div className="ric-product-tag-dark">Continuous</div>
        <div className="ric-product-title-dark">Macro-Pricing Trackers</div>
        <div className="ric-product-price-dark">Live index access</div>
      </div>
      <div className="ric-product-divider" />
      <div className="ric-product-right">
        Continuously updated indexes tracking commodity values, domestic transport costs,
        and cross-border trade friction — essential inputs for international procurement
        planning and pre-investment risk assessment.
      </div>
    </div>

  </div>


</div>


{/* ── PARALLAX IMAGE ── */}
<div style={{
width: "100vw",
  maxWidth: "100vw",

  height: "480px",
  position: "relative",
  overflow: "hidden",
   left: "50%",
    marginLeft: "-50vw",
}}>
  <Image
      src="/media/home1.webp"
      alt=""
      fill
      priority
      quality={80}
      sizes="100vw"
      style={{
        objectFit: "cover",
      }} />
</div>


{/* ── PROCUREMENT BRIDGE ── */}
<div
  className="sec sec-dark"
  style={{
    width: "100vw",
    maxWidth: "100vw",
    position: "relative",
    left: "50%",
    marginLeft: "-50vw",
  }}
>
  <div className="eyebrow" style={{ color: "#C8922A" }}>Procurement Bridge & Market Access</div>
  <div className="sec-h2-light">Registration is not the finish line.<br />Contracts are.</div>
  <div className="sec-sub-light" style={{ marginBottom: "40px" }}>
    A business directory without market access is just a list. The Procurement Bridge
    turns the registry into an economic engine — finding tenders, matching them to
    verified suppliers, and delivering opportunity directly across web and basic phone
    networks simultaneously.
  </div>

  {/* ── FLOW DIAGRAM ── */}
  <div className="pb-flow">
    <div className="pb-flow-box pb-flow-top">
      <i className="ti ti-building-bank" aria-hidden="true" />
      <div className="pb-flow-label">International Procurement Entity</div>
      <div className="pb-flow-sub">UN agencies · INGOs · DFIs</div>
    </div>
    <div className="pb-flow-arrow">
      <div className="pb-flow-arrow-line" />
      <div className="pb-flow-arrow-tag">API link</div>
    </div>
    <div className="pb-flow-box pb-flow-engine">
      <i className="ti ti-cpu" aria-hidden="true" />
      <div className="pb-flow-label">Matching Engine</div>
      <div className="pb-flow-sub">Sector · Tier · Geography</div>
    </div>
    <div className="pb-flow-split">
      <div className="pb-flow-branch">
        <div className="pb-flow-arrow-line" />
        <div className="pb-flow-arrow-tag">Web / Email</div>
        <div className="pb-flow-box pb-flow-supplier">
          <i className="ti ti-wifi" aria-hidden="true" />
          <div className="pb-flow-label">High-bandwidth supplier</div>
        </div>
      </div>
      <div className="pb-flow-branch">
        <div className="pb-flow-arrow-line" />
        <div className="pb-flow-arrow-tag">USSD Gateway</div>
        <div className="pb-flow-box pb-flow-supplier">
          <i className="ti ti-device-mobile" aria-hidden="true" />
          <div className="pb-flow-label">Low-bandwidth supplier</div>
        </div>
      </div>
    </div>
  </div>

  {/* ── THREE OUTCOMES ── */}
  <div className="pb-outcomes">
    <div className="pb-outcome">
      <div className="pb-outcome-num">01</div>
      <div className="pb-outcome-title">Equal access</div>
      <div className="pb-outcome-body">
        Every eligible vendor sees the same opportunity at the same time — no advantage
        for better internet, no exclusion for limited connectivity.
      </div>
    </div>
    <div className="pb-outcome">
      <div className="pb-outcome-num">02</div>
      <div className="pb-outcome-title">Instant compliance dossiers</div>
      <div className="pb-outcome-body">
        Procurement officers receive instantly exportable, audit-ready supplier profiles —
        replacing multi-week due-diligence cycles with minutes.
      </div>
    </div>
    <div className="pb-outcome">
      <div className="pb-outcome-num">03</div>
      <div className="pb-outcome-title">Auditable impact</div>
      <div className="pb-outcome-body">
        Success is measured by the Procurement Localisation Value — the total dollar value
        of international contracts awarded to domestic firms. Target: $40M by Year 2.
      </div>
    </div>
  </div>
</div>

{/* ── FINANCIAL ARCHITECTURE ── */}
<div className="sec sec-alt">
  <div className="eyebrow">Commercial & Financial Architecture</div>
  <div className="sec-h2">Built for independence.<br />Not grants.</div>
  <div className="sec-sub">
    Five revenue streams. Full self-sufficiency by Month 6. An investable surplus
    by Month 12. Complete transfer to SBEF at Month 36.
  </div>

  {/* ── REVENUE STREAMS ── */}
  <div className="fa-streams">

    <div className="fa-stream-row">
      <div className="fa-stream-left">
        <div className="fa-stream-tag">Premium</div>
        <div className="fa-stream-title">Corporate Registration</div>
        <div className="fa-stream-segment">Banks · Telecoms · Major exporters · State enterprises</div>
      </div>
      <div className="fa-stream-divider" />
      <div className="fa-stream-right">
        <div className="fa-stream-price">$3,850 / year</div>
        <div className="fa-stream-value">
          Full multi-user profile, automated B2B partner sourcing, and priority API
          integration with internal ERP systems. Highest-value segment. Earliest to activate.
        </div>
      </div>
    </div>

    <div className="fa-stream-row">
      <div className="fa-stream-left">
        <div className="fa-stream-tag">Medium</div>
        <div className="fa-stream-title">Enterprise Profile</div>
        <div className="fa-stream-segment">Manufacturing · Transport · Agricultural cooperatives</div>
      </div>
      <div className="fa-stream-divider" />
      <div className="fa-stream-right">
        <div className="fa-stream-price">$350 / year</div>
        <div className="fa-stream-value">
          Verified corporate badge, automated regional procurement alerts, and
          inclusion in the sector index.
        </div>
      </div>
    </div>

    <div className="fa-stream-row">
      <div className="fa-stream-left">
        <div className="fa-stream-tag">SME</div>
        <div className="fa-stream-title">Small & Micro Enterprise</div>
        <div className="fa-stream-segment">Local retail · Artisanal workshops · Smallholders</div>
      </div>
      <div className="fa-stream-divider" />
      <div className="fa-stream-right">
        <div className="fa-stream-price">Free Year 1 · $100 thereafter</div>
        <div className="fa-stream-value">
          Free access in Year 1 is strategy, not charity. Accelerating SME enrollment
          creates the directory depth that institutional buyers require before engaging
          the procurement bridge.
        </div>
      </div>
    </div>

    <div className="fa-stream-row">
      <div className="fa-stream-left">
        <div className="fa-stream-tag">Research</div>
        <div className="fa-stream-title">Institutional Licensing</div>
        <div className="fa-stream-segment">Bilateral aid · Development banks · Multilateral funds</div>
      </div>
      <div className="fa-stream-divider" />
      <div className="fa-stream-right">
        <div className="fa-stream-price">$5,000 – $15,000 / report</div>
        <div className="fa-stream-value">
          The earliest and most predictable revenue stream — activating before the
          registry reaches scale. Customized sector maps, labor indicators, and
          field monitoring data.
        </div>
      </div>
    </div>

    <div className="fa-stream-row" style={{ borderBottom: "none" }}>
      <div className="fa-stream-left">
        <div className="fa-stream-tag">Advertising</div>
        <div className="fa-stream-title">B2B Service Placements</div>
        <div className="fa-stream-segment">Legal firms · Insurers · Logistics · Green energy</div>
      </div>
      <div className="fa-stream-divider" />
      <div className="fa-stream-right">
        <div className="fa-stream-price">$200 – $400 / month</div>
        <div className="fa-stream-value">
          Targeted placements within member dashboards and directory searches.
          Grows automatically with platform traffic — zero additional overhead.
        </div>
      </div>
    </div>

  </div>

  {/* ── SELF SUFFICIENCY TIMELINE ── */}
  <div className="fa-timeline"  style={{
    width: "100vw",
    maxWidth: "100vw",
    position: "relative",
    left: "50%",
    marginLeft: "-50vw",
  }}>
    <div className="eyebrow">Path to self-sufficiency</div>
    <div className="fa-tl-steps">
      <div className="fa-tl-step">
        <div className="fa-tl-dot" />
        <div className="fa-tl-month">Month 1</div>
        <div className="fa-tl-desc">Research licensing and premium corporate registrations activate</div>
      </div>
      <div className="fa-tl-line" />
      <div className="fa-tl-step">
        <div className="fa-tl-dot" />
        <div className="fa-tl-month">Month 6</div>
        <div className="fa-tl-desc">Full operational self-sufficiency — revenues cover 100% of operating costs</div>
      </div>
      <div className="fa-tl-line" />
      <div className="fa-tl-step">
        <div className="fa-tl-dot" />
        <div className="fa-tl-month">Month 12</div>
        <div className="fa-tl-desc">Self-sufficiency index exceeds 150% — investable surplus retained for capital recovery</div>
      </div>
      <div className="fa-tl-line" />
      <div className="fa-tl-step">
        <div className="fa-tl-dot fa-tl-dot-gold" />
        <div className="fa-tl-month" style={{ color: "#C8922A" }}>Month 36</div>
        <div className="fa-tl-desc">Full transfer to SBEF — every revenue stream, data asset, and API integration permanently sovereign</div>
      </div>
    </div>
  </div>

</div>



</div>
    </main>
  );
}

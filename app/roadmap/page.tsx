"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import "./roadmap.css";
import "../globals.css";
import Nav from "../components/Nav";


/* ── Milestone definitions ── */
const milestones = [
  {
    id: "institutional",
    label: "Institutional Integration",
    icon: "ti-building-government",
    side: "left" as const,
    x: 30,
    y: 12,
  },
  {
    id: "data-spine",
    label: "State Data Spine",
    icon: "ti-cpu",
    side: "right" as const,
    x: 70,
    y: 26,
  },
  {
    id: "finance",
    label: "Finance & Credit",
    icon: "ti-bank",
    side: "left" as const,
    x: 25,
    y: 42,
  },
  {
    id: "trade",
    label: "Trade & Exports",
    icon: "ti-truck",
    side: "right" as const,
    x: 72,
    y: 57,
  },
  {
    id: "governance",
    label: "BOT Governance",
    icon: "ti-file-certificate",
    side: "left" as const,
    x: 28,
    y: 70,
  },
  {
    id: "launch",
    label: "Launch Steps",
    icon: "ti-rocket",
    side: "right" as const,
    x: 68,
    y: 84,
  },
  {
    id: "impact",
    label: "National Impact",
    icon: "ti-chart-line",
    side: "left" as const,
    x: 32,
    y: 93,
  },
];

/* ── Section content components ── */
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

const immediateSteps = [
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
];

/* ── Section content map ── */
function getSectionContent(id: string) {
  switch (id) {
    case "institutional":
      return (
        <div className="modal-section">
          <div className="eyebrow" style={{ fontSize: "18px" }}>Strategic Institutional Integrations</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>
            Four institutional connections.<br />One trusted data spine.
          </div>
          <div className="sec-sub">
            A company verified on SBG should not need to re-verify itself at every
            institution. The data flows — authenticated, trusted, and instant —
            across every state system that needs it.
          </div>
          <div className="rm-int-grid">
            {integrations.map((item, i) => (
              <div className="rm-int-card" key={i}>
                <div className="rm-int-icon" style={{ background: item.color, color: item.iconColor }}>
                  <i className={`ti ${item.icon}`} aria-hidden="true" />
                </div>
                <div className="rm-int-tag">{item.tag}</div>
                <div className="rm-int-title">{item.title}</div>
                <div className="rm-int-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "data-spine":
      return (
        <div className="modal-section">
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
      );

    case "finance":
      return (
        <div className="modal-section">
          <div className="eyebrow">Credit &amp; Finance</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>
            A verified profile becomes a credit identity.
          </div>
          <div className="sec-sub">
            SBG compliance profiles integrate with central credit assessment infrastructure —
            giving under-banked SMEs their first credible path to formal finance.
          </div>
          <div className="rm-int-card" style={{ maxWidth: 560 }}>
            <div className="rm-int-icon" style={{ background: "#EAF3DE", color: "#3B6D11" }}>
              <i className="ti ti-bank" aria-hidden="true" />
            </div>
            <div className="rm-int-tag">Credit &amp; finance</div>
            <div className="rm-int-title">Central Bank of Sudan</div>
            <div className="rm-int-body">
              SBG compliance profiles integrate with central credit assessment infrastructure —
              giving under-banked SMEs their first credible path to formal finance.
              A verified SBG profile becomes a credit identity.
            </div>
          </div>
        </div>
      );

    case "trade":
      return (
        <div className="modal-section">
          <div className="eyebrow">Trade &amp; Exports</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>
            Faster borders. More competitive exports.
          </div>
          <div className="sec-sub">
            Digital trade verification flows replace manual document checks at the border —
            cutting clearance times and making Sudanese exports more competitive.
          </div>
          <div className="rm-int-card" style={{ maxWidth: 560 }}>
            <div className="rm-int-icon" style={{ background: "#FAEEDA", color: "#854F0B" }}>
              <i className="ti ti-truck" aria-hidden="true" />
            </div>
            <div className="rm-int-tag">Trade &amp; exports</div>
            <div className="rm-int-title">Sudanese Customs Authority</div>
            <div className="rm-int-body">
              Digital trade verification flows replace manual document checks at the border —
              cutting clearance times and making Sudanese exports more competitive in
              regional and international markets.
            </div>
          </div>
        </div>
      );

    case "governance":
      return (
        <div className="modal-section">
          <div className="eyebrow">BOT Governance Framework</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>
            A binding framework for transition and accountability.
          </div>
          <div className="sec-sub">
            The BOT Transition Agreement ratifies binding contractual milestones
            governing the technical lifecycle, data custodianship boundaries, and
            the formal handover of all platform assets to SBEF.
          </div>
          <div className="rm-hero-stats" style={{ marginTop: 32 }}>
            {[
              { num: "BOT", label: "Governance framework\npre-established" },
              { num: "API", label: "Real-time authenticated\ndata exchange" },
              { num: "5", label: "Operational risks\npre-mitigated" },
              { num: "4", label: "State institutions\ndirectly integrated" },
            ].map((s, i) => (
              <div className="rm-hero-stat" key={i} style={{ borderLeft: "2px solid #C8922A", paddingLeft: 13 }}>
                <div className="rm-hs-num" style={{ color: "#0B1A3D", fontSize: 22, fontWeight: 700 }}>{s.num}</div>
                <div className="rm-hs-label" style={{ color: "#4B5563", fontSize: 13, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "launch":
      return (
        <div className="modal-section">
          <div className="eyebrow">Immediate Actions</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>Four steps to launch</div>
          <div className="sec-sub">
            Upon approval, these are the first four actions required to initialize
            the Sudan Business Gate programme.
          </div>
          <div className="steps-graph" style={{ marginTop: 32 }}>
            {immediateSteps.map((a, i, arr) => (
              <div className="step-row visible" key={i}>
                <div className="step-spine">
                  <div className="step-node">
                    <i className={`ti ${a.icon}`} aria-hidden="true" />
                  </div>
                  {i < arr.length - 1 && <div className="step-line" style={{ transform: "scaleY(1)" }} />}
                </div>
                <div className="step-content">
                  <div className="step-meta">
                    <span className="step-num">Step {a.num}</span>
                  </div>
                  <div className="step-title">{a.title}</div>
                  <div className="step-body">{a.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "impact":
      return (
        <div className="modal-section">
          <div className="eyebrow">National Impact</div>
          <div className="sec-h2" style={{ fontSize: "clamp(22px,3vw,34px)" }}>
            SBG doesn't sit beside Sudan's institutions.<br />
            <em style={{ color: "#C8922A", fontStyle: "normal" }}>It connects them.</em>
          </div>
          <div className="sec-sub">
            A verified business registry is only as powerful as the systems it talks to.
            The State API Integration Layer embeds SBG directly into Sudan's regulatory
            and financial architecture — making the platform the central hub for
            authenticated commercial data across the entire state apparatus.
          </div>
          <div className="rm-hero-stats" style={{ marginTop: 32 }}>
            {[
              { num: "4", label: "State institutions\ndirectly integrated" },
              { num: "5", label: "Operational risks\npre-mitigated" },
              { num: "API", label: "Real-time authenticated\ndata exchange" },
              { num: "BOT", label: "Governance framework\npre-established" },
            ].map((s, i) => (
              <div className="rm-hero-stat" key={i} style={{ borderLeft: "2px solid #C8922A", paddingLeft: 13 }}>
                <div className="rm-hs-num" style={{ color: "#0B1A3D", fontSize: 22, fontWeight: 700 }}>{s.num}</div>
                <div className="rm-hs-label" style={{ color: "#4B5563", fontSize: 13, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return <div className="modal-section"><p>Content coming soon.</p></div>;
  }
}

/* ── Modal flip card ── */
function MilestoneModal({
  id,
  label,
  onClose,
}: {
  id: string;
  label: string;
  onClose: () => void;
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFlipped(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="rm-modal-overlay" onMouseDown={onClose}>
      <div
        className={`rm-modal-scene${flipped ? " rm-modal-flipped" : ""}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="rm-modal-inner">
          {/* Front face (blank side shown before flip) */}
          <div className="rm-modal-face rm-modal-front">
            <div className="rm-modal-front-glow" />
          </div>

          {/* Back face (content) */}
          <div className="rm-modal-face rm-modal-back">
            <div className="rm-modal-header">
              <div className="rm-modal-title">{label}</div>
              <button
                className="rm-modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="rm-modal-body">
              {getSectionContent(id)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main page ── */
export default function Roadmap() {
  const [activeModal, setActiveModal] = useState<{ id: string; label: string } | null>(null);
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const roadRef = useRef<SVGPathElement>(null);

  /* Scroll progress */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for node reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.nodeId;
          if (!id) return;
          setVisibleNodes((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) next.add(id);
            return next;
          });
        });
      },
      { threshold: 0.3 }
    );
    Object.values(nodeRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Road draw animation */
  useEffect(() => {
    const path = roadRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.getBoundingClientRect(); // force reflow
    path.style.transition = "stroke-dashoffset 3s cubic-bezier(0.4,0,0.2,1)";
    path.style.strokeDashoffset = "0";
  }, []);

  const openModal = useCallback((id: string, label: string) => {
    setActiveModal({ id, label });
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  /* SVG road path — winding S-curve over 5600px height, viewBox 0 0 100 100 */
  const roadPath = `
    M 50 0
    C 50 5, 80 8, 75 14
    C 70 20, 20 22, 25 30
    C 30 38, 78 40, 72 50
    C 66 60, 22 62, 27 70
    C 32 78, 75 80, 68 88
    C 62 95, 30 96, 32 100
  `;

  return (
    <main className="rm-main">
      {/* ── Progress bar ── */}
      <div
        className="rm-progress-bar"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

          <Nav />


      {/* ── Hero header ── */}
      <div className="rm-journey-hero">
        <div className="rm-journey-hero-inner">
          <div className="rm-journey-eyebrow">Strategic Transformation Journey</div>
          <h1 className="rm-journey-h1">
            SBG doesn't sit beside<br />
            Sudan's institutions.<br />
            <em>It connects them.</em>
          </h1>

          <div className="rm-journey-scroll-hint" aria-hidden="true">
            <span>Begin the journey</span>
            <div className="rm-scroll-arrow">↓</div>
          </div>
        </div>
      </div>

      {/* ── Winding road container ── */}
      <div className="rm-road-container">

        {/* SVG road */}
        <svg
          className="rm-road-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="road-shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#000" floodOpacity="0.18" />
            </filter>
            <linearGradient id="road-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e2d4d" />
              <stop offset="50%" stopColor="#0B1A3D" />
              <stop offset="100%" stopColor="#0a1628" />
            </linearGradient>
            <linearGradient id="road-progress-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C8922A" />
              <stop offset="100%" stopColor="#E8B45A" />
            </linearGradient>
          </defs>

          {/* Road border glow */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(200,146,42,0.15)"
            strokeWidth="7.5"
            strokeLinecap="round"
            filter="url(#road-shadow)"
          />

          {/* Road surface */}
          <path
            d={roadPath}
            fill="none"
            stroke="url(#road-grad)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Road center dashes */}
          <path
            d={roadPath}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeDasharray="1.5 2"
          />

          {/* Animated progress path */}
          <path
            ref={roadRef}
            d={roadPath}
            fill="none"
            stroke="url(#road-progress-grad)"
            strokeWidth="0.6"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        {/* ── Milestones ── */}
        {milestones.map((m, i) => (
          <div
            key={m.id}
            ref={(el) => { nodeRefs.current[m.id] = el; }}
            data-node-id={m.id}
            className={[
              "rm-node-wrapper",
              m.side === "left" ? "rm-node-left" : "rm-node-right",
              visibleNodes.has(m.id) ? "rm-node-visible" : "",
              activeModal?.id === m.id ? "rm-node-active" : "",
            ].join(" ")}
            style={{
              top: `${m.y}%`,
              left: m.side === "left" ? `${m.x - 12}%` : undefined,
              right: m.side === "right" ? `${100 - m.x - 12}%` : undefined,
              transitionDelay: `${i * 120}ms`,
            }}
          >
            {/* Connector line to road */}
            <div className={`rm-connector rm-connector-${m.side}`} aria-hidden="true" />

            {/* Node button */}
            <button
              className="rm-node"
              onClick={() => openModal(m.id, m.label)}
              aria-label={`Open ${m.label} section`}
            >
              <div className="rm-node-pulse" aria-hidden="true" />
              <div className="rm-node-ring" aria-hidden="true" />
              <i className={`ti ${m.icon}`} aria-hidden="true" />
            </button>

            {/* Label card */}
            <div className={`rm-node-label rm-label-${m.side}`}>
              <div className="rm-label-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="rm-label-text">{m.label}</div>
              <div className="rm-label-cta">Explore →</div>
            </div>
          </div>
        ))}

        {/* End marker */}
        <div className="rm-end-marker">
          <div className="rm-end-ring" />
          <div className="rm-end-dot" />
          <div className="rm-end-label">Sudan Business Gate</div>
        </div>
      </div>

      {/* ── Modal ── */}
      {activeModal && (
        <MilestoneModal
          key={activeModal.id}
          id={activeModal.id}
          label={activeModal.label}
          onClose={closeModal}
        />
      )}
    </main>
  );
}

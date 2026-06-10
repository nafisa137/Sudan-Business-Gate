"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Types ──────────────────────────────────────────────── */
interface Org {
  name: string;
  full: string;
  subtitle: string;
  tags: string[];
  identity: string;
  distinction: string;
  lesson: string;
  url?: string;
}

/* ─── Per-org visual config ──────────────────────────────── */
const orgVisuals: Record<
  string,
  { country: string; accent: string; bg: string; glyph: string; photo: string; url: string }
> = {
  MEDEF: {
    country: "France",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#1a2d5a 55%,#132254 100%)",
    glyph: "M",
    photo: "/media/medef.webp",
    url: "https://www.medef.com/",
  },
  DIHK: {
    country: "Germany",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#1c1c2e 55%,#0d1525 100%)",
    glyph: "D",
    photo: "/media/dihk.webp",
    url: "https://www.dihk.de/en",
  },
  BDI: {
    country: "Germany",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#12233f 55%,#0a1628 100%)",
    glyph: "B",
    photo: "/media/bdi.webp",
    url: "https://bdi.eu/en",
  },
  BCC: {
    country: "United Kingdom",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#0d1f45 55%,#091430 100%)",
    glyph: "B",
    photo: "/media/bcc.webp",
    url: "https://www.britishchambers.org.uk/",
  },
  CBI: {
    country: "United Kingdom",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#091630 55%,#060e20 100%)",
    glyph: "C",
    photo: "/media/cbi.webp",
    url: "https://www.cbi.org.uk/",
  },
  NAM: {
    country: "United States",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#14213d 55%,#0c1829 100%)",
    glyph: "N",
    photo: "/media/nam.webp",
    url: "https://nam.org/",
  },
  BRT: {
    country: "United States",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#1a1a3e 55%,#10102a 100%)",
    glyph: "B",
    photo: "/media/brt.webp",
    url: "https://www.businessroundtable.org/",
  },
  USCC: {
    country: "United States",
    accent: "#C8922A",
    bg: "linear-gradient(150deg,#0B1A3D 0%,#1f1408 55%,#140d03 100%)",
    glyph: "U",
    photo: "/media/ucc.webp",
    url: "https://www.uschamber.com/",
  },
};

/* ─── Back face (no scroll — all content sized to fit) ───── */
function CardBack({
  org,
  vis,
  onFlipBack,
  onReturn,
}: {
  org: Org;
  vis: (typeof orgVisuals)[string];
  onFlipBack: (e: React.MouseEvent) => void;
  onReturn: (e: React.MouseEvent) => void;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
      window.open(vis.url, "_blank", "noopener,noreferrer");
    };
    el.addEventListener("click", handler, { capture: true });
    return () => el.removeEventListener("click", handler, { capture: true });
  }, [vis.url]);

  return (
    <div className="ofc-face ofc-back" aria-label={`${org.name} details`}>
      <div className="ofc-back-bar" style={{ background: vis.accent }} />

      <div className="ofc-back-body">
        <div className="ofc-back-hd">
          <div className="ofc-back-hd-left">
            <div>
              <span className="ofc-back-name">{org.name}</span>
              <span className="ofc-back-full">{org.full}</span>
            </div>
          </div>
          <div className="ofc-back-hd-actions">
            <a
              ref={linkRef}
              href={vis.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ofc-icon-btn"
              aria-label={`Visit ${org.name} official website`}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M5.5 2.5H2a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 1.5h3.5v3.5M11.5 1.5 6 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <p className="ofc-back-sub">{org.subtitle}</p>
        <div className="ofc-back-divider" />

        <div className="ofc-back-blocks">
          <div className="ofc-block">
            <p className="ofc-block-label">Core identity</p>
            <p className="ofc-block-body">{org.identity}</p>
          </div>
          <div className="ofc-block">
            <p className="ofc-block-label">What makes it distinctive</p>
            <p className="ofc-block-body">{org.distinction}</p>
          </div>
        </div>

        <div className="ofc-lesson">
          <span className="ofc-lesson-eyebrow">The opportunity </span>
          <p className="ofc-lesson-text">{org.lesson}</p>
        </div>

        <div className="ofc-back-tags" aria-label="Key themes">
          {org.tags.map((t) => (
            <span className="ofc-btag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
/* ─── Single card (state-aware) ──────────────────────────── */
interface CardProps {
  org: Org;
  index: number;
  total: number;
  isActive: boolean;
  isFlipped: boolean;
  stackIndex: number; /* position within inactive stack (0 = top) */
  onActivate: () => void;
  onFlip: () => void;
  onFlipBack: () => void;
  onReturn: () => void;
}

function OrgCard({
  org,
  index,
  total,
  isActive,
  isFlipped,
  stackIndex,
  onActivate,
  onFlip,
  onFlipBack,
  onReturn,
}: CardProps) {
  const vis = orgVisuals[org.name] ?? orgVisuals["USCC"];

  /* Stack offset: fan-spread below the spotlight */
  const stackOffset = stackIndex * 18;   /* px shift per depth level   */
  const stackRotate = (stackIndex - Math.floor((total - 1) / 2)) * 3; /* subtle fan */
  const stackScale  = 1 - stackIndex * 0.025;

const handleCardClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
  if (e && (e.target as HTMLElement).closest(".ofc-icon-btn")) return;
  if (isActive) {
    onFlip();
  } else {
    onActivate();
  }
};

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleCardClick(); }
    if (e.key === "Escape") { if (isFlipped) onFlipBack(); else if (isActive) onReturn(); }
  };

  return (
    <div
      className={[
        "ofc-scene",
        isActive   ? "ofc-active"   : "ofc-stacked",
        isFlipped  ? "ofc-flipped"  : "",
      ].join(" ").trim()}
      style={
        isActive
          ? undefined
          : {
              "--stack-x": `${stackOffset}px`,
              "--stack-r": `${stackRotate}deg`,
              "--stack-s": String(stackScale),
              "--stack-z": String(total - stackIndex),
            } as React.CSSProperties
      }
  onMouseDown={(e) => handleCardClick(e)}
  onKeyDown={handleKey}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={
        isActive
          ? `${org.name} — active${isFlipped ? ", showing details" : ", click to flip"}`
          : `${org.name} — click to spotlight`
      }
    >
      <div className="ofc-inner">

        {/* ── FRONT ── */}
        <div
          className="ofc-face ofc-front"
          aria-hidden={isFlipped}
          style={{ background: vis.bg }}
        >
          {/* photo */}
          <img
            src={vis.photo}
            alt={org.name}
            className="ofc-photo"
          />
          {/* gradient overlay */}
          <div className="ofc-photo-overlay" aria-hidden="true" />

          {/* decorative glyph watermark */}
          <span className="ofc-glyph" aria-hidden="true">{vis.glyph}</span>

          {/* top row */}
          <div className="ofc-front-top">
            <span className="ofc-country">{vis.country}</span>
          </div>

          {/* bottom content */}
          <div className="ofc-front-bottom">
            <p className="ofc-name">{org.name}</p>
            <p className="ofc-full">{org.full}</p>
            <div className="ofc-front-tags">
              {org.tags.slice(0, 2).map((t) => (
                <span className="ofc-ftag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* flip hint — only on active */}
          {isActive && (
            <div className="ofc-hint" aria-hidden="true">
              <span>Flip to explore</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}

          {/* shimmer */}
          <div className="ofc-shimmer" aria-hidden="true" />
        </div>

        {/* ── BACK ── */}
        <CardBack
          org={org}
          vis={vis}
          onFlipBack={(e) => { e.stopPropagation(); onFlipBack(); }}
          onReturn={(e) => { e.stopPropagation(); onReturn(); }}
        />
      </div>
    </div>
  );
}

/* ─── Gallery (spotlight + deck) ─────────────────────────── */
export default function OrgFlipGrid({ orgs }: { orgs: Org[] }) {
  const [activeIdx, setActiveIdx]   = useState<number | null>(null);
  const [flipped,   setFlipped]     = useState(false);
  const [revealed,  setRevealed]    = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-reveal on mount */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Dismiss active card on outside click */
  useEffect(() => {
    if (activeIdx === null) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".ofc-active") && !target.closest(".ofc-stacked")) {
        handleReturn();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeIdx]);

const handleActivate = useCallback((idx: number) => {
  setFlipped(false);
  setActiveIdx(idx);
  setTimeout(() => setFlipped(true), 500);
}, []);

const handleFlip = useCallback(() => setFlipped(f => !f), []);
  const handleFlipBack = useCallback(() => setFlipped(false), []);
  const handleReturn = useCallback(() => {
    setFlipped(false);
    setActiveIdx(null);
  }, []);

  /* Build stack order: inactive cards in original index order */
  const inactiveOrgs = orgs
    .map((org, i) => ({ org, i }))
    .filter(({ i }) => i !== activeIdx);

  return (
    <section
      ref={sectionRef}
      className={`ofc-gallery${revealed ? " ofc-revealed" : ""}${activeIdx !== null ? " ofc-has-active" : ""}`}
      aria-label="Organisation profiles gallery"
    >
      {/* ── Spotlight zone ── */}
      <div className="ofc-spotlight" aria-live="polite" aria-atomic="true">
        {activeIdx !== null ? (
          <OrgCard
            key={orgs[activeIdx].name}
            org={orgs[activeIdx]}
            index={activeIdx}
            total={orgs.length}
            isActive
            isFlipped={flipped}
            stackIndex={0}
            onActivate={() => {}}
            onFlip={handleFlip}
            onFlipBack={handleFlipBack}
            onReturn={handleReturn}
          />
        ) : (
          <div className="ofc-spotlight-empty" aria-hidden="true">
            <div className="ofc-spotlight-hint">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v4M10 14v4M2 10h4M14 10h4M4.22 4.22l2.83 2.83M12.95 12.95l2.83 2.83M4.22 15.78l2.83-2.83M12.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* ── Deck zone ── */}
      <div
        className="ofc-deck"
        role="group"
        aria-label="Card deck — click any card to spotlight it"
      >
        {inactiveOrgs.map(({ org, i }, stackIndex) => (
          <OrgCard
            key={org.name}
            org={org}
            index={i}
            total={orgs.length}
            isActive={false}
            isFlipped={false}
            stackIndex={stackIndex}
            onActivate={() => handleActivate(i)}
            onFlip={() => {}}
            onFlipBack={() => {}}
            onReturn={() => {}}
          />
        ))}

        {/* Return button — only shown when a card is active */}
        {activeIdx !== null && (
          <button
            className="ofc-deck-return"
            onClick={handleReturn}
            aria-label="Return card to deck"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7A5 5 0 0 1 10.5 3.5L11 2M12 7a5 5 0 0 1-8.5 3.5L3 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Return to deck
          </button>
        )}
      </div>
    </section>
  );
}

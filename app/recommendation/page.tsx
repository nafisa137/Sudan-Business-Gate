"use client";

import "../globals.css";
import "./recommendation.css";
import Link from "next/link";
import OrgFlipGrid from "./OrgFlipGrid";
import "./OrgFlipGrid.css";
import Nav from "../components/Nav";

import { useState, useEffect, useRef } from "react";

/* ─── Data ───────────────────────────────────────────────── */
const orgs = [
  {
    name: "MEDEF",
    full: "Mouvement des Entreprises de France",
    subtitle: "France's premier employers' movement",
    tags: ["Responsible growth", "Social dialogue partner", "240,000 member firms", "Political mobilisation"],
    identity:
      "MEDEF positions itself not just as a lobby but as a movement with a social conscience. Its raison d'être — 'Agir ensemble pour une croissance responsable' — frames business success and the general interest (l'intérêt général) as inseparable.",
    distinction:
      "MEDEF is the social negotiating partner of French trade unions, sitting at the table for all national interprofessional agreements covering labour contracts, unemployment insurance, professional training, and pensions. This quasi-constitutional role in French social dialogue gives it a formal authority in labour law that equivalent bodies in the UK or US cannot claim.",
    lesson:
      "Social mandate + political mobilisation. A federation that claims a mandate to contribute to the common good — not merely defend members — gains a legitimacy that pure lobbying bodies cannot.",
  },
  {
    name: "DIHK",
    full: "German Chamber of Commerce & Industry",
    subtitle: "Umbrella of 79 regional IHKs",
    tags: ["Honourable merchant ethic", "Mandatory public membership", "Radical transparency", "One-vote democracy", "160+ year legacy"],
    identity:
      "DIHK self-describes as 'the strong voice for over three million companies — regionally anchored, nationally present, internationally connected.' Its values are rooted in the Ehrenkaufmann concept: the idea that business success and ethical conduct are inherently linked, not in tension.",
    distinction:
      "DIHK is the only organisation in this peer group that is a public-law corporation (Körperschaft des öffentlichen Rechts), supervised by Germany's Federal Ministry for Economic Affairs. Membership is mandatory by law for most commercial businesses — making it structurally democratic in a way no voluntary business body can claim. General Assembly meetings are public, agendas published in advance, minutes published afterwards.",
    lesson:
      "Structural legitimacy beats reputational legitimacy. A chamber whose membership is legally mandated — and whose governance is radically transparent — commands a different quality of trust from government and investors than a voluntary lobby group.",
  },
  {
    name: "BDI",
    full: "Federation of German Industries",
    subtitle: "Voice of German industrial manufacturing",
    tags: ["Social market economy", "Sustainable free trade", "Technological ingenuity", "Resilience agenda", "Climate-neutral industry"],
    identity:
      "BDI's values centre on three pillars it believes define Germany's identity: Industrieland (industrial nation), Exportland (export-oriented economy), and Innovationsland (innovative country). Its mission is to ensure Germany remains all three simultaneously.",
    distinction:
      "BDI is grounded in the social market economy (Soziale Marktwirtschaft) — a distinctly German model that embraces market competition while insisting on a social framework. Unlike the more ideological US counterparts, BDI does not oppose regulation as a concept; it opposes inefficient, excessive, or poorly designed regulation. This technocratic nuance makes it uniquely credible with European regulators. BDI has made 'resilience' its organising concept for 2026.",
    lesson:
      "Technocratic credibility over ideological posture. A federation that distinguishes between bad regulation and regulation as such earns a seat at the drafting table — not just the protest table.",
  },
  {
    name: "BCC",
    full: "British Chambers of Commerce",
    subtitle: "Network-first chamber body, 160+ years old",
    tags: ["Relational philosophy", "Network-first identity", "Community empowerment", "160-year legacy", "Global reach"],
    identity:
      "The BCC's mission is explicitly derived from and in service of its member chambers — not the other way around. It describes itself as 'the only organisation that helps British businesses to build relationships on every level — locally, nationally, and internationally.' The BCC sees itself as infrastructure for business communities, not merely a lobbying body.",
    distinction:
      "The BCC has arguably the most diverse digital feature set of any peer organisation: ChamberCustoms (customs clearance), an AI Academy, a Trade Accelerator, a Diplomatic Advisory Hub, and CBAM carbon calculators for exporters. Its 51 accredited UK chambers and 75+ international market presence give it a genuinely grassroots reach that national lobbying bodies lack.",
    lesson:
      "Community infrastructure is a moat. An organisation that builds relationships and practical tools — not just advocacy — becomes indispensable to its members in a way that policy-only bodies never achieve.",
  },
  {
    name: "CBI",
    full: "Confederation of British Industry",
    subtitle: "Voice of UK business since 1965",
    tags: ["Co-created values", "Largest policy unit outside Whitehall", "Diversity & pay gap transparency", "Post-crisis governance"],
    identity:
      "The CBI positions itself as 'the voice of business since 1965' and identifies its role as being 'the largest policy unit outside of Whitehall' — framing it as a quasi-governmental intelligence and analysis centre, not merely a lobby. Its tagline: 'Pro-business legislation doesn't happen by accident.'",
    distinction:
      "The CBI's values were explicitly co-created by its people through an internally democratic process. Its continued operation following a serious governance crisis in 2023 — and its recommitment to high-conduct standards through an updated Code of Conduct and Council for Integrity — gives its values statements a tested quality absent from organisations that have never faced such scrutiny.",
    lesson:
      "Crisis governance as credibility. A federation that publicly confronts institutional failure and emerges with reformed governance demonstrates an institutional maturity that no clean-record organisation can replicate.",
  },
  {
    name: "NAM",
    full: "National Association of Manufacturers",
    subtitle: "Voice of 13 million American manufacturing workers",
    tags: ["People-first framing", "Extension of your team", "Power of small", "Legal accountability", "125+ year legacy"],
    identity:
      "NAM's self-description is striking: 'The NAM isn't just another trade association. It is your support system, your resource, your champion and your voice.' It describes itself explicitly as an 'extension of your team' — a service-oriented framing that positions NAM as operational infrastructure for manufacturers, not just a political voice.",
    distinction:
      "Despite including Fortune 100 giants, 90% of NAM's members are small and mid-size manufacturers. NAM explicitly celebrates this as 'the power of small' — the idea that large manufacturers lending their voice amplifies the concerns of small ones. The NAM Legal Center fights cases to the Supreme Court on behalf of manufacturers, reflecting a values commitment that rule of law and judicial accountability matter as much as legislative wins.",
    lesson:
      "Amplify the small through the large. A federation that uses its heavyweight members as loudspeakers for SME concerns — rather than the reverse — builds a populist credibility that elite-only organisations cannot achieve.",
  },
  {
    code: "US",
    name: "BRT",
    full: "Business Roundtable",
    subtitle: "200+ CEOs of America's largest companies",
    tags: ["Stakeholder capitalism", "Superseded shareholder primacy", "Enlightened capitalism", "CEO-personal engagement", "Inclusive prosperity"],
    identity:
      "BRT is an association of more than 200 chief executive officers of America's leading companies, collectively representing every sector of the US economy and supporting one in four American jobs. Policy positions are developed through CEO-led committees — meaning the most powerful executives in America personally engage in policy advocacy.",
    distinction:
      "In 2019, BRT fundamentally redefined corporate purpose. Since 1997 it had stated that corporations exist principally to serve shareholders. BRT explicitly superseded this with a new statement committing CEOs to five stakeholder groups — customers, employees, suppliers, communities, and shareholders, in that order. This was a landmark rejection of pure shareholder primacy by the most powerful business organisation in America.",
    lesson:
      "Redefine the purpose, not just the policy. The most durable institutional acts are philosophical — not lobbying wins, but public redefinitions of what business is for.",
  },
  {
    code: "US",
    name: "USCC",
    full: "U.S. Chamber of Commerce",
    subtitle: "World's largest business organisation",
    tags: ["World's largest biz org", "All sectors", "Political advocacy", "Free enterprise", "Civic-nationalist framing"],
    identity:
      "The USCC describes itself as the world's largest business organisation, with a four-word mission: 'We advocate, connect, inform, and fight.' That word 'fight' is deliberate and distinguishing — it reflects a combative, litigious, and politically aggressive posture that none of the European equivalents would use in their own self-description.",
    distinction:
      "The USCC's foundational belief — unchanged since its founding — is that American businesses have the ability to improve lives, solve problems, and strengthen society. It frames the relationship between citizens, business, and government as a tripartite partnership: when all three work together, 'America works.' This civic-nationalist framing of business as essential to democratic health is more explicitly patriotic than any European counterpart.",
    lesson:
      "Scale confers a different kind of authority. An organisation that frames business as essential to democratic health — and backs it with the broadest possible membership — speaks to governments in a register that narrow sector associations cannot.",
  },
];

const insights = [
  {
    num: "01",
    title: "Structural legitimacy beats reputational legitimacy",
    body: "DIHK's mandatory public-law membership and MEDEF's quasi-constitutional role in social dialogue demonstrate that the most durable institutional authority derives from legal or constitutional position — not lobbying clout. SBG should pursue formal recognition under Sudanese commercial law as a credentialing authority.",
  },
  {
    num: "02",
    title: "Verification architecture is a differentiator",
    body: "None of the nine peer organisations operate a tiered business verification system comparable to SBG's Silver–Gold–Platinum framework. This is a genuine gap in the global landscape. The closest analogue — DIHK's mandatory compliance checks — is built into law rather than platform design. SBG's verification layer is therefore a novel institutional offering.",
  },
  {
    num: "03",
    title: "Community infrastructure creates stickiness",
    body: "BCC's ChamberCustoms, AI Academy, and Trade Accelerator demonstrate that practical tooling creates a deeper dependency than policy advocacy alone. SBG's National Business Support Centre and USSD gateway are the equivalent infrastructure play for Sudan's operating environment.",
  },
  {
    num: "04",
    title: "The biggest gap is cross-border coordination",
    body: "None of these organisations have a multilingual or coordinated cross-border advocacy capacity matching the scale of the international challenges they face. SBG's architecture — connecting verified Sudanese enterprises to international DFI pipelines and procurement markets — directly addresses a gap that even the world's largest business organisations have not solved.",
  },
  {
    num: "05",
    title: "Redefine purpose at the founding moment",
    body: "BRT's 2019 stakeholder capitalism statement demonstrates that the most impactful institutional acts are philosophical. SBG should articulate its founding purpose in terms that go beyond trade facilitation — positioning the federation as essential to Sudan's sovereign economic reconstruction.",
  },
];

/* ─── Scroll-reveal hook ─────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

/* ─── RevealDiv component ────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}) {
  const ref = useReveal();
  const base = direction === "left" ? "reveal-left" : "reveal";
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <div ref={ref} className={`${base} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

/* ─── Page component ─────────────────────────────────────── */
export default function Recommendation() {

  // Staggered org card reveal
  const orgGridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const grid = orgGridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".rec-org-card"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLElement);
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, idx * 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.2s ease, box-shadow 0.2s ease";
      obs.observe(card);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <main>

    

          <Nav />


      <div className="sec-divider-dark" aria-hidden="true" />

      {/* ── ORG PROFILES ── */}
      <section className="sec sec-alt" aria-labelledby="profiles-heading">
        <div className="sec-inner">
          <Reveal>
            <p className="eyebrow">Organisation profiles</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="profiles-heading" className="h2">What does it actually mean to represent a country's businesses?</h2>
          </Reveal>
 <OrgFlipGrid orgs={orgs} />
        </div>
      </section>

      <div className="sec-divider" aria-hidden="true" />

      {/* ── STRATEGIC INSIGHTS ── */}
      <section className="sec" aria-labelledby="insights-heading">
        <div className="sec-inner">
          <Reveal>
            <p className="eyebrow">Strategic insights</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="insights-heading" className="h2">
            SBG's starting position
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="sub">
              Drawn from the competitive analysis — design principles that
              the world's most effective business federations embody, and
              that SBG is positioned to implement from day one.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="rec-insight-list" role="list">
              {insights.map((ins, i) => (
                <div className="rec-insight-row" key={ins.num} role="listitem">
                  <div className="rec-insight-num-col" aria-hidden="true">
                    <span className="rec-insight-num">{ins.num}</span>
                  </div>
                  <div className="rec-insight-content">
                    <h3 className="rec-insight-title">{ins.title}</h3>
                    <p className="rec-body">{ins.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sec-divider-dark" aria-hidden="true" />

      {/* ── STRUCTURAL COMPARISON ── */}
      <section className="sec sec-dark" aria-labelledby="comparison-heading">
        <div className="sec-inner">
          <Reveal>
            <p className="eyebrow-light">Structural models</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 id="comparison-heading" className="h2-light">
              Two very different traditions.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="sub-light">
              European and American federations have evolved along fundamentally
              different lines — with implications for how SBG should position
              its own model internationally.
            </p>
          </Reveal>

          <div className="rec-compare-grid">
            <Reveal delay={1}>
              <div className="rec-compare-card">
                <p className="rec-compare-region">European model</p>
                <h3 className="rec-compare-title">Structural authority</h3>
                <p className="rec-body-light">
                  Germany's DIHK is a public-law corporation with mandatory
                  membership for most commercial businesses — giving it a
                  legitimacy and reach across more than 3 million companies that
                  no voluntary body can match. France's MEDEF and the UK's
                  CBI/BCC derive their authority from lobbying clout and
                  quasi-constitutional social dialogue roles rather than legal
                  status.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="rec-compare-card">
                <p className="rec-compare-region">American model</p>
                <h3 className="rec-compare-title">Democratic authority</h3>
                <p className="rec-body-light">
                  The U.S. Chamber describes itself as the world's largest
                  business organisation — breadth as authority. NFIB's policy
                  positions are established directly by and for its members via
                  ballot — a genuinely democratic structure none of the European
                  counterparts match. The Business Roundtable speaks with the
                  weight of CEOs who personally engage, not staff proxies.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={3}>
            <div className="rec-gap-box">
              <p className="rec-gap-label">The global gap — and SBG's opportunity</p>
              <p className="rec-body-light">
                None of these organisations — including the world's largest —
                have a multilingual or coordinated cross-border advocacy capacity
                matching the scale of the challenges they face. No peer
                organisation operates a tiered business verification system
                comparable to SBG's. No peer combines verification, market
                access, procurement linkage, and government API integration in a
                single platform. SBG is not catching up to a global standard.
                It is ahead of it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

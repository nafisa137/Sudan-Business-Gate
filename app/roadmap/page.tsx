import "./roadmap.css";
import Link from "next/link";
export default function Register() {
  return (
    <main>


          <div className="nav-wf">
            <div className="nav-logo-wf">
              <div className="logo-mark"><div className="logo-tri"></div></div>
              <div className="nav-brand">SBG <span>Sudan Business Gateway</span></div>
            </div>

           
            <Link href="/" className="nl">Home</Link>
            <Link href="/platform" className="nl">Platform</Link>
            <Link href="/roadmap" className="nl">Roadmap</Link>
            <Link href="/impact" className="nl">Impact</Link>
            <Link href="/about" className="nl">About</Link>
            <Link href="/register" className="nl">Register</Link>
          </div>

  <div className="sec sec-alt">
    <div className="eyebrow">Strategic roadmap</div>
    <div className="h2">Four phases from census to global integration</div>
    <div className="sub">A disciplined, evidence-based rollout where each phase unlocks the next only upon reaching measurable milestones.</div>

    <div style={{ position: "relative", marginBottom: 12 }}>
      <div className="phase-line"></div>
      <div className="phase-line-fill"></div>
      <div className="phase-row">
        <div className="phase">
          <div className="phase-dot pd-active">1</div>
          <div className="phase-num">Phase 1</div>
          <div className="phase-title">Sovereign Census & Registry</div>
          <div className="phase-sub">Digital backbone, SBG badge, onboarding</div>
          <span className="phase-status s-active">Active</span>
        </div>
        <div className="phase">
          <div className="phase-dot pd-next">2</div>
          <div className="phase-num">Phase 2</div>
          <div className="phase-title">Supply Chain Restoration</div>
          <div className="phase-sub">Procurement engine, policy dashboard</div>
          <span className="phase-status s-next">Next</span>
        </div>
        <div className="phase">
          <div className="phase-dot pd-future">3</div>
          <div className="phase-num">Phase 3</div>
          <div className="phase-title">Financial Frameworks</div>
          <div className="phase-sub">Stock exchange, credit access, talent</div>
          <span className="phase-status s-planned">Planned</span>
        </div>
        <div className="phase">
          <div className="phase-dot pd-future">4</div>
          <div className="phase-num">Phase 4</div>
          <div className="phase-title">Joint Council Gateway</div>
          <div className="phase-sub">Global bilateral integration</div>
          <span className="phase-status s-planned">Planned</span>
        </div>
      </div>
    </div>

    <div className="phase-cards">
      <div className="pc active-pc">
        <div className="pc-phase">Phase 1 — Active</div>
        <div className="pc-title">Sovereign Census & Registry</div>
        <div className="pc-item">Build Odoo ERP core</div>
        <div className="pc-item">Launch National Business Directory</div>
        <div className="pc-item">Issue SBG badges (Silver tier)</div>
        <div className="pc-item">Onboard 18 state chambers</div>
        <div className="pc-item">Research Centre setup</div>
      </div>
      <div className="pc">
        <div className="pc-phase">Phase 2</div>
        <div className="pc-title">Supply Chain Restoration</div>
        <div className="pc-item">Activate procurement matching</div>
        <div className="pc-item">Launch Policy Impact Dashboard</div>
        <div className="pc-item">International buyer API links</div>
        <div className="pc-item">Gold & Platinum tier rollout</div>
      </div>
      <div className="pc">
        <div className="pc-phase">Phase 3</div>
        <div className="pc-title">Financial Frameworks</div>
        <div className="pc-item">KSE market integration</div>
        <div className="pc-item">Micro-finance access pathways</div>
        <div className="pc-item">Talent portal launch</div>
        <div className="pc-item">Sukuk & Musharaka tracking</div>
      </div>
      <div className="pc">
        <div className="pc-phase">Phase 4</div>
        <div className="pc-title">Joint Council Gateway</div>
        <div className="pc-item">Bilateral gateway activation</div>
        <div className="pc-item">Diaspora investment portal</div>
        <div className="pc-item">Foreign trade chamber links</div>
        <div className="pc-item">iOS / Android native apps</div>
      </div>
    </div>
  </div>

  <div className="sec-gold">
    <div className="eyebrow">Immediate next steps</div>
    <div className="h2" style={{ marginBottom: 16 }}>Actions upon programme approval</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '.5px solid #FAC775' }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#C8922A', marginBottom: 4 }}>A · Contract formalization</div>
        <div style={{ fontSize: 10, color: '#4A5568', lineHeight: 1.6 }}>Finalize technical scopes, SLAs, and hosting budgets. Initialize sandboxed databases and secure servers.</div>
      </div>
      <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '.5px solid #FAC775' }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: '#C8922A', marginBottom: 4 }}>B · Dual-track discovery</div>
        <div style={{ fontSize: 10, color: '#4A5568', lineHeight: 1.6 }}>Track 1: SBEF board consultation (3 weeks). Track 2: Chamber field exploration (2 weeks, parallel).</div>
      </div>
    </div>
  </div>

    </main>
  );
}
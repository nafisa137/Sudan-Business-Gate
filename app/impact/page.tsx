import "./impact.css";
import Link from "next/link";
export default function Impact() {
  return (
    <main>
  <div className="wf">
         
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

  <div className="sec-dark">
    <div className="eyebrow" style={{color:"#C8922A"}}>Investor-grade metrics</div>
    <div className="h2-light" style={{marginBottom:"20px"}}>Performance targets, audited quarterly</div>
    <div className="kpi-grid">
      <div className="kpi-card"><div className="kpi-num">25,000+</div><div className="kpi-label">Enterprise records enrolled within first 12 months</div></div>
      <div className="kpi-card"><div className="kpi-num">$40M+</div><div className="kpi-label">International contracts localised by end of Year 2</div></div>
      <div className="kpi-card"><div className="kpi-num">150%+</div><div className="kpi-label">Operational self-sufficiency index by Month 12</div></div>
      <div className="kpi-card"><div className="kpi-num">18</div><div className="kpi-label">Sudanese states fully onboarded within 6 months</div></div>
      <div className="kpi-card"><div className="kpi-num">30%+</div><div className="kpi-label">Businesses progressing Silver → Gold within Year 1</div></div>
      <div className="kpi-card"><div className="kpi-num">Month 6</div><div className="kpi-label">Full operational self-sufficiency achieved</div></div>
    </div>
  </div>

  <div className="sec sec-alt">
    <div className="eyebrow">Revenue model</div>
    <div className="h2">Five streams to self-sufficiency</div>
    <div className="sub">The financial model is engineered to achieve full self-sufficiency by Month 6, driven by early corporate enrollment and research licensing.</div>
    <div className="rev-row">
      <div className="rev-item">
        <div className="rev-label">Premium corporate registration</div>
        <div className="rev-bar-wrap"><div className="rev-bar" style={{width:"90%"}}></div></div>
        <div className="rev-price">$3,850 / year</div>
      </div>
      <div className="rev-item">
        <div className="rev-label">Research licensing (per report)</div>
        <div className="rev-bar-wrap"><div className="rev-bar" style={{width:"80%"}}></div></div>
        <div className="rev-price">$5K–$15K</div>
      </div>
      <div className="rev-item">
        <div className="rev-label">Medium enterprise registration</div>
        <div className="rev-bar-wrap"><div className="rev-bar" style={{width:"45%"}}></div></div>
        <div className="rev-price">$350 / year</div>
      </div>
      <div className="rev-item">
        <div className="rev-label">B2B advertising placements</div>
        <div className="rev-bar-wrap"><div className="rev-bar" style={{width:"30%"}}></div></div>
        <div className="rev-price">$200–$400 / mo</div>
      </div>
      <div className="rev-item">
        <div className="rev-label">Small enterprise (Year 2+)</div>
        <div className="rev-bar-wrap"><div className="rev-bar" style={{width:"15%"}}></div></div>
        <div className="rev-price">$100 / year</div>
      </div>
    </div>
  </div>

  <div className="sec">
    <div className="eyebrow">Path to self-sufficiency</div>
    <div className="h2" style={{marginBottom:"16px"}}>Total capital requirement: $228,000</div>
    <div style={{display:"flex",gap:"10px",marginBottom:"16px"}}>
      <div style={{flex:1,background:"#0B1A3D",borderRadius:"10px",padding:"14px"}}>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.5)",marginBottom:"4px"}}>SBEF contribution (7%)</div>
        <div style={{fontSize:"20px",fontWeight:700,color:"#C8922A"}}>$15,960</div>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.35)",marginTop:"4px"}}>Regulatory backing + governance</div>
      </div>
      <div style={{flex:1,background:"#0B1A3D",borderRadius:"10px",padding:"14px"}}>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.5)",marginBottom:"4px"}}>A-PR contribution (93%)</div>
        <div style={{fontSize:"20px",fontWeight:700,color:"#C8922A"}}>$212,040</div>
        <div style={{fontSize:"10px",color:"rgba(255,255,255,.35)",marginTop:"4px"}}>Technical execution + full risk</div>
      </div>
      <div style={{flex:1,background:"#EAF3DE",border:".5px solid #C0DD97",borderRadius:"10px",padding:"14px"}}>
        <div style={{fontSize:"10px",color:"#3B6D11",marginBottom:"4px"}}>Year 1 projected revenue</div>
        <div style={{fontSize:"20px",fontWeight:700,color:"#3B6D11"}}>$57,500</div>
        <div style={{fontSize:"10px",color:"#3B6D11",opacity:.7,marginTop:"4px"}}>Covers 66% of setup scope</div>
      </div>
    </div>
    <div style={{fontSize:"11px",fontWeight:500,color:"#0B1A3D",marginBottom:"6px"}}>Self-sufficiency timeline</div>
    <div className="suf-row">
      <div className="suf-seg" style={{width:"16%",background:"#FCEBEB",color:"#A32D2D"}}>M1–3<br />Build</div>
      <div className="suf-seg" style={{width:"16%",background:"#FAEEDA",color:"#854F0B"}}>M4–5<br />Launch</div>
      <div className="suf-seg" style={{width:"16%",background:"#FAC775",color:"#633806"}}>M6<br />✓ Break-even</div>
      <div className="suf-seg" style={{width:"26%",background:"#C0DD97",color:"#27500A"}}>M7–12 · 150% surplus</div>
      <div className="suf-seg" style={{width:"26%",background:"#2A9D6E",color:"#fff"}}>Year 2+ · Reinvest & transfer</div>
    </div>
  </div>

  <div className="sec sec-alt">
    <div className="eyebrow">Risk matrix</div>
    <div className="h2" style={{marginBottom:"16px"}}>Identified risks & mitigations</div>
    <table className="risk-table">
      <thead>
        <tr><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Mitigation</th></tr>
      </thead>
      <tbody>
        <tr><td>Low adoption in Phase 1</td><td><span className="pill-med">Medium</span></td><td><span className="pill-hi">High</span></td><td>Call centre onboarding; free Year 1 tier; physical clinics</td></tr>
        <tr><td>Infrastructure disruption</td><td><span className="pill-hi">High</span></td><td><span className="pill-hi">High</span></td><td>PWA offline caching; USSD fallback; Egypt hosting cluster</td></tr>
        <tr><td>Data fraud</td><td><span className="pill-med">Medium</span></td><td><span className="pill-hi">High</span></td><td>Human verification at Tier 2; sanctions screening at Tier 3</td></tr>
        <tr><td>Governance disputes</td><td><span className="pill-lo">Low</span></td><td><span className="pill-hi">High</span></td><td>BOT agreement; Joint Governance Board; ring-fenced revenue</td></tr>
        <tr><td>Phase 2 delay</td><td><span className="pill-med">Medium</span></td><td><span className="pill-med">Medium</span></td><td>Evidence-based trigger (registry density) not calendar date</td></tr>
      </tbody>
    </table>
  </div>
</div>

    </main>
  );
}
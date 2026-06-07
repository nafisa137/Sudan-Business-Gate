import "./platform.css";
import Link from "next/link";

export default function Platform() {
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

      <section className="sec sec-alt">
        <div className="eyebrow">The platform</div>

        <h2 className="h2">
          10 integrated components.
          <br />
          One sovereign ecosystem.
        </h2>

        <p className="sub">
          SBG is not a directory — it is a complete institutional
          infrastructure combining verification, market access,
          analytics, and support into a single unified environment
          operated under the Sudanese Businessmen and Employers
          Federation (SBEF).
        </p>

        {/* Row 1 */}
          <div className="crisis-grid">
            <div className="crisis-card">
            <div className="crisis-num">01</div>
            <div className="crisis-title">Digital Federation Platform</div>
            <div className="crisis-body">
              Primary interface for SBEF administration, centralised
              member databases, organisational compliance, and regional
              chamber coordination.
            </div>
          </div>

            <div className="crisis-card">
            <div className="crisis-num">02</div>
            <div className="crisis-title">National Business Directory</div>
            <div className="crisis-body">
              A comprehensive public ledger of operating Sudanese
              enterprises, categorised by industry sector, geographical
              location, and current production capacity.
            </div>
          </div>

            <div className="crisis-card">
            <div className="crisis-num">03</div>
            <div className="crisis-title">Business Verification System</div>
            <div className="crisis-body">
              A three-tier compliance engine — Silver, Gold, and Platinum
              — that triangulates corporate legitimacy through document
              review and beneficial ownership tracking.
            </div>
          </div>
            <div className="crisis-card">
            <div className="crisis-num">04</div>
            <div className="crisis-title">
              Procurement &amp; Market Access
            </div>
            <div className="crisis-body">
              An automated gateway hosting multilateral tenders, linking
              verified local suppliers to international supply chains, and
              tracking procurement localisation value (PLV).
            </div>
          </div>

            <div className="crisis-card">
            <div className="crisis-num">05</div>
            <div className="crisis-title">
              Research &amp; Economic Intelligence Centre
            </div>
            <div className="crisis-body">
              A dedicated analytical unit of five specialists producing
              syndicated market bulletins, bespoke sector studies, and
              macro-pricing trackers for institutional buyers.
            </div>
          </div>
          <div className="crisis-card">
            <div className="crisis-num">06</div>
            <div className="crisis-title">
              National Business Support Centre
            </div>
            <div className="crisis-body">
              A nationwide multi-lingual voice and SMS hub providing
              agent-assisted registration, document verification support,
              and SME onboarding for enterprises with limited connectivity.
            </div>
          </div>
     </div> 

        {/* Row 2 */}
          <div className="crisis-grid">
             <div className="crisis-card">
            <div className="crisis-num">07</div>
            <div className="crisis-title">
              Events &amp; Community Platform
            </div>
            <div className="crisis-body">
              Coordination layer for trade exhibitions, sector meetings,
              training sessions, and institutional trade missions across
              SBEF's regional chamber network.
            </div>
          </div>
            <div className="crisis-card">
            <div className="crisis-num">08</div>
            <div className="crisis-title">
              Advocacy &amp; Member Services
            </div>
            <div className="crisis-body">
              Secure portal for policy distribution, statutory legal
              consultations, trade dispute reporting, and internal
              governance elections for SBEF members.
            </div>
          </div>
            <div className="crisis-card">
            <div className="crisis-num">09</div>
            <div className="crisis-title">
              Data &amp; Analytics Infrastructure
            </div>
            <div className="crisis-body">
              Secure processing layer generating real-time dashboards,
              operational indicators, and compliance summaries for
              institutional stakeholders and governance oversight.
            </div>
          </div>
            <div className="crisis-card">
            <div className="crisis-num">10</div>
            <div className="crisis-title">
              Government &amp; Institutional Integration
            </div>
            <div className="crisis-body">
              Secure API routing layer connecting SBG data streams to the
              Central Bank, federal ministries, customs systems, and
              international financial institutions.
            </div>
          </div>
          </div>
      </section>

      {/* Verification Tiers */}
      <section className="sec">
        <div className="eyebrow">Trust architecture</div>

        <h2 className="h2">
          Three tiers of verification.
          <br />
          One standard of trust.
        </h2>

        <p className="sub">
          SBG's compliance engine is engineered to restore international
          regulatory confidence in a post-disruption documentation
          environment — without creating unnecessary barriers to entry.
        </p>

        <div className="grid-3">
          <div className="tier-card tier-silver">
            <div className="tier-badge">Silver</div>
            <div className="comp-title">Verified Identity</div>
            <div className="comp-body">
              Self-reported corporate status cross-referenced with
              historical SBEF ledgers and local chamber records. Grants
              listing in the National Business Directory and access to
              SBEF advisory alerts.
            </div>
          </div>

          <div className="tier-card tier-gold">
            <div className="tier-badge">Gold</div>
            <div className="comp-title">Document Confirmed</div>
            <div className="comp-body">
              Submission of tax certificates, trade licences, and banking
              records subject to manual legal review. Unlocks direct
              participation in the Procurement Marketplace and automated
              tender matching.
            </div>
          </div>

          <div className="tier-card tier-platinum">
            <div className="tier-badge">Platinum</div>
            <div className="comp-title">Audited Compliance</div>
            <div className="comp-body">
              Full beneficial ownership declaration, continuous
              international sanctions screening (UN, OFAC, EU), and
              mandatory physical site audit. Enables integration into DFI
              capital pipelines and preferred vendor status.
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="sec sec-alt">
        <div className="eyebrow">Technology</div>

        <h2 className="h2">
          Built for Sudan's
          <br />
          operating environment.
        </h2>

        <p className="sub">
          The SBG technical framework is designed to remain operational
          under volatile connectivity and infrastructure conditions —
          with primary hosting in Egypt for low-latency access across
          Sudanese networks.
        </p>

        <div className="grid-4">
          <div className="comp-card">
            <div className="comp-title">Enterprise Web Portal</div>
            <div className="comp-body">
              Primary interface for document submission, analytics
              visualisation, and large-scale corporate profile management.
            </div>
          </div>

          <div className="comp-card">
            <div className="comp-title">
              Progressive Web App (PWA)
            </div>
            <div className="comp-body">
              Low-bandwidth mobile front-end with offline data caching,
              allowing users to navigate profiles and prepare
              documentation during connection outages.
            </div>
          </div>

          <div className="comp-card">
            <div className="comp-title">USSD Gateway</div>
            <div className="comp-body">
              Text-only interface over GSM cellular channels, enabling
              tender notifications and asset updates without an active
              data connection.
            </div>
          </div>

          <div className="comp-card">
            <div className="comp-title">Odoo ERP Core</div>
            <div className="comp-body">
              Modular back-end managing member accounts, verification
              queues, and institutional revenue tracking — with no
              software licence fees.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

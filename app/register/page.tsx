"use client";
import "./register.css";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Register() {
  return (
    <main>


         <Nav />


    

<div className="wf">


  <div className="register-container">
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div className="eyebrow" style={{ textAlign: "center" }}>Register your business</div>
      <div className="h2" style={{ textAlign: "center" }}>Join Sudan's national business registry</div>
      <div style={{ fontSize: 11, color: "#4A5568", textAlign: "center" }}>Free registration in Year 1 for all Sudanese enterprises. Takes 4 minutes.</div>
    </div>

    <div style={{ maxWidth: 560, margin: "0 auto 24px" }}>
      <div className="progress-bar">
        <div className="prog-step done"></div>
        <div className="prog-step active"></div>
        <div className="prog-step"></div>
        <div className="prog-step"></div>
      </div>
      <div className="prog-labels">
        <div className="pl active-pl">Business info</div>
        <div className="pl active-pl">Sector & size</div>
        <div className="pl">Tier selection</div>
        <div className="pl">Contact & confirm</div>
      </div>
    </div>

    <div className="form-card">
      <div className="form-title">Step 2 — Sector & size</div>
      <div className="form-sub">Tell us about your business category and scale so we can match you to the right services.</div>

      <div className="form-group">
        <div className="form-label">Business sector</div>
        <div className="form-select"><span>Agriculture & food production</span><span>▾</span></div>
      </div>

      <div className="form-row">
        <div className="form-group" style={{ marginBottom: 0 }}>
          <div className="form-label">Number of employees</div>
          <div className="form-select"><span>11–50 employees</span><span>▾</span></div>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <div className="form-label">Annual revenue (USD)</div>
          <div className="form-select"><span>$50K – $500K</span><span>▾</span></div>
        </div>
      </div>

      <div className="form-group" style={{ marginTop: 10 }}>
        <div className="form-label">State / region of operation</div>
        <div className="form-select"><span>Khartoum State</span><span>▾</span></div>
      </div>

      <div className="form-group">
        <div className="form-label">Do you currently have any of the following? (select all)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '4px' }}>
          <div style={{ background: '#E6F1FB', color: '#0C447C', fontSize: '9px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', border: '.5px solid #B5D4F4' }}>✓ Trade license</div>
          <div style={{ background: '#F7F8FA', color: '#4A5568', fontSize: '9px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', border: '.5px solid #e2e4e8' }}>Tax registration</div>
          <div style={{ background: '#E6F1FB', color: '#0C447C', fontSize: '9px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', border: '.5px solid #B5D4F4' }}>✓ Bank account</div>
          <div style={{ background: '#F7F8FA', color: '#4A5568', fontSize: '9px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', border: '.5px solid #e2e4e8' }}>Chamber membership</div>
          <div style={{ background: '#F7F8FA', color: '#4A5568', fontSize: '9px', fontWeight: 500, padding: '4px 10px', borderRadius: '6px', border: '.5px solid #e2e4e8' }}>None of the above</div>
        </div>
      </div>

      <div className="form-btns">
        <span className="btn-back">← Back</span>
        <span className="btn-next">Continue →</span>
      </div>
    </div>

    <div style={{ marginTop: 20, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Step 3 preview — tier selection</div>
      <div style={{ background: '#fff', border: '.5px solid #e2e4e8', borderRadius: 12, padding: 16 }}>
        <div className="tier-select-row">
          <div className="tier-opt selected">
            <div className="tier-opt-badge" style={{ color: '#C8922A' }}>◆ Silver</div>
            <div className="tier-opt-title">Self-reported</div>
            <div className="tier-opt-price">Free — Year 1</div>
          </div>
          <div className="tier-opt">
            <div className="tier-opt-badge" style={{ color: '#854F0B' }}>◆ Gold</div>
            <div className="tier-opt-title">Document confirmed</div>
            <div className="tier-opt-price">$350 / year</div>
          </div>
          <div className="tier-opt">
            <div className="tier-opt-badge" style={{ color: '#0C447C' }}>◆ Platinum</div>
            <div className="tier-opt-title">Audited compliance</div>
            <div className="tier-opt-price">Contact for pricing</div>
          </div>
        </div>
        <div style={{ fontSize: 9, color: '#4A5568', textAlign: 'center' }}>Silver is pre-selected for businesses without full documentation — you can upgrade at any time</div>
      </div>
    </div>

    <div style={{ marginTop: 20, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Step 4 success state</div>
      <div className="success-card">
        <div className="success-icon">✓</div>
        <div className="success-title">You're registered on SBG</div>
        <div className="success-sub">Your business profile has been created and is pending Silver verification. You'll receive a confirmation at your email address within 24 hours.</div>
        <div className="next-steps">
          <div className="ns-item"><div className="ns-dot"></div>Check your email for verification instructions</div>
          <div className="ns-item"><div className="ns-dot"></div>Upload any available documents to upgrade to Gold tier</div>
          <div className="ns-item"><div className="ns-dot"></div>Your SBG business profile is now publicly visible</div>
          <div className="ns-item"><div className="ns-dot"></div>Tender alerts will begin once Gold verified</div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 8, justifyContent: 'center' }}>
          <span className="btn-submit">View my profile</span>
          <span style={{ background: '#F7F8FA', color: '#0B1A3D', fontSize: 11, fontWeight: 500, padding: '9px 16px', borderRadius: 8, display: 'inline-block', border: '.5px solid #e2e4e8' }}>Upgrade to Gold →</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
  );
}
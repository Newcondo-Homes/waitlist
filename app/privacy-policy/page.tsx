"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/particles";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <div className="w-full max-w-4xl px-6 py-12">
        <Header />
        
        <div className="mt-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-400 text-lg">
            Effective Date: 22 July 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              1. SCOPE & LEGAL SHIELDS
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Privacy Policy governs the collection, usage, and protection of data by NEWCONDO Ltd (&quot;NEWCONDO&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) across our platform. It applies to all user classes—Renters, Property Owners, Agents, and Visitors.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              By accessing or using our platform, you agree to the following legally binding clauses:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Binding Arbitration:</strong> All disputes shall be resolved via confidential individual arbitration in accordance with the Nigerian Arbitration and Conciliation Act. Venue shall be Owerri, Imo State.</li>
              <li><strong className="text-white">Class Action Waiver:</strong> You permanently waive your right to initiate or participate in any class or representative actions.</li>
              <li><strong className="text-white">Limitation of Liability:</strong> Our maximum liability is capped at six months&apos; worth of your paid platform fees, regardless of the basis for the claim.</li>
              <li><strong className="text-white">Force Majeure:</strong> We assume no liability for data compromise or service unavailability resulting from cyber warfare, terrorism, natural disasters, nationwide strikes, or advanced zero-day vulnerabilities.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              2. INFORMATION COLLECTION & ANONYMIZATION
            </h2>
            
            <h3 className="text-xl font-medium mb-4 text-white">Collected Data Matrix</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-gray-700">
              <div className="grid gap-4">
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-white mb-2">All Users</h4>
                  <p className="text-gray-300">Full name, Date of Birth, Government ID (e.g., NIN, Driver&apos;s License, Passport)</p>
                </div>
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-white mb-2">Property Owners</h4>
                  <p className="text-gray-300">Bank Account Details (for payouts), Property Documents (to prove ownership), Property GPS Coordinates (to prevent double listing)</p>
                </div>
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-white mb-2">Agents</h4>
                  <p className="text-gray-300">Agency Certification, Bank Account Details (for payouts), Signed Consent of Property Owner (to mitigate fraudulent listing), and Property GPS Coordinates (to prevent double listing)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Renters</h4>
                  <p className="text-gray-300">Bank Account Details (for processing refunds)</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4 text-white">Technical Safeguards</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Hashing:</strong> Personally identifiable information (PII) such as names and IDs are irreversibly converted into SHA-256 hash strings within 72 hours of collection.</li>
              <li><strong className="text-white">Tokenization:</strong> Bank details are replaced with obfuscated tokens (e.g., TXT-XXXX) post-transaction to prevent reuse or replay attacks.</li>
              <li><strong className="text-white">k-Anonymity (Geo):</strong> Location data is generalized to a 1-kilometer radius to prevent individual property tracing.</li>
              <li><strong className="text-white">Backup Scrubbing:</strong> Raw user data is erased from system backups within 30 days, validated by external auditors (PwC Nigeria).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              3. VULNERABILITY PATCHES & RISK MITIGATION
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Risk/Loophole</h4>
                    <p className="text-gray-300">Insider Threat</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Mitigation Strategy</h4>
                    <p className="text-gray-300">Individual Background Checks, EFCC Vetting</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <p className="text-gray-300">Third-Party Exploits</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Data Processing Agreements (DPAs) with ₦10M breach clauses and anti-tracking provisions</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <p className="text-gray-300">Document Forgery</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Automated e-GIS validation (e.g., LASG) + Legal Affidavit on Authenticity</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <p className="text-gray-300">Fraudulent User Claims</p>
                  </div>
                  <div>
                    <p className="text-gray-300">₦500,000 penalty + EFCC referral (Cybercrimes Act Sec. 17(3))</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300">Forced Data Disclosure</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Legal challenge of subpoenas; Users notified unless under judicial gag order</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              4. DATA USAGE & SHARING
            </h2>
            
            <h3 className="text-xl font-medium mb-4 text-white">Permitted Uses</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>Identity and property verification via authorized government APIs (e.g., e-GIS portals).</li>
              <li>Financial processing via secure PCI-DSS compliant payment providers (e.g., Flutterwave).</li>
              <li>Pattern-based fraud detection through event tracking and behavioral analytics.</li>
            </ul>

            <h3 className="text-xl font-medium mb-4 text-white">Explicit Prohibitions</h3>
            <ul className="space-y-3 text-gray-300">
              <li>No use of personal data for marketing without explicit opt-in.</li>
              <li>No sharing of data with marketplace service providers.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              5. DATA RETENTION & DELETION POLICY
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="grid gap-4">
                <div className="grid md:grid-cols-3 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Type</h4>
                    <p className="text-gray-300">Government ID</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Retention Period</h4>
                    <p className="text-gray-300">24 Months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Post Retention Protocol</h4>
                    <p className="text-gray-300">Converted to irreversible SHA-256 hash</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <p className="text-gray-300">Bank Details Identity</p>
                  </div>
                  <div>
                    <p className="text-gray-300">45 days</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Tokenized and decoupled from user identity</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <p className="text-gray-300">Property Location</p>
                  </div>
                  <div>
                    <p className="text-gray-300">12 months</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Generalized to 1km grid</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-300">Activity Logs</p>
                  </div>
                  <div>
                    <p className="text-gray-300">12 months</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Summarized into de-identified statistical data</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              <strong>NOTE:</strong> All deletions follow NIST SP 800-88 Rev.1 data sanitization guidelines.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              6. SECURITY FRAMEWORK & BREACH RESPONSE
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Encryption Protocols:</strong> AES-256 encryption for stored data and TLS 1.3 for all transmission channels.</li>
              <li><strong className="text-white">Access Management:</strong> Role-based access with periodic audits and automatic expiry of dormant privileges.</li>
              <li>
                <strong className="text-white">Breach Notification Process:</strong>
                <ul className="mt-2 ml-6 space-y-2">
                  <li>Notify NDPC within 48 hours of verified breach.</li>
                  <li>Initiate forensic audit within 72 hours.</li>
                  <li>Affected users will be directly notified for high-risk incidents.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              7. USER RIGHTS & SAFEGUARDS
            </h2>
            
            <h3 className="text-xl font-medium mb-4 text-white">Data Subject Rights</h3>
            <p className="text-gray-300 mb-4">You may invoke the following rights under Nigeria Data Protection Act (NDPA):</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>Right to Access, Correction, and Erasure of your data.</li>
              <li>Right to Object to non-essential data processing.</li>
              <li>Submit requests to: <a href="mailto:info@newcondo.homes" className="text-blue-400 hover:text-blue-300">info@newcondo.homes</a> (response within 30 days).</li>
            </ul>

            <h3 className="text-xl font-medium mb-4 text-white">Anti-Abuse Measures</h3>
            <p className="text-gray-300 mb-4">To protect platform integrity, users acknowledge the following penalty clause:</p>
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
              <p className="text-gray-300 italic">
                &quot;Any frivolous, malicious, or fraudulent data access/deletion request shall incur a penalty of ₦500,000, account termination, and EFCC referral under NDPA enforcement protocol.&quot;
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              8. GOVERNANCE, AUDITS & POLICY UPDATES
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Third-Party Certifications:</strong> Annual SOC 2 Type II by KPMG</li>
              <li><strong className="text-white">ISO 27001:</strong> Implementation targeted for Q4 2026</li>
              <li><strong className="text-white">DPAs & Legal Assurance:</strong> Enforceable DPAs with all financial and hosting partners</li>
              <li><strong className="text-white">Policy Updates:</strong> All changes communicated at least 3 days in advance via platform banners or email. Continued use after update = automatic acceptance.</li>
              <li><strong className="text-white">Dispute Resolution:</strong> All user disputes shall be resolved via confidential arbitration seated in Owerri, Imo State.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              9. USER ACKNOWLEDGMENTS (MANDATORY)
            </h2>
            <p className="text-gray-300 mb-4">Upon account registration or usage, all users affirm the following declarations:</p>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">&quot;I accept sole legal liability for documents uploaded to the platform.&quot;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">&quot;I waive all class action rights permanently.&quot;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">&quot;I consent to individual binding arbitration in Owerri, Imo State.&quot;</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">&quot;I understand that all sensitive data is tokenized or anonymized after processing.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              10. CONTACT INFORMATION
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Email:</strong> <a href="mailto:info@newcondo.homes" className="text-blue-400 hover:text-blue-300">info@newcondo.homes</a></p>
                <p><strong className="text-white">Office:</strong> 6 Blessing Val Street, Umuagu Umuguma, Owerri-West, Imo State, Nigeria</p>
                <p><strong className="text-white">Reg. No.:</strong> RC8445849 (CAC)</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              11. COPYRIGHT NOTICE & ENFORCEMENT
            </h2>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                This Privacy Policy is the intellectual property of NEWCONDO Ltd and is protected under the Nigerian Copyright Act Cap C28 LFN 2004.
              </p>
              <p className="text-gray-300">
                No reproduction, redistribution, or reuse is allowed without express written consent. Violators shall face prosecution under both civil and criminal provisions.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
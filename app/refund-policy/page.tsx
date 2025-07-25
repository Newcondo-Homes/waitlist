"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Particles from "@/components/ui/particles";

export default function RefundPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <div className="w-full max-w-4xl px-6 py-12">
        <Header />
        
        <div className="mt-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Cancellation & Refund Policy
          </h1>
          <p className="text-center text-gray-400 text-lg">
            Effective Date: 22 July 2025 | Last Updated: 22 July 2025
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              1. Scope & Legally Binding Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Cancellation and Refund Policy (&quot;Policy&quot;) governs all monetary transactions and user engagements on the Newcondo platform (&quot;Newcondo&quot;), including but not limited to rental payments, commission disbursements, third-party service payments, subscription fees, listing fees, and transaction processing costs.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              By using the Newcondo platform, users (Renters, Property Owners, Agents, and Third-Party Service Providers) expressly agree to the terms of this Policy, including:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li>Mandatory binding arbitration for all disputes arising from cancellations and refunds, in lieu of class action litigation</li>
              <li>Waiver of statutory rights where permissible under Nigerian law</li>
              <li>Adherence to platform-specific cancellation deadlines and refund conditions</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              This Policy is legally binding and enforceable under the Nigerian Arbitration and Conciliation Act and the Nigeria Data Protection Act (NDPA).
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              2. Non-Refundable Fees
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The following fees are non-refundable under any circumstances unless required by law:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li><strong className="text-white">Subscription Fees (applicable to Owners/Agents):</strong> Covers advanced tools such as rent tracking, property promotion, listing highlights, and analytics</li>
              <li><strong className="text-white">Platform Service Fees (all users):</strong> Charged per transaction for platform maintenance and security</li>
              <li><strong className="text-white">Transaction Charges (all users):</strong> Reflect payment gateway processing costs</li>
              <li><strong className="text-white">Inspection Fees (Renters):</strong> Paid directly to Owners/Agents and non-refundable post-payment</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              All fees are considered final except in cases of proven VAT calculation errors or other mandatory legal adjustments.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              3. Refundable Transactions & Deadlines
            </h2>
            
            <h3 className="text-xl font-medium mb-4 text-white">Renters</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-gray-700 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="px-4 py-3 text-left text-white font-semibold">Payment Type</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Refund Window</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Amount</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Conditions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-3">Rent</td>
                    <td className="px-4 py-3">48h post-payment</td>
                    <td className="px-4 py-3">100%</td>
                    <td className="px-4 py-3">Excludes service/transaction fees</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-3">Advance Notice Deposit</td>
                    <td className="px-4 py-3">48h post-payment</td>
                    <td className="px-4 py-3">100%</td>
                    <td className="px-4 py-3">Must cancel via platform</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Commission</td>
                    <td className="px-4 py-3">48h post-payment</td>
                    <td className="px-4 py-3">100%</td>
                    <td className="px-4 py-3">Linked to canceled rent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6">
              <p className="text-yellow-200">
                <strong>NOTE:</strong> Refunds requested outside this window may only be honored in documented force majeure cases.
              </p>
            </div>
            
            <h3 className="text-xl font-medium mb-4 text-white">Owners/Agents</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Payout Hold:</strong> Platform holds rent/commission payouts for 72h after renter payment to allow dispute window</li>
              <li>If renter cancels within 48h:
                <ul className="ml-6 mt-2 space-y-2 text-gray-300">
                  <li>→ Owner/Agent forfeits payout</li>
                  <li>→ Platform retains service and transaction fees</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              4. Cancellation Protocols
            </h2>
            
            <h3 className="text-xl font-medium mb-4 text-white">Renters</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li><strong className="text-white">Inspection No-Shows:</strong> Non-refundable; rescheduling subject to Owner/Agent discretion</li>
              <li><strong className="text-white">Account Deletion:</strong> Active refund rights are forfeited unless requested pre-deletion</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-4 text-white">Owners/Agents</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Cancelling a Renter Post-Payment:</strong>
                <ul className="ml-6 mt-2 space-y-2 text-gray-300">
                  <li>→ Full refund (rent + commission) within 24h of payout receipt</li>
                  <li>→ Platform penalties apply: ₦100,000 fine, permanent account ban, and property delisting</li>
                </ul>
              </li>
              <li><strong className="text-white">Subscription Cancellation:</strong> Non-prorated; terminates at billing cycle end</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              5. Refund Request Workflow
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Requests must be submitted via the user dashboard within 48h (72h for force majeure).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">Required documentation includes:</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>Payment receipts</li>
              <li>Official proof of force majeure (e.g., NEMA orders, lockdown directives)</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-4 text-white">Resolution Timelines</h3>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="px-4 py-3 text-left text-white font-semibold">Request Type</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Processing Time</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Refund Method</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">3-5 business days</td>
                    <td className="px-4 py-3">Original payment method</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Force Majeure</td>
                    <td className="px-4 py-3">7-10 business days</td>
                    <td className="px-4 py-3">Original payment method</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              6. Force Majeure Exceptions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">Refunds outside the standard window may be granted only for:</p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li>Natural disasters (e.g., floods, earthquakes)</li>
              <li>Government actions (e.g., lockdowns, evacuations). Proof must be provided from credible sources (e.g., NEMA, State Govt)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Non-Qualifying:</strong> Transport strikes, poor weather forecasts, etc.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              7. Fraudulent Disputes & Penalties
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 overflow-x-auto mb-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="px-4 py-3 text-left text-white font-semibold">Violation</th>
                    <th className="px-4 py-3 text-left text-white font-semibold">Consequence</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-3">Chargeback without claim</td>
                    <td className="px-4 py-3">₦100,000 fine + permanent ban</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="px-4 py-3">Fake force majeure evidence</td>
                    <td className="px-4 py-3">EFCC referral + ₦500,000 penalty</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Account deletion to evade debt</td>
                    <td className="px-4 py-3">Legal action + collections</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
              <p className="text-red-200">
                <strong>NOTE:</strong> NEWCONDO reserves the right to take legal action against individuals submitting false documents or fraudulent refund claims.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              8. Dispute Resolution & Arbitration
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All disputes arising from this Policy shall be resolved through binding arbitration in accordance with the Nigerian Arbitration and Conciliation Act.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Venue:</strong> Owerri, Imo State, Nigeria</li>
              <li><strong className="text-white">Process:</strong> Confidential individual arbitration</li>
              <li><strong className="text-white">Class Action Waiver:</strong> Users permanently waive rights to class or representative actions</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              9. Policy Updates & Amendments
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              NEWCONDO reserves the right to modify this Policy at any time. Changes will be communicated via:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li>Platform notifications</li>
              <li>Email notifications to registered users</li>
              <li>Updated policy posting with revised effective date</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Continued use of the platform after policy updates constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              10. Contact Information
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Email:</strong> <a href="mailto:info@newcondo.homes" className="text-blue-400 hover:text-blue-300">info@newcondo.homes</a></p>
                <p><strong className="text-white">Office:</strong> 6 Blessing Val Street, Umuagu Umuguma, Owerri-West, Imo State, Nigeria</p>
                <p><strong className="text-white">Registration No:</strong> RC8445849 (CAC)</p>
              </div>
            </div>
          </section>

          {/* Copyright Notice */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              11. Copyright & Legal Protection
            </h2>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                This Cancellation & Refund Policy is the intellectual property of NEWCONDO Ltd and is protected under the Nigerian Copyright Act Cap C28 LFN 2004.
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
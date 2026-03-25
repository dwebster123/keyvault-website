import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — KeyVault Fund',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white/80">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-5 border-b border-white/8">
        <Link href="/" className="text-kv-blue font-bold text-sm tracking-widest uppercase">KeyVault Fund</Link>
        <Link href="/" className="text-white/40 text-sm hover:text-kv-blue transition-colors">← Back to site</Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 pb-20">
        <h1 className="text-4xl font-black text-white tracking-tight mb-2">Terms of Use</h1>
        <p className="text-white/30 text-sm mb-12">Last updated: March 2026</p>

        <p className="text-sm text-white/60 mb-4">BDJ Finance LLC ("BDJ" or the "Company") is an independent investment adviser. BDJ is not registered with the U.S. Securities and Exchange Commission but will file an application to be treated as an exempt reporting adviser when required. Even if registered, registration does not imply a certain level of skill or training.</p>
        <p className="text-sm text-white/60 mb-4">The opinions expressed herein are those of BDJ and are subject to change. Past performance is not indicative of future results. Forward-looking statements cannot be guaranteed.</p>
        <p className="text-sm text-white/60 mb-4">The information contained on this website is being provided for information purposes only and is not an offer to sell or the solicitation of an offer to buy any securities or instruments. Before making any investment decision, individuals should consult their own advisors, including legal and tax advisors.</p>

        <hr className="border-white/7 my-10" />

        <Section title="Acceptance of the Terms of Use">
          <p>These Terms of Use govern your access to and use of keyvaultfund.com, including any content, functionality, and services offered on or through the site (the "Website"). By using the Website, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not access or use the Website. This Website is available to users eighteen (18) years of age or older.</p>
        </Section>

        <Section title="Changes to the Terms of Use">
          <p>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when posted. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.</p>
        </Section>

        <Section title="Intellectual Property Rights">
          <p>The Website and its entire contents, features, and functionality are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. These Terms permit you to use the Website for your personal use only.</p>
        </Section>

        <Section title="Trademarks">
          <p>The Company name, BDJ, KeyVault Fund, our Company logos, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company.</p>
        </Section>

        <Section title="Prohibited Uses">
          <p className="mb-3">You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
            <li>Violate any applicable federal, state, local, or international law or regulation.</li>
            <li>Transmit any advertising or promotional material, including "junk mail" or "spam."</li>
            <li>Impersonate or attempt to impersonate the Company, a Company employee, or any other person or entity.</li>
            <li>Use any robot, spider, or other automatic device to access the Website.</li>
            <li>Introduce any viruses, Trojan horses, worms, or other malicious material.</li>
            <li>Attempt to gain unauthorized access to any parts of the Website or connected systems.</li>
          </ul>
        </Section>

        <Section title="Disclaimer of Warranties">
          <p className="uppercase text-xs text-white/50 leading-relaxed">YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE. TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE.</p>
        </Section>

        <Section title="Limitation on Liability">
          <p className="uppercase text-xs text-white/50 leading-relaxed">TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
        </Section>

        <Section title="Indemnification">
          <p>You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website.</p>
        </Section>

        <Section title="Governing Law and Jurisdiction">
          <p>All matters relating to the Website and these Terms shall be governed by and construed in accordance with the laws of the State of Utah. Any legal suit, action, or proceeding arising out of these Terms shall be instituted exclusively in the state and federal courts located in the State of Utah.</p>
        </Section>

        <Section title="Arbitration">
          <p>At Company's sole discretion, it may require You to submit any disputes arising from the use of these Terms or the Website to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying Utah law. The parties agree to arbitrate solely on an individual basis — class arbitration is not permitted.</p>
        </Section>

        <Section title="Limitation on Time to File Claims">
          <p className="uppercase text-xs text-white/50">ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</p>
        </Section>

        <Section title="Contact">
          <p>All notices, feedback, and other communications relating to the Website should be directed to: <a href="mailto:info@keyvaultfund.com" className="text-kv-blue">info@keyvaultfund.com</a></p>
        </Section>
      </div>

      <footer className="text-center py-8 border-t border-white/7">
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/" className="text-white/30 text-xs hover:text-kv-blue transition-colors">Home</Link>
          <Link href="/terms" className="text-white/30 text-xs hover:text-kv-blue transition-colors">Terms of Use</Link>
          <Link href="/privacy" className="text-white/30 text-xs hover:text-kv-blue transition-colors">Privacy Policy</Link>
          <a href="mailto:info@keyvaultfund.com" className="text-white/30 text-xs hover:text-kv-blue transition-colors">Contact</a>
        </div>
        <p className="text-white/20 text-xs">© 2026 BDJ Finance LLC. All rights reserved. Past performance is not indicative of future results.</p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-3">{title}</h2>
      <div className="text-sm text-white/60 space-y-2">{children}</div>
    </div>
  )
}

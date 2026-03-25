import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — KeyVault Fund',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white/80">
      {/* Nav */}
      <nav className="flex items-center justify-between px-12 py-5 border-b border-white/8">
        <Link href="/" className="text-kv-blue font-bold text-sm tracking-widest uppercase">KeyVault Fund</Link>
        <Link href="/" className="text-white/40 text-sm hover:text-kv-blue transition-colors">← Back to site</Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 pb-20">
        <h1 className="text-4xl font-black text-white tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-white/30 text-sm mb-12">Last updated: March 2026</p>

        <Section title="Introduction">
          <p>BDJ Finance LLC ("Company", "us" or "we") respects your privacy and is committed to protecting it through our compliance with this privacy policy.</p>
          <p>This privacy policy describes the types of information we may collect from you or that you may provide when you visit keyvaultfund.com (the "Website"), and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
          <p>Please read this privacy policy carefully. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to the terms of this privacy policy.</p>
        </Section>

        <Section title="Children">
          <p>Our services are not directed at individuals under the age of eighteen (18). We do not knowingly collect information from children under the age of eighteen (18). If you believe we might have any information from or about a child under eighteen, please contact us at <a href="mailto:info@keyvaultfund.com" className="text-kv-blue">info@keyvaultfund.com</a>.</p>
        </Section>

        <Section title="Information We Collect">
          <p className="mb-3">We may collect several types of information from and about users of our Website, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
            <li>Information by which you may be personally identified, such as name, mailing address, e-mail address, or telephone number.</li>
            <li>Information about the device you use to access the Website, including your IP address and unique device identifiers.</li>
            <li>Your device characteristics and functionality (operating system, hardware, mobile network, browser, etc.).</li>
            <li>Referring and exit web pages and URLs.</li>
            <li>Your browsing history on our Website and your activities there.</li>
            <li>Your device location or other geolocation information.</li>
            <li>Information about your internet connection and internet provider.</li>
          </ul>
        </Section>

        <Section title="Automatic Data Collection">
          <p className="mb-3">As you navigate through our Website, we may use automatic data collection technologies including:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
            <li><strong className="text-white/80">Cookies.</strong> A small file placed on the hard drive of your computer.</li>
            <li><strong className="text-white/80">Web Beacons & Pixels.</strong> Small electronic files that permit us to count users who have visited pages or opened emails.</li>
            <li><strong className="text-white/80">Log Files.</strong> Track actions occurring on our Website and collect your IP address, browser type, and date/time of visits.</li>
            <li><strong className="text-white/80">Google Analytics.</strong> We may use Google Analytics to analyze Website traffic. Please visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-kv-blue">Google's privacy policy</a> for details. You may opt out via <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank" rel="noopener" className="text-kv-blue">Google's opt-out tool</a>.</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p className="mb-3">We may use information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
            <li>Present our Website and its contents to you.</li>
            <li>Provide you with information, products, or services that you request from us.</li>
            <li>Carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
            <li>Notify you about changes to our Website or any products or services we offer.</li>
            <li>Develop and improve our products and services.</li>
            <li>Contact you about goods and services that may be of interest to you.</li>
          </ul>
        </Section>

        <Section title="Do Not Track">
          <p>Do Not Track ("DNT") is a concept promoted by certain regulatory authorities and industry groups. Given the lack of a standard in the industry, our Website may not always comply with DNT signals from your browser at this time.</p>
        </Section>

        <Section title="Disclosure of Your Information">
          <p className="mb-3">We may disclose personal information that we collect or you provide:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/60">
            <li>To our subsidiaries and affiliates.</li>
            <li>To contractors, service providers, and other third parties we use to support our business.</li>
            <li>To a buyer or other successor in the event of a merger, divestiture, reorganization, dissolution, or other sale or transfer of Company assets.</li>
            <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request.</li>
            <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</li>
          </ul>
        </Section>

        <Section title="Data Security">
          <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Any transmission of personal information is at your own risk.</p>
        </Section>

        <Section title="Geographic Restrictions">
          <p>The owner of the Website is based in the State of Utah in the United States. We make no claims that the Website or any of its content is accessible or appropriate outside of the United States. If you access the Website from outside the United States, you do so on your own initiative and are responsible for compliance with local laws.</p>
        </Section>

        <Section title="Your California Privacy Rights">
          <p>California Civil Code Section § 1798.83 permits California residents to request and obtain from us a list of what Personal Information we disclosed to third parties for direct marketing purposes in the preceding year. To make such a request, please email <a href="mailto:info@keyvaultfund.com" className="text-kv-blue">info@keyvaultfund.com</a>.</p>
        </Section>

        <Section title="Changes to Our Privacy Policy">
          <p>It is our policy to post any changes we make to our privacy policy on this page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.</p>
        </Section>

        <Section title="Contact Information">
          <p>To ask questions or comment about this privacy policy, contact us at: <a href="mailto:info@keyvaultfund.com" className="text-kv-blue">info@keyvaultfund.com</a></p>
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

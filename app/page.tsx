'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Target, TrendingUp, Shield, Zap, Linkedin, Menu, X } from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-kv-blue/10' : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <div className="relative h-10 w-auto flex items-center">
              <Image src="/images/8-blue.png" alt="Key Vault Logo" width={160} height={40} className="object-contain h-full w-auto" />
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-kv-blue transition-colors font-medium">Features</a>
            <a href="#team" className="text-white/80 hover:text-kv-blue transition-colors font-medium">Team</a>
            <a href="#contact" className="text-white/80 hover:text-kv-blue transition-colors font-medium">Contact</a>
            <a href="/investor-portal">
              <button className="glass-button text-white px-6 py-2 rounded-xl font-medium">
                Investor Portal
              </button>
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-kv-blue/10">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#features" className="text-white/80 hover:text-kv-blue py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#team" className="text-white/80 hover:text-kv-blue py-2" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <a href="#contact" className="text-white/80 hover:text-kv-blue py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="/investor-portal">
                <button className="glass-button text-white px-6 py-3 rounded-xl font-medium w-full">Investor Portal</button>
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background gradients matching deck */}
          <div className="absolute inset-0 bg-gradient-to-br from-kv-blue/10 via-black to-kv-purple/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,182,255,0.08),transparent_50%)]" />

          {/* Animated orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-kv-purple/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-kv-blue/15 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center min-h-screen">
              <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-white leading-tight max-w-5xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Driving Secure Investment Into{' '}
                <span className="gradient-text">Decentralized Finance</span>
              </h1>

              <p className={`text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-12 max-w-3xl leading-relaxed transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                We provide liquidity to traders on digital asset exchanges and collect interest and yield from the trading activity. They trade. You collect.
              </p>

              <div className={`flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-16 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <a href="/investor-portal">
                  <button className="glass-button text-white px-10 py-4 text-lg rounded-2xl group flex items-center font-semibold">
                    Investor Portal
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </button>
                </a>
                <a href="#features">
                  <button className="border border-kv-blue/30 text-white hover:bg-kv-blue/10 px-10 py-4 text-lg rounded-2xl transition-all duration-300">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-32 bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,182,255,0.04),transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className={`inline-block px-6 py-2 rounded-full glass mb-6`}>
                <span className="gradient-text font-medium">Key Features</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                What makes <span className="gradient-text">Key Vault</span> unique?
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                A proven strategy that combines liquidity provision, advanced hedging, and institutional-grade infrastructure to generate consistent yield from digital asset markets.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="deck-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-kv-blue rounded-lg flex items-center justify-center text-white font-bold">1</div>
                  <span className="text-kv-blue font-bold text-sm uppercase tracking-wide">Liquidity Provision Strategy</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">They Trade. You Collect.</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Key Vault pools BTC, ETH, SOL, and USDC into an index fund that provides liquidity to traders on digital asset exchanges. When others open long and short positions, you earn the fees and interest — the same model banks use in traditional finance, applied to digital assets.
                </p>
              </div>

              {/* Card 2 */}
              <div className="deck-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-kv-blue rounded-lg flex items-center justify-center text-white font-bold">2</div>
                  <span className="text-kv-blue font-bold text-sm uppercase tracking-wide">Institutional Momentum</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Market Is Moving Our Way</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Institutional Bitcoin ETFs have surpassed $100B in AUM, Ethereum ETFs reached $6.5B, and Solana ETFs are live at $2B. Major banks including JPMorgan, Goldman Sachs, and Citigroup are exploring stablecoins. Congress is building a unified regulatory framework under the CLARITY, FIT21, and GENIUS Acts.
                </p>
              </div>

              {/* Card 3 */}
              <div className="deck-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-kv-blue rounded-lg flex items-center justify-center text-white font-bold">3</div>
                  <span className="text-kv-blue font-bold text-sm uppercase tracking-wide">Hedged Performance</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Built to Withstand the Worst Days</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Our automated hedging strategy maintains balance around the clock with many small trades, protecting capital during market downturns. While Bitcoin dropped 35% over a 12-month period, Key Vault&apos;s maximum drawdown was just 1.01%. Target APY range of 16-22% with ~20% actual rolling 365-day APY.
                </p>
              </div>

              {/* Card 4 */}
              <div className="deck-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-kv-blue rounded-lg flex items-center justify-center text-white font-bold">4</div>
                  <span className="text-kv-blue font-bold text-sm uppercase tracking-wide">Capital Protection</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Non-Custodial. Audited. Regulated.</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Smart contracts hold assets — not humans, not bank accounts. Three independent audits, daily NAV verification, SEC Regulation D compliance via Morrison Cohen LLP, and full KYC/AML via NAV Consulting. 365+ days operating with zero security incidents.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="text-center mt-20">
              <div className="deck-card max-w-2xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience the Key Vault Advantage</h3>
                <p className="text-white/60 mb-6 text-lg">Join investors who trust our proven strategies for consistent, risk-adjusted returns.</p>
                <a href="#contact">
                  <button className="bg-kv-blue text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-kv-blue-dark transition-all duration-300 transform hover:scale-105">
                    Explore Investment Options
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-kv-purple/5 to-[#0a0a0a]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 rounded-full glass mb-6">
                <span className="gradient-text font-medium">Our Team</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Who is behind <span className="gradient-text">Key Vault</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Our team combines decades of experience in finance, technology, and DeFi investments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Brett Nielsen */}
              <div className="glass-card rounded-3xl overflow-hidden group hover:border-kv-blue/30 transition-all duration-300">
                <div className="relative w-full h-80 overflow-hidden bg-gradient-to-b from-kv-blue/10 to-transparent">
                  <Image
                    src="/images/brett.png"
                    alt="Brett Nielsen - Co-Founder at Key Vault Fund"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white font-bold mb-1">Brett Nielsen</h3>
                  <p className="gradient-text font-semibold text-lg mb-1">Co-Founder</p>
                  <p className="text-white/40 text-sm mb-4">brett@keyvaultfund.com</p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">KSV Global - Private Equity Operating Partner and portfolio CEO overseeing business of over $20M annual revenues.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Romney for President - Deputy to National Finance Chair - Over $50M raised for the billion dollar Romney Victory Campaign 2012.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Founder and executive for multiple tech startups, raising more than $7.5M in Seed and VC capital leading to $100M+ in ARR.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Inc. 500 (#27), Utah 40 under 40, Utah Emerging Elite.</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <a href="https://linkedin.com/in/brettknielsen" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-white/60 hover:text-kv-blue transition-colors">
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span className="font-medium">brettknielsen</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Deven Webster */}
              <div className="glass-card rounded-3xl overflow-hidden group hover:border-kv-blue/30 transition-all duration-300">
                <div className="relative w-full h-80 overflow-hidden bg-gradient-to-b from-kv-blue/10 to-transparent">
                  <Image
                    src="/images/deven.png"
                    alt="Deven Webster - Co-Founder at Key Vault Fund"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white font-bold mb-1">Deven Webster</h3>
                  <p className="gradient-text font-semibold text-lg mb-1">Co-Founder</p>
                  <p className="text-white/40 text-sm mb-4">deven@keyvaultfund.com</p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">IronStag Investments - Since 2016, managed over $75M+ in combined asset value achieving upwards of 10x-100x multiples across digital assets, private placements, and alternative investments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Co-Founder of Purelight Power - Built and scaled one of the fastest-growing solar companies in the Western U.S., leading to a $150M private acquisition.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Early investor in blockchain protocols, DeFi, and digital asset infrastructure with a performance-driven investment thesis.</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <a href="https://linkedin.com/in/devenwebster" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-white/60 hover:text-kv-blue transition-colors">
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span className="font-medium">devenwebster</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* JD Beck */}
              <div className="glass-card rounded-3xl overflow-hidden group hover:border-kv-blue/30 transition-all duration-300">
                <div className="relative w-full h-80 overflow-hidden bg-gradient-to-b from-kv-blue/10 to-transparent">
                  <Image
                    src="/images/jd.png"
                    alt="JD Beck - Co-Founder at Key Vault Fund"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white font-bold mb-1">JD Beck</h3>
                  <p className="gradient-text font-semibold text-lg mb-1">Co-Founder</p>
                  <p className="text-white/40 text-sm mb-4">jbeck@keyvaultfund.com</p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Founder & Former CEO of Purelight Power, leading all large-scale sales and operations, guiding it through rapid growth and a $360M merger/acquisition with Edgewater Group (2023).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Oversaw growth to $160M+ annual revenue and 720+ employees in 4 years.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Multi-million-dollar crypto investor with hands-on experience in digital assets, capital deployment, and risk management.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kv-blue mr-2 mt-1 text-sm font-bold">&bull;</span>
                      <span className="text-white/70 text-sm leading-relaxed">Master&apos;s degree in Psychology from Brigham Young University.</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <a href="https://linkedin.com/in/jdbeck" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-white/60 hover:text-kv-blue transition-colors">
                      <Linkedin className="h-5 w-5 mr-2" />
                      <span className="font-medium">jdbeck</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-kv-blue/5 to-[#0a0a0a]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-kv-blue/15 to-kv-purple/10 rounded-full filter blur-3xl animate-float" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 rounded-full glass mb-6">
                <span className="gradient-text font-medium">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Contact us to learn more about Key Vault Fund and how we can help you navigate the world of digital asset investments.
              </p>
            </div>

            <div className="flex justify-center max-w-2xl mx-auto">
              <div className="glass-card p-10 rounded-3xl w-full">
                <h3 className="text-3xl font-bold mb-8 text-white">Get in Touch</h3>
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault()
                  setFormStatus('sending')
                  const form = e.currentTarget
                  try {
                    const res = await fetch('https://formspree.io/f/xeerrqyl', {
                      method: 'POST',
                      headers: { 'Accept': 'application/json' },
                      body: new FormData(form),
                    })
                    if (res.ok) {
                      setFormStatus('sent')
                      form.reset()
                    } else {
                      setFormStatus('error')
                    }
                  } catch {
                    setFormStatus('error')
                  }
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                    <input
                      className="glass-input text-white placeholder:text-white/30 w-full py-3 px-4 rounded-xl"
                      id="name"
                      required
                      placeholder="Your full name"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      className="glass-input text-white placeholder:text-white/30 w-full py-3 px-4 rounded-xl"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      name="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                    <textarea
                      className="glass-input text-white placeholder:text-white/30 w-full min-h-[140px] py-3 px-4 rounded-xl resize-none"
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>
                  {formStatus === 'sent' && (
                    <div className="text-green-400 text-center py-3 rounded-xl bg-green-400/10 border border-green-400/20">
                      Message sent successfully! We&apos;ll be in touch soon.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="text-red-400 text-center py-3 rounded-xl bg-red-400/10 border border-red-400/20">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                  <button
                    className="glass-button w-full text-white py-4 rounded-xl text-lg font-semibold disabled:opacity-50"
                    type="submit"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass-footer pt-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 relative z-10">
            <div className="md:col-span-7">
              <div className="relative h-12 flex items-center mb-8">
                <Image src="/images/footer-blue.png" alt="Key Vault Logo" width={200} height={60} className="object-contain" />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-12">
              <h4 className="text-kv-blue font-semibold text-xl mb-6">Quick Links</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <li><a href="#" className="text-white/60 hover:text-kv-blue transition-colors text-lg">About</a></li>
                <li><a href="#team" className="text-white/60 hover:text-kv-blue transition-colors text-lg">Team</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-kv-blue transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-kv-blue/10 pt-8 pb-12 relative z-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-lg mb-4 md:mb-0">&copy; 2025 Key Vault Fund. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="text-white/50 hover:text-kv-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-kv-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Large background logo */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-[0.05] w-full text-center pointer-events-none">
          <Image src="/images/large-background-logo.png" alt="" width={1400} height={600} className="mx-auto max-w-[90%]" style={{ marginBottom: '-215px' }} />
        </div>
      </footer>
    </div>
  )
}

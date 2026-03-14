'use client'

import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function InvestorPortal() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-kv-blue/8 via-black to-kv-purple/10 pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-kv-purple/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-kv-blue/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div className="mb-12">
          <Image src="/images/8-blue.png" alt="Key Vault Logo" width={200} height={50} className="object-contain" />
        </div>

        {/* Coming Soon */}
        <div className="text-center max-w-2xl">
          <div className="inline-block px-6 py-2 rounded-full glass mb-8">
            <span className="gradient-text font-medium">Investor Portal</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Coming Soon</span>
          </h1>

          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Our secure investor portal is currently under development. You&apos;ll soon be able to track your investment performance, view detailed analytics, and manage your account — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/">
              <button className="glass-button text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:gap-3 transition-all">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </button>
            </a>
            <a href="/#contact">
              <button className="border border-kv-blue/30 text-white hover:bg-kv-blue/10 px-8 py-4 rounded-xl font-medium transition-all duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-white/30 text-sm">
          &copy; 2025 Key Vault Fund. All rights reserved.
        </div>
      </div>
    </div>
  )
}

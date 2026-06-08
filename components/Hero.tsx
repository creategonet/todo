'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Star, Shield, X } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="hero" className="relative pt-16 lg:pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-movers.png"
        alt="Professional movers unloading a truck"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div className="space-y-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 tracking-wider uppercase">
              <Shield className="h-4 w-4 text-primary" />
              Licensed &amp; Insured
            </div>

            <h1 className="text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-white">
              <span className="block">Moving Made</span>
              <span className="text-primary-light block">Simple.</span>
              <span className="text-orange-400 block">Stress-Free.</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Reliable moving services for homes and businesses. We handle your
              belongings with care so you can focus on what matters.
            </p>

            <button
              onClick={() => setVideoOpen(true)}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play className="h-4 w-4 fill-white group-hover:fill-primary transition-colors ml-0.5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">How It Works</p>
                <p className="text-xs text-white/60">Watch video</p>
              </div>
            </button>

            <div className="flex items-center gap-2.5">
              <GoogleIcon />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-white/60 text-sm">Based on 500+ reviews</span>
            </div>
          </div>

          {/* Right — Quote Form */}
          <div className="order-1 lg:order-2">
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 text-lg">How It Works</h3>
              <button onClick={() => setVideoOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Play className="h-16 w-16 mx-auto mb-3 text-gray-300" />
                <p className="text-sm">Embed your YouTube / Vimeo video here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

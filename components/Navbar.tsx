'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/#why-choose-us' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Priority Moving Group"
              width={180}
              height={54}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Phone CTA */}
          <a
            href="tel:5551234567"
            className="hidden lg:flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full mt-2"
            >
              <Phone className="h-4 w-4" /> (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

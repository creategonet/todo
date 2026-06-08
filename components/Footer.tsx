import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const links: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'Residential Moving', href: '#services' },
    { label: 'Commercial Moving', href: '#services' },
    { label: 'Long-Distance Moving', href: '#services' },
    { label: 'Packing Services', href: '#services' },
    { label: 'Storage Solutions', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#why-choose-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Blog', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Priority Moving Group"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Professional moving services for homes and businesses. We make your move
              simple, safe, and stress-free every time.
            </p>
            <div className="space-y-3">
              <a href="tel:2394960310" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" /> (239) 496-0310
              </a>
              <a href="mailto:dispatch@prioritymovinggroup.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" /> dispatch@prioritymovinggroup.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> 3437 NW 55th St, Fort Lauderdale, FL 33309
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/people/Priority-Moving-Group/61574392643386/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">{cat}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Priority Moving Group. All rights reserved.
          </p>
          <div className="flex gap-5 text-gray-500 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '855-702-5478', href: 'tel:8557025478' },
  { icon: Mail, label: 'Email', value: 'dispatch@prioritymovinggroup.com', href: 'mailto:dispatch@prioritymovinggroup.com' },
  { icon: MapPin, label: 'Address', value: '3437 NW 55th St, Fort Lauderdale, FL 33309', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sun: 10am–9pm', href: '#' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Contact Us</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Get In Touch<br />
            <span className="text-primary">We&apos;re Here to Help</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Move?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Contact us today for a free consultation and quote. Our friendly team is ready to
                answer any questions and help plan your perfect move.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Google Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=3437+NW+55th+St+Fort+Lauderdale+FL+33309"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <iframe
              src="https://maps.google.com/maps?q=3437+NW+55th+St,+Fort+Lauderdale,+FL+33309&output=embed&z=15"
              width="100%"
              height="340"
              style={{ border: 0, display: 'block', pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Priority Moving Group location"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

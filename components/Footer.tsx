import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const links = {
  Services: ['Residential Moving', 'Commercial Moving', 'Long-Distance Moving', 'Packing Services', 'Storage Solutions'],
  Company: ['About Us', 'How It Works', 'Reviews', 'Careers', 'Blog'],
  Support: ['Get a Quote', 'Contact Us', 'FAQ', 'Service Areas', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-primary rounded p-2">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="leading-none">
                <p className="font-black text-base tracking-widest uppercase">Priority</p>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Moving Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Professional moving services for homes and businesses. We make your move
              simple, safe, and stress-free every time.
            </p>
            <div className="space-y-3">
              <a href="tel:5551234567" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" /> (555) 123-4567
              </a>
              <a href="mailto:info@prioritymoving.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" /> info@prioritymoving.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> 123 Main Street, New York, NY 10001
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">{cat}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

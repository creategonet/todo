import { Home, Building2, MapPin, Package, Warehouse, Piano } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Moving',
    desc: 'Smooth and stress-free home relocations. We handle your belongings with care from start to finish.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Building2,
    title: 'Commercial Moving',
    desc: 'Minimize business downtime with our efficient office and commercial moving services.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MapPin,
    title: 'Long-Distance Moving',
    desc: 'Cross-country relocations handled with precision, care, and full-value protection.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Package,
    title: 'Packing Services',
    desc: 'Full-service packing using premium materials to protect fragile and valuable items.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    desc: 'Secure, climate-controlled storage for short and long-term needs at affordable rates.',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Piano,
    title: 'Piano & Specialty',
    desc: 'Expert handling of pianos, antiques, fine art, and other oversized or delicate items.',
    color: 'bg-red-50 text-red-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Our Services</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Everything You Need<br />
            <span className="text-primary">For Your Move</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            From local apartment moves to cross-country relocations, we offer a complete range of
            moving services tailored to your needs and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group border border-gray-100 rounded-xl p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded hover:bg-primary-dark transition-colors"
          >
            Get a Custom Quote →
          </a>
        </div>
      </div>
    </section>
  )
}

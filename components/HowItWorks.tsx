import { ClipboardList, CalendarCheck, Package2, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: ClipboardList,
    title: 'Get Your Quote',
    desc: "Fill out our simple form or call us. We'll provide a free, no-obligation quote within 1 hour.",
  },
  {
    n: '02',
    icon: CalendarCheck,
    title: 'Schedule Your Move',
    desc: 'Pick a date and time that works for you. We offer flexible scheduling including weekends.',
  },
  {
    n: '03',
    icon: Package2,
    title: 'Pack & Load',
    desc: 'Our expert team arrives on time, carefully wraps and packs every item, then loads the truck.',
  },
  {
    n: '04',
    icon: CheckCircle2,
    title: 'Safe Delivery',
    desc: 'We deliver everything safely to your new home or office and place it exactly where you want it.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">How It Works</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Moving is Easy<br />
            <span className="text-primary">With Priority</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Our streamlined 4-step process makes your move completely hassle-free from the first call to the final box.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map(({ n, icon: Icon, title, desc }, idx) => (
            <div key={n} className="relative text-center">
              {/* Connector on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-primary/20" />
              )}

              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg mx-auto">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#why-choose-us"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded hover:bg-primary-dark transition-colors"
          >
            Start Your Move Today →
          </a>
        </div>
      </div>
    </section>
  )
}

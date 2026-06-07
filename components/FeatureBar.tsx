import { Truck, Package, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Local & Long-Distance',
    desc: 'Moving anywhere, near or far.',
  },
  {
    icon: Package,
    title: 'Packing & Protection',
    desc: 'Professional packing and quality materials.',
  },
  {
    icon: Users,
    title: 'Trained Movers',
    desc: 'Experienced, friendly and careful team.',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    desc: 'We respect your time and deliver on schedule.',
  },
]

export default function FeatureBar() {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-[15px] leading-snug">{title}</h3>
                <p className="text-white/70 text-xs lg:text-sm mt-1 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

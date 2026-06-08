import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface PolicyLayoutProps {
  title: string
  subtitle?: string
  effectiveDate?: string
  children: React.ReactNode
}

export default function PolicyLayout({ title, subtitle, effectiveDate, children }: PolicyLayoutProps) {
  return (
    <>
      <Navbar />
      {/* Hero banner */}
      <section className="bg-gray-900 pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{title}</h1>
          {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
          {effectiveDate && <p className="text-gray-500 text-sm mt-3">{effectiveDate}</p>}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 policy-content">
          {children}
        </div>
      </section>

      <Footer />
    </>
  )
}

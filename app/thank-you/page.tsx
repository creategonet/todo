import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone } from 'lucide-react'

export const metadata = {
  title: 'Thank You | Priority Moving Group',
}

const steps = [
  { text: 'Call now to receive your Quote' },
  { text: 'Lock in your exclusive $500 "Call Now" Discount when you use the phrase "PRIORITY"' },
  { text: 'Finalize your Moving Date' },
]

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col">
        <section className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="max-w-3xl w-full text-center">

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Thank You For Your Inquiry!
            </h1>
            <p className="text-gray-500 text-base mb-10">
              Call Now to discuss your Quote with one of our experts and finalize your move!
            </p>

            {/* Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-8">
              <h2 className="text-2xl font-black text-primary mb-8">
                Need Your Estimate Sooner?
              </h2>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
                {/* Agent photo */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/mover-portrait.png"
                      alt="Priority Moving Group specialist"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-5 flex-1">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 text-base leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:2394960310"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-12 py-5 rounded-xl hover:bg-primary-dark transition-colors text-base uppercase tracking-wider shadow-lg shadow-primary/30"
            >
              <Phone className="h-5 w-5" />
              CALL (239) 496-0310
            </a>

            {/* Back link */}
            <p className="mt-8 text-gray-400 text-sm">
              <a href="/" className="hover:text-primary transition-colors underline">
                ← Back to homepage
              </a>
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

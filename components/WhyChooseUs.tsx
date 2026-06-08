'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Users, Package2, MapPin, ClipboardList } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const benefits = [
  'Transparent pricing – no hidden fees',
  'Fully licensed & insured',
  'Careful with every item',
  'Great communication, every step of the way',
]

const stats = [
  { icon: Users, value: '1,500+', label: 'Happy Customers' },
  { icon: Package2, value: '2,000+', label: 'Moves Completed' },
  { icon: MapPin, value: '50+', label: 'Cities Served' },
]

export default function WhyChooseUs() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setDone(true)
      reset()
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Left — text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-widest">Why Choose Us</span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-black leading-tight text-gray-900">
              Your Move.<br />
              <span className="text-primary">Our Priority.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We go the extra mile to make your move smooth, safe, and
              worry-free from start to finish.
            </p>

            <ul className="space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 text-sm font-bold px-6 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors"
            >
              LEARN MORE ABOUT US →
            </a>
          </div>

          {/* Center — overlapping images layout */}
          <div className="relative h-[540px]">
            <div className="absolute inset-x-0 top-0 bottom-28 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/mover-portrait.png"
                alt="Professional mover smiling and holding a box"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[58%] h-52 rounded-xl overflow-hidden border-[5px] border-white shadow-xl z-10">
              <Image
                src="/images/hero-movers.png"
                alt="Priority Moving Group team at work"
                fill
                sizes="(max-width: 1024px) 60vw, 20vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-20 w-28 h-28 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-4 border-primary bg-white shadow-xl flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary flex flex-col items-center justify-center text-center px-1">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="8" height="8" viewBox="0 0 24 24" fill="#2d5a1b">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-black text-primary text-base leading-none">100%</p>
                  <p className="text-[9px] text-primary font-bold leading-tight mt-0.5 uppercase tracking-wide">
                    Satisfaction<br />Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form + stats */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
              {done ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary mb-5" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setDone(false)}
                    className="bg-primary text-white px-6 py-2.5 rounded font-semibold hover:bg-primary-dark transition-colors text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
                  <div className="flex items-center gap-2 mb-5">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Send Us a Message</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="Full Name *"
                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="Email *"
                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="Phone"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <select
                        {...register('subject')}
                        className={`input-field appearance-none ${errors.subject ? 'input-error' : ''}`}
                      >
                        <option value="">Subject *</option>
                        <option value="quote">Get a Quote</option>
                        <option value="schedule">Schedule a Move</option>
                        <option value="question">General Question</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your move… *"
                      className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-primary py-3.5 rounded font-bold text-sm uppercase tracking-wider"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-black text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

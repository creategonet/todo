'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:5551234567' },
  { icon: Mail, label: 'Email', value: 'info@prioritymoving.com', href: 'mailto:info@prioritymoving.com' },
  { icon: MapPin, label: 'Address', value: '123 Main Street, New York, NY 10001', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 7am–8pm | Sun: 9am–6pm', href: '#' },
]

export default function ContactSection() {
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

        <div className="grid lg:grid-cols-2 gap-12">
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

            {/* Map placeholder */}
            <div className="h-52 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="h-10 w-10 mx-auto mb-2" />
                <p className="text-sm font-medium">Google Maps</p>
                <p className="text-xs opacity-70">Add &lt;iframe&gt; embed here</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {done ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="John Smith"
                      className={`input-field ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={`input-field ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Phone</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Subject *</label>
                    <select
                      {...register('subject')}
                      className={`input-field appearance-none ${errors.subject ? 'input-error' : ''}`}
                    >
                      <option value="">Select subject</option>
                      <option value="quote">Get a Quote</option>
                      <option value="schedule">Schedule a Move</option>
                      <option value="question">General Question</option>
                      <option value="feedback">Feedback / Complaint</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your move…"
                    className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-4 rounded-lg font-bold text-sm uppercase tracking-wider"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

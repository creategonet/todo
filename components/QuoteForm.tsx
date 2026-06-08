'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const homeSizes = ['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms', 'Office / Commercial']

const steps = [
  { pct: 33, label: '33% Complete' },
  { pct: 66, label: '66% Complete' },
  { pct: 99, label: '99% Complete' },
]

export default function QuoteForm() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState({
    originZip: '',
    destinationZip: '',
    moveDate: '',
    moveSize: '',
    name: '',
    email: '',
    phone: '',
  })

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const next = () => setStep((s) => s + 1)
  const back = () => setStep((s) => s - 1)

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again or call us.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="bg-[#8DC63F] rounded-2xl p-8 text-center shadow-xl">
        <CheckCircle2 className="h-14 w-14 text-white mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-white/80 text-sm mb-6">
          We&apos;ll contact you within 1 business hour with your personalised quote.
        </p>
        <button
          onClick={() => { setDone(false); setStep(0); setForm({ originZip: '', destinationZip: '', moveDate: '', moveSize: '', name: '', email: '', phone: '' }) }}
          className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
        >
          Submit Another
        </button>
      </div>
    )
  }

  const { pct, label } = steps[step]

  return (
    <div className="bg-[#8DC63F] rounded-2xl p-7 shadow-xl">
      {/* Progress bar — hidden on first step */}
      {step > 0 && (
        <div className="mb-5">
          <div className="w-full bg-white/40 rounded-full h-2.5 mb-1.5">
            <div
              className="bg-gray-900 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-center text-gray-900 font-semibold text-sm">{label}</p>
        </div>
      )}

      {/* Step 1 — Zip Codes */}
      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Origin Zip Code *</label>
            <input
              type="text"
              value={form.originZip}
              onChange={(e) => set('originZip', e.target.value)}
              placeholder="Origin Zip Code..."
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Destination Zip Code *</label>
            <input
              type="text"
              value={form.destinationZip}
              onChange={(e) => set('destinationZip', e.target.value)}
              placeholder="Destination Zip Code..."
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
            />
          </div>
          <button
            onClick={() => form.originZip && form.destinationZip && next()}
            className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 2 — Move Date & Size */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Move Date *</label>
            <input
              type="date"
              value={form.moveDate}
              onChange={(e) => set('moveDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Move Size *</label>
            <select
              value={form.moveSize}
              onChange={(e) => set('moveSize', e.target.value)}
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors appearance-none"
            >
              <option value="">Studio</option>
              {homeSizes.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex gap-3">
            <button
              onClick={back}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Back
            </button>
            <button
              onClick={() => form.moveDate && next()}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Contact Info */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your Name..."
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Your Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="Your Email..."
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              placeholder="Your Number..."
              className="w-full bg-white border-2 border-transparent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder-gray-400"
            />
          </div>
          <p className="text-center font-bold text-gray-900 text-sm">Save up to 20% on moving costs</p>
          {error && <p className="text-red-800 text-sm font-medium">{error}</p>}
          <div className="flex gap-3">
            <button
              onClick={back}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting || !form.name || !form.email || !form.phone}
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
            >
              {submitting ? 'Sending…' : 'Free Estimate'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

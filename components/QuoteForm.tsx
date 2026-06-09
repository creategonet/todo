'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const homeSizes = ['Studio', 'Two Bedrooms', 'Three Bedrooms', '4+ Bedrooms']

const steps = [
  { pct: 66, label: '66% Complete' },
  { pct: 99, label: '99% Complete' },
]

export default function QuoteForm() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const [form, setForm] = useState({
    origin_zip: '',
    dest_zip: '',
    move_date: '',
    move_size: '',
    name: '',
    email: '',
    tel: '',
    domen: 'prioritymovinggroup.com',
  })

  const set = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const validate = (fields: string[]) => {
    const newErrors: Record<string, boolean> = {}
    let valid = true
    fields.forEach((f) => {
      if (!form[f as keyof typeof form].trim()) {
        newErrors[f] = true
        valid = false
      }
    })
    setErrors(newErrors)
    return valid
  }

  const next = () => {
    const valid = step === 0
      ? validate(['origin_zip', 'dest_zip'])
      : validate(['move_date', 'move_size'])
    if (valid) setStep((s) => s + 1)
  }

  const back = () => setStep((s) => s - 1)

  const handleSubmit = async () => {
    if (!validate(['name', 'email', 'tel'])) return
    setSubmitting(true)
    try {
      await fetch('https://yourmover.ai/wp-json/granot/v2/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // redirect regardless
    } finally {
      setSubmitting(false)
      router.push('/thank-you')
    }
  }


  const inputClass = (field: string) =>
    `w-full bg-white border-2 ${errors[field] ? 'border-red-400' : 'border-gray-300'} rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder-gray-400`

  return (
    <div className="bg-white rounded-2xl p-7 shadow-xl">
      {/* Progress bar — hidden on first step */}
      {step > 0 && (
        <div className="mb-5">
          <div className="w-full bg-primary/15 rounded-full h-2.5 mb-1.5">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${steps[step - 1].pct}%` }}
            />
          </div>
          <p className="text-center text-primary font-semibold text-sm">{steps[step - 1].label}</p>
        </div>
      )}

      {/* Step 1 — Zip Codes */}
      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Origin Zip Code *</label>
            <input
              type="text"
              value={form.origin_zip}
              onChange={(e) => set('origin_zip', e.target.value)}
              placeholder="Origin Zip Code..."
              className={inputClass('origin_zip')}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Destination Zip Code *</label>
            <input
              type="text"
              value={form.dest_zip}
              onChange={(e) => set('dest_zip', e.target.value)}
              placeholder="Destination Zip Code..."
              className={inputClass('dest_zip')}
            />
          </div>
          <button
            onClick={next}
            className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm"
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
              value={form.move_date}
              onChange={(e) => set('move_date', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={inputClass('move_date')}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Move Size *</label>
            <select
              value={form.move_size}
              onChange={(e) => set('move_size', e.target.value)}
              className={`${inputClass('move_size')} appearance-none`}
            >
              <option value="">Select your move size</option>
              {homeSizes.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex gap-3">
            <button onClick={back} className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">Back</button>
            <button onClick={next} className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">Continue</button>
          </div>
        </div>
      )}

      {/* Step 3 — Contact Info */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Name *</label>
            <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input
              type="text"
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Your Name..."
              className={inputClass('name')}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Your Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="Your Email..."
              className={inputClass('email')}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-900 text-sm mb-1.5">Phone Number *</label>
            <input
              type="tel"
              value={form.tel}
              onChange={(e) => set('tel', e.target.value)}
              placeholder="Your Number..."
              className={inputClass('tel')}
            />
          </div>
          <p className="text-center font-bold text-gray-900 text-sm">Save up to 20% on moving costs</p>
          <div className="flex gap-3">
            <button onClick={back} className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm">Back</button>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm disabled:opacity-50"
            >
              {submitting ? 'Sending…' : 'Free Estimate'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

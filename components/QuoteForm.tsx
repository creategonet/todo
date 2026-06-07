'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, ClipboardList, CheckCircle2 } from 'lucide-react'

const schema = z.object({
  movingFrom: z.string().min(1, 'Required'),
  movingTo: z.string().min(1, 'Required'),
  moveDate: z.string().min(1, 'Required'),
  homeSize: z.string().min(1, 'Required'),
})

type FormData = z.infer<typeof schema>

const homeSizes = [
  'Studio / 1 Bedroom',
  '2 Bedrooms',
  '3 Bedrooms',
  '4 Bedrooms',
  '5+ Bedrooms',
  'Office / Commercial',
]

const cities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA',
  'Other',
]

export default function QuoteForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setDone(true)
      reset()
    } catch {
      setError('Something went wrong. Please try again or call us.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
        <p className="text-gray-500 text-sm mb-6">
          We&apos;ll contact you within 1 business hour with your personalised quote.
        </p>
        <button
          onClick={() => setDone(false)}
          className="bg-primary text-white px-6 py-2.5 rounded font-semibold hover:bg-primary-dark transition-colors text-sm"
        >
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Get Your Free Quote</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
        {/* Moving From */}
        <div className="relative">
          <select
            {...register('movingFrom')}
            className={`input-field appearance-none pr-10 ${errors.movingFrom ? 'input-error' : ''}`}
          >
            <option value="">Moving From</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
          {errors.movingFrom && <p className="text-red-500 text-xs mt-1">{errors.movingFrom.message}</p>}
        </div>

        {/* Moving To */}
        <div>
          <input
            {...register('movingTo')}
            type="text"
            placeholder="Moving To"
            className={`input-field ${errors.movingTo ? 'input-error' : ''}`}
          />
          {errors.movingTo && <p className="text-red-500 text-xs mt-1">{errors.movingTo.message}</p>}
        </div>

        {/* Move Date */}
        <div>
          <input
            {...register('moveDate')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={`input-field ${errors.moveDate ? 'input-error' : ''}`}
          />
          {errors.moveDate && <p className="text-red-500 text-xs mt-1">{errors.moveDate.message}</p>}
        </div>

        {/* Home Size */}
        <div className="relative">
          <select
            {...register('homeSize')}
            className={`input-field appearance-none pr-10 ${errors.homeSize ? 'input-error' : ''}`}
          >
            <option value="">Home Size</option>
            {homeSizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
          {errors.homeSize && <p className="text-red-500 text-xs mt-1">{errors.homeSize.message}</p>}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full btn-primary py-4 rounded font-bold text-sm uppercase tracking-wider"
        >
          {submitting ? 'Submitting…' : 'Get My Free Quote'}
        </button>
      </form>
    </div>
  )
}

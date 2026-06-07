'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

function GoogleIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

const reviews = [
  {
    name: 'Sarah M.',
    location: 'New York, NY',
    rating: 5,
    text: 'Priority Moving Group made our cross-country move a breeze! The team was professional, careful, and arrived exactly on time. Not a single item was damaged. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    name: 'James K.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: "I've moved 4 times in the last 5 years and this was by far the best experience. The crew wrapped everything so carefully and they were incredibly efficient. Worth every penny!",
    date: '1 month ago',
  },
  {
    name: 'Emily R.',
    location: 'Chicago, IL',
    rating: 5,
    text: 'The quote was spot-on with zero hidden fees. The movers were friendly, worked incredibly hard, and even helped reassemble furniture in the new place. Amazing service!',
    date: '3 weeks ago',
  },
  {
    name: 'Michael T.',
    location: 'Houston, TX',
    rating: 5,
    text: 'Used Priority for our office relocation. Minimal downtime, zero damage, and excellent communication throughout. They finished 2 hours ahead of schedule!',
    date: '1 week ago',
  },
  {
    name: 'Lisa P.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: "From the initial quote to final delivery, everything was seamless. The team treated my antiques like their own. 10/10 would use Priority again!",
    date: '5 days ago',
  },
]

const PAGE = 3

export default function Reviews() {
  const [start, setStart] = useState(0)
  const visible = reviews.slice(start, start + PAGE)
  const canPrev = start > 0
  const canNext = start + PAGE < reviews.length

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Customer Reviews</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            What Our Customers<br />
            <span className="text-primary">Are Saying</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
            <GoogleIcon />
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <span className="font-black text-gray-900">5.0</span>
            <span className="text-gray-500 text-sm">500+ Google Reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visible.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-7 flex flex-col">
              <Quote className="h-7 w-7 text-primary/20 mb-4" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location} · {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setStart(Math.max(0, start - 1))}
            disabled={!canPrev}
            className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-500">{start + 1}–{Math.min(start + PAGE, reviews.length)} of {reviews.length}</span>
          <button
            onClick={() => setStart(Math.min(reviews.length - PAGE, start + 1))}
            disabled={!canNext}
            className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

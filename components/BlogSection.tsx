import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    img: '/images/articol1.jpg',
    title: 'Flat Rate Movers With Packing Services: Are Bundled Moves Actually Worth It?',
    excerpt: 'Discover the real value behind flat-rate moving packages and whether bundling packing services saves you time and money.',
  },
  {
    img: '/images/articol2.jpg',
    title: 'The Complete Cross-Country Relocation Timeline: From Initial Quote to Final Unpacking',
    excerpt: 'A step-by-step guide to planning your long-distance move — from the first phone call to the last box unpacked.',
  },
  {
    img: '/images/articol3.jpg',
    title: 'Moving Cross-Country in the USA? What You Should Know Before Choosing a Moving Company',
    excerpt: 'Not all movers are created equal. Learn the key questions to ask and red flags to avoid when hiring for a long-distance move.',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Everything You Need to Know{' '}
            <span className="text-primary">Before Moving</span>
          </h2>
          <p className="text-gray-500 text-sm italic max-w-xl mx-auto leading-relaxed">
            Moving can be stressful. We&apos;re here to make it easier with expert tips, checklists, and guides.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-3">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                READ MORE <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

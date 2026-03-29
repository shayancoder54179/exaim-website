import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts } from './posts'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description: 'Insights on exam preparation, AI in education, and study strategies for GCSE and IGCSE students.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wrapper">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-brand-muted max-w-lg">
            Insights on exam preparation, AI in education, and study strategies.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card-hover p-6 group flex flex-col cursor-pointer"
              >
                <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md self-start mb-4">
                  {post.category}
                </span>
                <h2 className="text-base font-semibold text-brand-text mb-2 group-hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-muted">{post.date}</span>
                  <span className="text-xs text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

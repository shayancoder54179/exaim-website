import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts } from '../posts'
import { createPageMetadata } from '@/lib/metadata'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-brand-text mt-8 mb-3">
          {trimmed.replace('## ', '')}
        </h2>
      )
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <p key={key++} className="text-sm font-semibold text-brand-text mt-4 mb-1">
          {trimmed.replace(/\*\*/g, '')}
        </p>
      )
    } else if (trimmed.startsWith('- **')) {
      const match = trimmed.match(/- \*\*(.+?)\*\*(.*)/)
      if (match) {
        elements.push(
          <li key={key++} className="flex items-start gap-2 text-sm text-brand-muted ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
            <span><strong className="text-brand-text">{match[1]}</strong>{match[2]}</span>
          </li>
        )
      }
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="flex items-start gap-2 text-sm text-brand-muted ml-4">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
          <span>{trimmed.replace('- ', '')}</span>
        </li>
      )
    } else {
      elements.push(
        <p key={key++} className="text-sm text-brand-muted leading-relaxed mb-3">
          {trimmed}
        </p>
      )
    }
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <Navbar />

      <article className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wrapper max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-text transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to blog
          </Link>

          {/* Header */}
          <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-brand-muted mb-10">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.date}</span>
          </div>

          {/* Content */}
          <div className="space-y-1">
            {renderContent(post.content)}
          </div>

          {/* Author */}
          <div className="mt-14 pt-8 border-t border-brand-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white">
                E
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text">{post.author}</p>
                <p className="text-xs text-brand-muted">ExAIm</p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-14 pt-8 border-t border-brand-border">
              <h3 className="text-lg font-semibold text-brand-text mb-5">Related posts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="glass-card-hover p-5 cursor-pointer group"
                  >
                    <span className="text-xs text-indigo-400 mb-2 block">{rp.category}</span>
                    <h4 className="text-sm font-medium text-brand-text group-hover:text-indigo-400 transition-colors leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </>
  )
}

import { Sparkles } from 'lucide-react'

export default function AceChatMockup() {
  return (
    <div className="bg-brand-surface rounded-2xl border border-brand-border mockup-shadow max-w-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-brand-border">
        <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-brand-text">Ace</p>
          <p className="text-xs text-emerald-400">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3">
        {/* Student message */}
        <div className="flex justify-end">
          <div className="bg-indigo-600 rounded-2xl rounded-br-md px-3.5 py-2 max-w-[85%]">
            <p className="text-sm text-white">I don&apos;t understand mitosis</p>
          </div>
        </div>

        {/* Ace response */}
        <div className="flex justify-start">
          <div className="bg-brand-bg rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[90%] border border-brand-border">
            <p className="text-sm text-brand-text leading-relaxed">
              Mitosis is how cells divide to make identical copies. Here&apos;s the key idea:
            </p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <span className="text-indigo-400 mt-0.5">&bull;</span>
                <span>One cell splits into <span className="text-brand-text">two identical daughter cells</span></span>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <span className="text-indigo-400 mt-0.5">&bull;</span>
                <span>DNA is <span className="text-brand-text">copied first</span>, then divided equally</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <span className="text-indigo-400 mt-0.5">&bull;</span>
                <span>Used for <span className="text-brand-text">growth and repair</span>, not making sex cells</span>
              </li>
            </ul>
            <p className="mt-2 text-xs text-brand-muted">
              Want me to walk through each phase?
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 bg-brand-bg rounded-xl border border-brand-border px-3 py-2">
          <p className="text-xs text-brand-muted flex-1">Ask Ace anything...</p>
          <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

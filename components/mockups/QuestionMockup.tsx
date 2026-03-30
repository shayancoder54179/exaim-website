export default function QuestionMockup() {
  return (
    <div className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-md">
      {/* Subject tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md">
          GCSE Biology
        </span>
        <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-md">
          AQA
        </span>
      </div>

      {/* Question */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <p className="text-sm font-medium text-brand-text leading-relaxed">
            Describe the process of osmosis and explain its importance in plant cells.
          </p>
          <span className="text-xs text-brand-muted whitespace-nowrap bg-brand-bg px-2 py-1 rounded border border-brand-border">
            6 marks
          </span>
        </div>
      </div>

      {/* Text area */}
      <div className="bg-brand-bg rounded-lg border border-brand-border p-3 mb-3 min-h-[80px]">
        <p className="text-xs text-brand-muted">Type your answer here...</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-brand-muted">AI will grade your response</span>
        <button className="px-4 py-3 min-h-[44px] text-xs font-medium text-white bg-indigo-600 rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  )
}

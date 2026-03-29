export default function GradebookMockup() {
  const students = [
    { name: 'Sarah K.', scores: [92, 78, 85] },
    { name: 'Omar A.', scores: [67, 54, 71] },
    { name: 'Priya M.', scores: [88, 91, 79] },
  ]
  const exams = ['Bio Topic 1', 'Chem Mid-term', 'Physics Quiz']

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 bg-emerald-400/10'
    if (score >= 60) return 'text-amber-400 bg-amber-400/10'
    return 'text-red-400 bg-red-400/10'
  }

  return (
    <div className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-brand-text">Gradebook</p>
          <p className="text-xs text-brand-muted">GCSE Biology &middot; Year 11</p>
        </div>
        <span className="text-xs text-brand-muted bg-brand-bg px-2.5 py-1 rounded-md border border-brand-border">
          3 students
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-brand-border">
              <th className="text-left py-2 pr-3 text-brand-muted font-medium">Student</th>
              {exams.map((exam) => (
                <th key={exam} className="text-center py-2 px-2 text-brand-muted font-medium whitespace-nowrap">
                  {exam}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={student.name} className="border-b border-brand-border/50 last:border-0">
                <td className="py-2.5 pr-3 text-sm text-brand-text font-medium">{student.name}</td>
                {student.scores.map((score, j) => (
                  <td key={j} className="py-2.5 px-2 text-center">
                    <div className="relative inline-flex items-center">
                      <span className={`px-2 py-0.5 rounded-md font-medium ${getScoreColor(score)}`}>
                        {score}%
                      </span>
                      {i === 1 && j === 1 && (
                        <span className="absolute -top-1 -right-3 text-[9px] text-purple-400 bg-purple-400/10 px-1 rounded">
                          retake
                        </span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

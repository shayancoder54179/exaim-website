export default function AdminDashboardMockup() {
  const stats = [
    { label: 'Students', value: '847' },
    { label: 'Classes', value: '12' },
    { label: 'Teachers', value: '23' },
    { label: 'Avg Score', value: '74%' },
  ]

  const classes = [
    { name: 'GCSE Bio 10A', teacher: 'Mr. Ahmed', students: 28, avg: 78, status: 'Active' },
    { name: 'GCSE Chem 11B', teacher: 'Ms. Clarke', students: 24, avg: 71, status: 'Active' },
    { name: 'IGCSE Business Y10', teacher: 'Mr. Patel', students: 31, avg: 69, status: 'Active' },
    { name: 'GCSE Physics 10C', teacher: 'Ms. Wong', students: 26, avg: 82, status: 'Active' },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 70) return 'text-amber-400'
    return 'text-red-400'
  }

  return (
    <div className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-medium text-brand-text">School Admin Dashboard</p>
          <p className="text-xs text-brand-muted">Harrow International School</p>
        </div>
        <span className="text-xs text-brand-muted bg-brand-bg px-2.5 py-1 rounded-md border border-brand-border">
          2025-26
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-brand-bg rounded-xl p-3 border border-brand-border text-center">
            <p className="text-lg font-bold text-brand-text">{stat.value}</p>
            <p className="text-xs text-brand-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-brand-border">
              <th className="text-left py-2 pr-3 text-brand-muted font-medium">Class</th>
              <th className="text-left py-2 px-2 text-brand-muted font-medium">Teacher</th>
              <th className="text-center py-2 px-2 text-brand-muted font-medium">Students</th>
              <th className="text-center py-2 px-2 text-brand-muted font-medium">Avg Score</th>
              <th className="text-right py-2 pl-2 text-brand-muted font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.name} className="border-b border-brand-border/50 last:border-0">
                <td className="py-2.5 pr-3 text-sm text-brand-text font-medium whitespace-nowrap">{cls.name}</td>
                <td className="py-2.5 px-2 text-brand-muted whitespace-nowrap">{cls.teacher}</td>
                <td className="py-2.5 px-2 text-center text-brand-muted">{cls.students}</td>
                <td className={`py-2.5 px-2 text-center font-medium ${getScoreColor(cls.avg)}`}>{cls.avg}%</td>
                <td className="py-2.5 pl-2 text-right">
                  <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                    {cls.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

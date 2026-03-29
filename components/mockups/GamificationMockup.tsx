import { Star, Lock, Trophy, Zap } from 'lucide-react'

export default function GamificationMockup() {
  return (
    <div className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm">
      {/* XP Bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-text">Level 8</p>
              <p className="text-xs text-brand-muted">Rising Scholar</p>
            </div>
          </div>
          <span className="text-xs text-indigo-400 font-medium">2,450 XP</span>
        </div>
        <div className="w-full h-2 bg-brand-bg rounded-full overflow-hidden border border-brand-border">
          <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" style={{ width: '72%' }} />
        </div>
        <p className="text-xs text-brand-muted mt-1">550 XP to Level 9</p>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-3 bg-brand-bg rounded-xl p-3 border border-brand-border mb-4">
        <div className="text-2xl">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.5 8 3 12 3 15a9 9 0 0018 0c0-3-3.5-7-9-13z" fill="#F59E0B" />
            <path d="M12 8c-2.5 3-4 5.5-4 7.5a4 4 0 008 0c0-2-1.5-4.5-4-7.5z" fill="#FBBF24" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-orange-400">7 day streak</p>
          <p className="text-xs text-brand-muted">Keep it going! Best: 14 days</p>
        </div>
      </div>

      {/* Badges */}
      <p className="text-xs font-medium text-brand-muted uppercase tracking-wider mb-2.5">
        Achievements
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2 bg-brand-bg rounded-lg p-2.5 border border-brand-border">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Trophy className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-medium text-brand-text">First 100%</p>
            <p className="text-[10px] text-brand-muted">Perfect score</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-brand-bg rounded-lg p-2.5 border border-brand-border">
          <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <Star className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <p className="text-xs font-medium text-brand-text">10 Exams</p>
            <p className="text-[10px] text-brand-muted">Completed</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-brand-bg rounded-lg p-2.5 border border-brand-border/50 opacity-50">
          <div className="w-8 h-8 bg-brand-surface rounded-lg flex items-center justify-center">
            <Lock className="w-4 h-4 text-brand-muted" />
          </div>
          <div>
            <p className="text-xs font-medium text-brand-muted">Speed Demon</p>
            <p className="text-[10px] text-brand-muted">Locked</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-brand-bg rounded-lg p-2.5 border border-brand-border/50 opacity-50">
          <div className="w-8 h-8 bg-brand-surface rounded-lg flex items-center justify-center">
            <Lock className="w-4 h-4 text-brand-muted" />
          </div>
          <div>
            <p className="text-xs font-medium text-brand-muted">Ace Master</p>
            <p className="text-[10px] text-brand-muted">Locked</p>
          </div>
        </div>
      </div>
    </div>
  )
}

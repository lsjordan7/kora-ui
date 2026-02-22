import { useState } from 'react'

const HABITS = [
  { id: 'morning', label: 'Morning breathing', time: '5 min', done: true },
  { id: 'hydration', label: 'Hydration check', time: '—', done: true },
  { id: 'walk', label: 'Midday walk', time: '20 min', done: false },
  { id: 'journal', label: 'Evening journal', time: '10 min', done: false },
]

function CircleProgress({ score, color, size = 90, strokeWidth = 7 }) {
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke="rgba(242,240,255,0.08)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ - dash}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  )
}

function StressBar({ value }) {
  const getColor = (v) => {
    if (v < 40) return '#00E5C8'
    if (v < 65) return '#E8A598'
    return '#FF6B8A'
  }
  const label = value < 40 ? 'Low' : value < 65 ? 'Moderate' : 'High'
  const color = getColor(value)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-baseline">
        <span className="font-display" style={{ fontSize: 36, color: '#F2F0FF', fontWeight: 300 }}>
          {value}
        </span>
        <span className="font-ui text-xs px-2 py-0.5 rounded-full"
          style={{ background: `${color}22`, color, fontSize: 11 }}>
          {label}
        </span>
      </div>
      <div className="rounded-full overflow-hidden" style={{ height: 6, background: 'rgba(242,240,255,0.08)' }}>
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transition: 'width 1s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function Home({ onBack }) {
  const [habits, setHabits] = useState(HABITS)
  const [chatExpanded, setChatExpanded] = useState(false)

  const toggleHabit = (id) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, done: !h.done } : h))
  }

  const doneCount = habits.filter(h => h.done).length

  return (
    <div
      className="relative flex flex-col h-full overflow-hidden"
      style={{ background: '#0F0A1E' }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: 280,
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,200,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: 90 }}>

        {/* Space to clear the nav pills */}
        <div style={{ height: 72 }} />

        {/* Header */}
        <div className="px-6 mb-6 z-10 relative">
          <div className="flex items-center justify-between mb-1">
            <span className="font-ui" style={{ fontSize: 13, color: '#9B97B8' }}>
              Friday, Feb 21
            </span>
            <button
              className="flex items-center justify-center rounded-full"
              style={{
                width: 36,
                height: 36,
                background: 'rgba(242,240,255,0.07)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="5" r="3.5" stroke="#F2F0FF" strokeWidth="1.4"/>
                <path d="M2 15.5c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#F2F0FF" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <h1
            className="font-display font-light leading-tight"
            style={{ fontSize: 28, color: '#F2F0FF', lineHeight: 1.2 }}
          >
            Good morning,
            <br />
            <span style={{ fontStyle: 'italic' }}>Lindsey.</span>
          </h1>
        </div>

        {/* AI message bubble */}
        <div className="px-6 mb-5 z-10 relative">
          <button
            onClick={() => setChatExpanded(!chatExpanded)}
            className="w-full text-left rounded-2xl transition-all active:scale-[0.98]"
            style={{
              background: 'rgba(0,229,200,0.07)',
              border: '1px solid rgba(0,229,200,0.2)',
              padding: '14px 16px',
              cursor: 'pointer',
            }}
          >
            <div className="flex gap-3 items-start">
              {/* Kora orb */}
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  background: 'radial-gradient(circle, rgba(0,229,200,0.6) 0%, rgba(0,229,200,0.2) 70%)',
                  boxShadow: '0 0 12px rgba(0,229,200,0.3)',
                }}
              >
                <div className="rounded-full" style={{ width: 8, height: 8, background: '#00E5C8' }} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono" style={{ fontSize: 10, color: '#00E5C8', letterSpacing: '0.1em' }}>
                    KORA AI
                  </span>
                  <span className="font-ui" style={{ fontSize: 10, color: '#9B97B8' }}>
                    just now
                  </span>
                </div>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    color: '#00E5C8',
                    lineHeight: 1.55,
                    opacity: 0.9,
                  }}
                >
                  Your HRV last night was 12% above your baseline. Your nervous system recovered well — a good sign for today.
                </p>
                {chatExpanded && (
                  <p
                    className="font-mono mt-2"
                    style={{ fontSize: 12, color: 'rgba(0,229,200,0.65)', lineHeight: 1.6 }}
                  >
                    Try to protect your energy in the afternoon. Your data suggests a dip around 3pm.
                  </p>
                )}
              </div>

              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ flexShrink: 0, transform: chatExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
              >
                <path d="M4 6l4 4 4-4" stroke="#9B97B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Metric cards row */}
        <div className="px-6 mb-5 z-10 relative">
          <div className="grid grid-cols-2 gap-3">
            {/* Sleep score */}
            <div
              className="rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(242,240,255,0.07)' }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2C4.239 2 2 4.239 2 7s2.239 5 5 5c.69 0 1.348-.14 1.946-.394C6.675 10.97 5.5 9.136 5.5 7c0-2.136 1.175-3.97 2.946-4.606A4.978 4.978 0 007 2z" fill="#9B97B8"/>
                </svg>
                <span className="font-ui" style={{ fontSize: 11, color: '#9B97B8', letterSpacing: '0.04em' }}>
                  SLEEP SCORE
                </span>
              </div>

              <div className="relative flex items-center justify-center mb-3">
                <CircleProgress score={84} color="#00E5C8" size={88} strokeWidth={6} />
                <div className="absolute text-center">
                  <span className="font-display" style={{ fontSize: 26, color: '#F2F0FF', fontWeight: 300 }}>84</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-ui" style={{ fontSize: 11, color: '#9B97B8' }}>6h 42m</span>
                <span
                  className="font-ui px-2 py-0.5 rounded-full"
                  style={{ fontSize: 10, color: '#00E5C8', background: 'rgba(0,229,200,0.12)' }}
                >
                  Good
                </span>
              </div>
            </div>

            {/* Stress level */}
            <div
              className="rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(242,240,255,0.07)' }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="4.5" stroke="#9B97B8" strokeWidth="1.2" opacity="0.5"/>
                  <circle cx="7" cy="7" r="2.5" stroke="#9B97B8" strokeWidth="1.2" opacity="0.75"/>
                  <circle cx="7" cy="7" r="1" fill="#9B97B8"/>
                </svg>
                <span className="font-ui" style={{ fontSize: 11, color: '#9B97B8', letterSpacing: '0.04em' }}>
                  STRESS
                </span>
              </div>

              <StressBar value={39} />

              <div className="mt-3">
                <span className="font-ui" style={{ fontSize: 11, color: '#9B97B8' }}>
                  vs yesterday{' '}
                  <span style={{ color: '#00E5C8' }}>↓ 8pts</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Readiness strip */}
        <div className="px-6 mb-5 z-10 relative">
          <div
            className="rounded-2xl p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(232,165,152,0.12) 0%, rgba(0,229,200,0.05) 100%)',
              border: '1px solid rgba(232,165,152,0.2)',
            }}
          >
            <div>
              <span className="font-ui block" style={{ fontSize: 11, color: '#9B97B8', letterSpacing: '0.04em' }}>
                READINESS
              </span>
              <span className="font-display" style={{ fontSize: 24, color: '#E8A598', fontWeight: 300 }}>
                79
                <span className="font-ui" style={{ fontSize: 13, color: '#9B97B8', fontWeight: 400, marginLeft: 4 }}>
                  / 100
                </span>
              </span>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="font-ui px-3 py-1 rounded-full"
                style={{ fontSize: 12, color: '#E8A598', background: 'rgba(232,165,152,0.12)' }}>
                Ready to perform
              </span>
              <span className="font-ui" style={{ fontSize: 11, color: '#9B97B8' }}>
                HRV · Temp · Activity
              </span>
            </div>
          </div>
        </div>

        {/* Today's Habits */}
        <div className="px-6 z-10 relative">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-ui font-medium" style={{ fontSize: 15, color: '#F2F0FF' }}>
              Today's Habits
            </h3>
            <span className="font-ui" style={{ fontSize: 12, color: '#9B97B8' }}>
              {doneCount} of {habits.length}
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="rounded-full overflow-hidden mb-4"
            style={{ height: 3, background: 'rgba(242,240,255,0.08)' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${(doneCount / habits.length) * 100}%`,
                background: 'linear-gradient(90deg, #00E5C8, rgba(0,229,200,0.6))',
                transition: 'width 0.4s ease',
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            {habits.map(habit => (
              <button
                key={habit.id}
                onClick={() => toggleHabit(habit.id)}
                className="flex items-center gap-3 rounded-xl transition-all active:scale-[0.98] w-full text-left"
                style={{
                  padding: '12px 14px',
                  background: habit.done ? 'rgba(0,229,200,0.05)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${habit.done ? 'rgba(0,229,200,0.15)' : 'rgba(242,240,255,0.06)'}`,
                  cursor: 'pointer',
                }}
              >
                <div
                  className="flex-shrink-0 rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: 22,
                    height: 22,
                    background: habit.done ? '#00E5C8' : 'transparent',
                    border: habit.done ? 'none' : '1.5px solid rgba(242,240,255,0.2)',
                  }}
                >
                  {habit.done && (
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#0F0A1E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span
                  className="font-ui flex-1"
                  style={{
                    fontSize: 14,
                    color: habit.done ? 'rgba(242,240,255,0.5)' : '#F2F0FF',
                    textDecoration: habit.done ? 'line-through' : 'none',
                  }}
                >
                  {habit.label}
                </span>
                <span className="font-mono" style={{ fontSize: 11, color: '#9B97B8' }}>
                  {habit.time}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-around z-20"
        style={{
          height: 80,
          background: 'rgba(15,10,30,0.92)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(242,240,255,0.07)',
          paddingBottom: 16,
        }}
      >
        {[
          {
            label: 'Home', active: true,
            icon: <path d="M3 12V7.5L8 3l5 4.5V12a1 1 0 01-1 1h-2.5v-3h-3v3H4a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>,
          },
          {
            label: 'Insights', active: false,
            icon: <><path d="M3 14l4-5 3 3 4-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></>,
          },
          {
            label: 'Kora', active: false,
            icon: null,
            center: true,
          },
          {
            label: 'Habits', active: false,
            icon: <><circle cx="5" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M5 8H4a2 2 0 01-2-2V5m9 3h1a2 2 0 002-2V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M7.5 5v6M8.5 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
          },
          {
            label: 'Profile', active: false,
            icon: <><circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2 15c0-3 2.686-5.5 6-5.5s6 2.5 6 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
          },
        ].map((item) => (
          item.center ? (
            <button
              key={item.label}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 48,
                height: 48,
                background: 'radial-gradient(circle, rgba(0,229,200,0.5) 0%, rgba(0,229,200,0.25) 60%)',
                boxShadow: '0 0 20px rgba(0,229,200,0.3)',
                border: 'none',
                cursor: 'pointer',
                marginTop: -10,
              }}
            >
              <div className="rounded-full" style={{ width: 10, height: 10, background: '#00E5C8' }} />
            </button>
          ) : (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 10px' }}
            >
              <svg width="22" height="18" viewBox="0 0 16 16" fill="none"
                style={{ color: item.active ? '#00E5C8' : '#9B97B8' }}>
                {item.icon}
              </svg>
              <span
                className="font-ui"
                style={{ fontSize: 10, color: item.active ? '#00E5C8' : '#9B97B8' }}
              >
                {item.label}
              </span>
            </button>
          )
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'

const GOALS = [
  {
    id: 'sleep',
    label: 'Sleep',
    description: 'Better rest & recovery',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10c1.38 0 2.697-.28 3.893-.787C13.35 21.94 11 18.273 11 14c0-4.273 2.35-7.94 5.893-9.213A9.956 9.956 0 0014 4z" fill="#00E5C8" opacity="0.9"/>
        <path d="M20 6l1 2m2-4l-1 2m-2 0l2 1" stroke="#00E5C8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'stress',
    label: 'Stress',
    description: 'Calm the noise within',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#00E5C8" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="14" cy="14" r="5.5" stroke="#00E5C8" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="14" cy="14" r="2.5" fill="#00E5C8"/>
      </svg>
    ),
  },
  {
    id: 'energy',
    label: 'Energy',
    description: 'Sustain vitality daily',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M16 4L9 15h7l-3 9 9-12h-6l3-8z" fill="#00E5C8" opacity="0.9"/>
      </svg>
    ),
  },
  {
    id: 'focus',
    label: 'Focus',
    description: 'Sharpen your mind',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6v4M14 18v4M6 14h4M18 14h4" stroke="#00E5C8" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="4.5" stroke="#00E5C8" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="#00E5C8"/>
      </svg>
    ),
  },
]

export default function Onboarding({ onNext, onBack }) {
  const [selected, setSelected] = useState(null)

  const toggle = (id) => setSelected(prev => prev === id ? null : id)

  return (
    <div
      className="relative flex flex-col h-full overflow-hidden px-6 pb-10"
      style={{ background: '#0F0A1E', paddingTop: 72 }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 35% at 50% 0%, rgba(0,229,200,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-8 z-10">
        <button
          onClick={onBack}
          className="mr-2 flex items-center justify-center rounded-full transition-opacity active:opacity-60"
          style={{
            width: 36,
            height: 36,
            background: 'rgba(242,240,255,0.07)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#F2F0FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex gap-1.5 flex-1">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                height: 4,
                flex: i === 2 ? 2 : 1,
                background: i === 2 ? '#00E5C8' : 'rgba(242,240,255,0.15)',
              }}
            />
          ))}
        </div>

        <span
          className="font-ui ml-2"
          style={{ fontSize: 12, color: '#9B97B8' }}
        >
          2 of 4
        </span>
      </div>

      {/* Header */}
      <div className="z-10 mb-8">
        <h2
          className="font-display font-light leading-tight mb-2"
          style={{ fontSize: 30, color: '#F2F0FF', lineHeight: 1.2 }}
        >
          What brings you<br />
          <em style={{ fontStyle: 'italic' }}>here?</em>
        </h2>
        <p
          className="font-ui"
          style={{ fontSize: 14, color: '#9B97B8', lineHeight: 1.5 }}
        >
          Select what resonates most with you right now.
        </p>
      </div>

      {/* Goal cards */}
      <div className="flex flex-col gap-3 z-10 flex-1">
        {GOALS.map((goal) => {
          const isSelected = selected === goal.id
          return (
            <button
              key={goal.id}
              onClick={() => toggle(goal.id)}
              className="flex items-center gap-4 rounded-2xl transition-all active:scale-[0.98] text-left w-full"
              style={{
                background: isSelected
                  ? 'rgba(0,229,200,0.10)'
                  : 'rgba(255,255,255,0.04)',
                border: isSelected
                  ? '1.5px solid rgba(0,229,200,0.5)'
                  : '1.5px solid rgba(242,240,255,0.08)',
                padding: '16px 18px',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 0 20px rgba(0,229,200,0.10)' : 'none',
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: 50,
                  height: 50,
                  background: isSelected
                    ? 'rgba(0,229,200,0.15)'
                    : 'rgba(0,229,200,0.07)',
                }}
              >
                {goal.icon}
              </div>

              <div className="flex flex-col gap-0.5">
                <span
                  className="font-ui font-medium"
                  style={{ fontSize: 16, color: isSelected ? '#00E5C8' : '#F2F0FF' }}
                >
                  {goal.label}
                </span>
                <span
                  className="font-ui"
                  style={{ fontSize: 13, color: '#9B97B8' }}
                >
                  {goal.description}
                </span>
              </div>

              {/* Check indicator */}
              <div className="ml-auto">
                <div
                  className="rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: 22,
                    height: 22,
                    background: isSelected ? '#00E5C8' : 'transparent',
                    border: isSelected ? 'none' : '1.5px solid rgba(242,240,255,0.2)',
                  }}
                >
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#0F0A1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Continue button */}
      <div className="z-10 mt-6">
        <button
          onClick={onNext}
          disabled={!selected}
          className="font-ui font-medium w-full rounded-2xl transition-all active:scale-95"
          style={{
            background: selected ? '#00E5C8' : 'rgba(0,229,200,0.2)',
            color: selected ? '#0F0A1E' : 'rgba(242,240,255,0.35)',
            fontSize: 16,
            padding: '17px 0',
            border: 'none',
            cursor: selected ? 'pointer' : 'not-allowed',
            boxShadow: selected ? '0 4px 28px rgba(0,229,200,0.28)' : 'none',
            transition: 'all 0.25s',
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

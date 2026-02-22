export default function Welcome({ onNext }) {
  return (
    <div className="relative flex flex-col items-center justify-between h-full overflow-hidden px-6 pb-10"
      style={{ background: '#0F0A1E', paddingTop: 80 }}>

      {/* Radial bioluminescent glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(0,229,200,0.10) 0%, rgba(0,229,200,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Top section: wordmark */}
      <div className="flex flex-col items-center gap-1 z-10">
        <span
          className="font-mono tracking-[0.35em] text-xs uppercase"
          style={{ color: '#00E5C8', letterSpacing: '0.35em' }}
        >
          KORA
        </span>
      </div>

      {/* Breathing pulse orb */}
      <div className="relative flex items-center justify-center z-10" style={{ height: 200, width: 200 }}>
        {/* Outermost ring */}
        <div
          className="animate-breathe-outer absolute rounded-full"
          style={{
            width: 180,
            height: 180,
            background: 'radial-gradient(circle, rgba(0,229,200,0.08) 0%, transparent 70%)',
            border: '1px solid rgba(0,229,200,0.12)',
          }}
        />
        {/* Middle ring */}
        <div
          className="animate-breathe-mid absolute rounded-full"
          style={{
            width: 130,
            height: 130,
            background: 'radial-gradient(circle, rgba(0,229,200,0.15) 0%, transparent 70%)',
            border: '1px solid rgba(0,229,200,0.22)',
          }}
        />
        {/* Inner glowing core */}
        <div
          className="animate-breathe animate-pulse-glow absolute rounded-full"
          style={{
            width: 80,
            height: 80,
            background: 'radial-gradient(circle, rgba(0,229,200,0.85) 0%, rgba(0,229,200,0.55) 45%, rgba(0,229,200,0.15) 80%, transparent 100%)',
          }}
        />
        {/* Center dot */}
        <div
          className="relative rounded-full z-10"
          style={{
            width: 14,
            height: 14,
            background: '#00E5C8',
            boxShadow: '0 0 12px 4px rgba(0,229,200,0.7)',
          }}
        />
      </div>

      {/* Headline + body */}
      <div className="flex flex-col items-center text-center gap-4 z-10 px-2">
        <h1
          className="font-display font-light leading-tight"
          style={{
            fontSize: 36,
            color: '#F2F0FF',
            letterSpacing: '-0.01em',
            lineHeight: 1.18,
          }}
        >
          Know yourself<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>better.</em>
        </h1>

        <p
          className="font-ui"
          style={{
            fontSize: 15,
            color: '#9B97B8',
            lineHeight: 1.6,
            maxWidth: 270,
          }}
        >
          AI that listens to your body's signals and helps you make sense of them — every day.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-3 w-full z-10" style={{ maxWidth: 340 }}>
        <button
          onClick={onNext}
          className="font-ui font-medium w-full rounded-2xl transition-all active:scale-95"
          style={{
            background: '#00E5C8',
            color: '#0F0A1E',
            fontSize: 16,
            padding: '17px 0',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            boxShadow: '0 4px 28px rgba(0,229,200,0.30)',
          }}
        >
          Get started
        </button>

        <button
          className="font-ui font-medium w-full rounded-2xl transition-all active:scale-95"
          style={{
            background: 'transparent',
            color: '#F2F0FF',
            fontSize: 16,
            padding: '17px 0',
            border: '1.5px solid rgba(242,240,255,0.22)',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
        >
          I already have an account
        </button>

        <p
          className="text-center font-ui"
          style={{ color: '#9B97B8', fontSize: 11, marginTop: 4 }}
        >
          By continuing you agree to our Terms &amp; Privacy Policy
        </p>
      </div>
    </div>
  )
}

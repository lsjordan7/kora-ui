export default function PhoneFrame({ children, screen }) {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{ background: '#060412', fontFamily: 'DM Sans, system-ui, sans-serif' }}
    >
      {/* Ambient glow behind phone */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          background: 'radial-gradient(circle, rgba(0,229,200,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Phone shell */}
      <div
        className="relative rounded-[50px] overflow-hidden"
        style={{
          width: 393,
          height: 852,
          background: '#0F0A1E',
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.08),
            0 0 0 8px rgba(255,255,255,0.03),
            0 30px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(0,229,200,0.06)
          `,
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute z-50 flex items-center justify-center"
          style={{
            top: 14,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 36,
            background: '#000',
            borderRadius: 20,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          {/* Camera */}
          <div
            className="absolute"
            style={{
              right: 18,
              width: 10,
              height: 10,
              background: '#1A1030',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.06)',
            }}
          />
        </div>

        {/* Screen content */}
        <div className="w-full h-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Screen label */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
        style={{ pointerEvents: 'none' }}
      >
        <span
          className="font-mono px-3 py-1 rounded-full"
          style={{
            fontSize: 10,
            color: 'rgba(0,229,200,0.5)',
            background: 'rgba(0,229,200,0.06)',
            border: '1px solid rgba(0,229,200,0.15)',
            letterSpacing: '0.12em',
          }}
        >
          {screen}
        </span>
      </div>
    </div>
  )
}

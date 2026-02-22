import { useState } from 'react'
import Welcome from './screens/Welcome'
import Onboarding from './screens/Onboarding'
import Home from './screens/Home'

const SCREENS = ['welcome', 'onboarding', 'home']

const SCREEN_LABELS = {
  welcome: 'Welcome',
  onboarding: 'Onboarding',
  home: 'Home',
}

export default function App() {
  const [screen, setScreen] = useState('welcome')

  const next = () => {
    const idx = SCREENS.indexOf(screen)
    if (idx < SCREENS.length - 1) setScreen(SCREENS[idx + 1])
  }

  const back = () => {
    const idx = SCREENS.indexOf(screen)
    if (idx > 0) setScreen(SCREENS[idx - 1])
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0F0A1E' }}>
      {/* Screen switcher pills */}
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 6,
          zIndex: 100,
          background: 'rgba(15,10,30,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(242,240,255,0.08)',
          borderRadius: 30,
          padding: '5px 6px',
        }}
      >
        {SCREENS.map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              padding: '5px 14px',
              borderRadius: 24,
              border: 'none',
              cursor: 'pointer',
              background: screen === s ? '#00E5C8' : 'transparent',
              color: screen === s ? '#0F0A1E' : '#9B97B8',
              transition: 'all 0.2s',
              letterSpacing: '0.02em',
            }}
          >
            {SCREEN_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Screen content */}
      <div style={{ maxWidth: 480, margin: '0 auto', height: '100vh' }}>
        {screen === 'welcome' && <Welcome onNext={next} />}
        {screen === 'onboarding' && <Onboarding onNext={next} onBack={back} />}
        {screen === 'home' && <Home onBack={back} />}
      </div>
    </div>
  )
}

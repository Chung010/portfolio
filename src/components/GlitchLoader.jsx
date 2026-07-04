import { useEffect, useState } from 'react'
import '../styles/glitch.css'

const LINES = [
  '> initializing portfolio.exe',
  '> loading modules...',
  '> connecting to database...',
  '> fetching projects...',
  '> rendering UI...',
  '> done.',
]

export default function GlitchLoader({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, LINES[i]])
      i++
      if (i >= LINES.length) {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setTimeout(onComplete, 600)
        }, 400)
      }
    }, 320)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`glitch-loader ${done ? 'glitch-exit' : ''}`}>
      <div className="glitch-screen">
        <div className="glitch-title" data-text="PORTFOLIO.EXE">
          PORTFOLIO.EXE
        </div>
        <div className="glitch-terminal">
          {visibleLines.map((line, i) => (
            <div key={i} className="glitch-line">
              <span className="glitch-cursor">{line}</span>
            </div>
          ))}
          <span className="glitch-blink">_</span>
        </div>
      </div>
    </div>
  )
}

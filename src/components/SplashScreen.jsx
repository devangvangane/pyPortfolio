/**
 * SplashScreen.jsx
 *
 * INTEGRATION — App.jsx:
 * ─────────────────────────────────────────────
 * import { useState } from 'react'
 * import SplashScreen from './components/SplashScreen'
 * import Home from './pages/Home'
 *
 * export default function App() {
 *   const [done, setDone] = useState(false)
 *   return (
 *     <>
 *       {!done && <SplashScreen onComplete={() => setDone(true)} />}
 *       <Home />
 *     </>
 *   )
 * }
 */

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// ── CONFIG ────────────────────────────────────────────────
const FIRST    = 'DEVANG'
const SECOND   = 'VANGANE'
const SLATS    = 13
const SCRAMBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$&%'

const SLATS_DONE   = 1100
const CHAR_STAGGER = 110
const SCRAMBLE_MS  = 300
const HOLD_AFTER   = 1000

const rnd = () => SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]
const set = (arr, i, v) => { const n = [...arr]; n[i] = v; return n }

// ── GRADIENT BORDERS ──────────────────────────────────────
const BORDER_PRIMARY = 'linear-gradient(135deg,rgba(56,189,248,0.75),rgba(129,140,248,0.5),rgba(56,189,248,0.3))'
const BORDER_ACCENT  = 'linear-gradient(135deg,rgba(129,140,248,0.8),rgba(56,189,248,0.55),rgba(244,114,182,0.3))'

// ─────────────────────────────────────────────────────────

export default function SplashScreen({ onComplete }) {
  const ALL      = (FIRST + ' ' + SECOND).split('')
  const SIDX     = FIRST.length

  const [exiting,  setExiting]  = useState(false)
  const [gone,     setGone]     = useState(false)
  const [display,  setDisplay]  = useState(ALL.map(() => null))
  const [locked,   setLocked]   = useState(ALL.map(() => false))
  const [showTag,  setShowTag]  = useState(false)

  const timers = useRef([])
  const ivs    = useRef([])
  const after  = (fn, ms) => timers.current.push(setTimeout(fn, ms))

  useEffect(() => {
    ALL.forEach((ch, i) => {
      if (ch === ' ') {
        after(() => {
          setDisplay(p => set(p, i, ' '))
          setLocked(p  => set(p, i, true))
        }, SLATS_DONE + i * CHAR_STAGGER)
        return
      }

      after(() => {
        const iv = setInterval(() =>
          setDisplay(p => set(p, i, rnd()))
        , 40)
        ivs.current.push(iv)

        after(() => {
          clearInterval(iv)
          setDisplay(p => set(p, i, ch))
          setLocked(p  => set(p, i, true))
        }, SCRAMBLE_MS)
      }, SLATS_DONE + i * CHAR_STAGGER)
    })

    const last = SLATS_DONE + ALL.length * CHAR_STAGGER + SCRAMBLE_MS
    after(() => setShowTag(true),   last + 120)
    after(() => setExiting(true),   last + HOLD_AFTER)
    after(() => { setGone(true); onComplete?.() }, last + HOLD_AFTER + 750)

    return () => {
      timers.current.forEach(clearTimeout)
      ivs.current.forEach(clearInterval)
    }
  }, []) // eslint-disable-line

  if (gone) return null

  const slatIn  = i => ({ x: '0%',   transition: { delay: 0.02 + i * 0.038, duration: 0.58, ease: [0.16,1,0.3,1]   } })
  const slatOut = i => ({ x: '105%', transition: { delay: i * 0.022,         duration: 0.44, ease: [0.76,0,0.24,1] } })

  const word1 = display.slice(0, SIDX)
  const word2 = display.slice(SIDX + 1)
  const lock1 = locked.slice(0, SIDX)
  const lock2 = locked.slice(SIDX + 1)

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">

      {/* ── SLATS ── */}
      {Array.from({ length: SLATS }, (_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%' }}
          animate={exiting ? slatOut(i) : slatIn(i)}
          className="absolute left-0 right-0 bg-[#080808]"
          style={{ top: `${(i / SLATS) * 100}%`, height: `${100 / SLATS}%` }}
        >
          {/* grid texture */}
          <div className="absolute inset-0" style={{
            backgroundImage:
              'linear-gradient(rgba(56,189,248,0.028) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(56,189,248,0.028) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
          }} />
          {i > 0 && <div className="absolute top-0 left-0 right-0 h-px bg-sky-400/[0.055]" />}
        </motion.div>
      ))}

      {/* ── SCAN LINE ── */}
      <motion.div
        className="absolute left-0 right-0 z-20 pointer-events-none"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg,transparent,#38bdf8 20%,#a5b4fc 50%,#38bdf8 80%,transparent)',
          boxShadow: '0 0 16px #38bdf8, 0 0 32px rgba(56,189,248,0.3)',
          top: 0,
        }}
        initial={{ top: '-2px', opacity: 0 }}
        animate={{ top: '100vh', opacity: [0, 1, 1, 0.15] }}
        transition={{
          top:     { delay: 0.65, duration: 1.0, ease: 'easeInOut' },
          opacity: { delay: 0.65, duration: 1.0, times: [0,0.04,0.88,1] },
        }}
      />

      {/* ── CONTENT — fades + lifts before slats exit ── */}
      <motion.div
        animate={exiting
          ? { opacity: 0, y: -32, scale: 0.97, filter: 'blur(4px)' }
          : { opacity: 1, y: 0,   scale: 1,    filter: 'blur(0px)' }
        }
        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center
                   select-none pointer-events-none px-4"
      >
        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.45 }}
          className="mb-8 text-[9px] sm:text-[11px] uppercase tracking-[6px] text-sky-400 font-medium"
        >
          AI Engineer — Agentic AI Developer
        </motion.p>

        {/* ── NAME TILES ── */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">

          {/* DEVANG — primary */}
          <motion.div
            className="flex gap-[6px] sm:gap-[8px] lg:gap-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {word1.map((ch, i) => (
              <Tile
                key={i}
                char={display[i]}
                isLocked={lock1[i]}
                border={BORDER_PRIMARY}
                glow="rgba(56,189,248,0.22)"
                textColor="#ffffff"
                textGlow="rgba(255,255,255,0.6)"
              />
            ))}
          </motion.div>

          {/* thin divider between words */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: SLATS_DONE / 1000 + 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
            className="flex items-center gap-3 w-full justify-center"
            style={{ originX: 0.5 }}
          >
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(129,140,248,0.35))' }} />
            <div className="w-1 h-1 rounded-full bg-violet-400/50" />
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg,rgba(129,140,248,0.35),transparent)' }} />
          </motion.div>

          {/* VANGANE — accent */}
          <motion.div
            className="flex gap-[6px] sm:gap-[8px] lg:gap-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {word2.map((ch, localI) => {
              const i = SIDX + 1 + localI
              return (
                <Tile
                  key={i}
                  char={display[i]}
                  isLocked={lock2[localI]}
                  border={BORDER_ACCENT}
                  glow="rgba(129,140,248,0.26)"
                  textColor="#7dd3fc"
                  textGlow="rgba(125,211,252,0.65)"
                />
              )
            })}
          </motion.div>
        </div>

        {/* tagline */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: showTag ? 1 : 0, y: showTag ? 0 : 6 }}
          transition={{ duration: 0.45 }}
          className="mt-9 flex items-center gap-3"
        >
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,transparent,rgba(56,189,248,0.4))' }} />
          <p className="text-[8.5px] sm:text-[11px] uppercase tracking-[4px] text-slate-500 font-medium whitespace-nowrap">
            Building intelligent systems with AI
          </p>
          <div className="h-px w-10" style={{ background: 'linear-gradient(90deg,rgba(56,189,248,0.4),transparent)' }} />
        </motion.div>

        {/* footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="absolute bottom-7 text-[8px] sm:text-[10px] uppercase tracking-[3px] text-slate-700"
        >
          Portfolio · 2025
        </motion.p>

        {/* HUD corner brackets */}
        {[
          { cls: 'top-5 left-5',  bt: true,  bl: true  },
          { cls: 'top-5 right-5', bt: true,  br: true  },
          { cls: 'bottom-5 left-5',  bb: true, bl: true },
          { cls: 'bottom-5 right-5', bb: true, br: true },
        ].map(({ cls, bt, bb, bl, br }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75 + i * 0.04, duration: 0.4 }}
            className={`absolute ${cls} w-5 h-5 sm:w-7 sm:h-7 pointer-events-none`}
            style={{
              borderTop:    bt ? '1.5px solid rgba(56,189,248,0.4)' : 'none',
              borderBottom: bb ? '1.5px solid rgba(56,189,248,0.4)' : 'none',
              borderLeft:   bl ? '1.5px solid rgba(56,189,248,0.4)' : 'none',
              borderRight:  br ? '1.5px solid rgba(56,189,248,0.4)' : 'none',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

// ── TILE ─────────────────────────────────────────────────
function Tile({ char, isLocked, border, glow, textColor, textGlow }) {
  const visible = char !== null && char !== undefined && char !== ''

  return (
    <div style={{ perspective: '320px' }}>
      <motion.div
        initial={{ rotateX: -90, opacity: 0, y: -8 }}
        animate={visible
          ? { rotateX: 0,   opacity: 1, y: 0 }
          : { rotateX: -90, opacity: 0, y: -8 }
        }
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        // brief glow pulse when char locks
        whileInView={isLocked ? {} : {}}
      >
        {/* outer glow ring — only when locked */}
        <motion.div
          animate={isLocked
            ? { boxShadow: `0 0 0 1px ${glow}, 0 0 22px ${glow}, 0 12px 40px rgba(0,0,0,0.7)` }
            : { boxShadow: `0 0 0 0px transparent, 0 0 0px transparent, 0 8px 24px rgba(0,0,0,0.6)` }
          }
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            borderRadius: 'clamp(8px,1.4vw,13px)',
            /* gradient border via padding-box / border-box trick */
            background: `linear-gradient(#090912,#090912) padding-box, ${border} border-box`,
            border: '1.5px solid transparent',
            width:  'clamp(38px, 6.5vw, 62px)',
            height: 'clamp(52px, 8.8vw, 82px)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* top gloss layer */}
          <div style={{
            position: 'absolute', inset: 0, top: 0,
            height: '50%',
            background: 'linear-gradient(180deg,rgba(255,255,255,0.055) 0%,transparent 100%)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }} />

          {/* bottom shadow layer */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '40%',
            background: 'linear-gradient(0deg,rgba(0,0,0,0.45) 0%,transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* split-flap center divider */}
          <div style={{
            position: 'absolute', left: '8%', right: '8%', top: '50%',
            height: '1px',
            background: 'rgba(0,0,0,0.55)',
            zIndex: 10,
          }} />

          {/* subtle inner border highlight at top */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
          }} />

          {/* character */}
          <span style={{
            position: 'relative',
            zIndex: 20,
            fontFamily: '"Space Mono","Courier New",monospace',
            fontWeight: 700,
            fontSize: 'clamp(18px,3.8vw,32px)',
            lineHeight: 1,
            color: textColor,
            textShadow: isLocked ? `0 0 10px ${textGlow}, 0 0 22px ${textGlow}` : 'none',
            letterSpacing: '-0.02em',
            transition: 'text-shadow 0.3s ease',
          }}>
            {char}
          </span>

          {/* shimmer sweep on lock */}
          {isLocked && (
            <motion.div
              initial={{ x: '-110%', opacity: 0 }}
              animate={{ x: '210%',  opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%)',
                pointerEvents: 'none',
                zIndex: 30,
              }}
            />
          )}

          {/* lock pulse ring */}
          {isLocked && (
            <motion.div
              initial={{ opacity: 0.8, scale: 0.85 }}
              animate={{ opacity: 0,   scale: 1.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{
                position: 'absolute', inset: '-3px',
                borderRadius: 'calc(clamp(8px,1.4vw,13px) + 3px)',
                border: `1.5px solid ${glow.replace('0.22','0.5').replace('0.26','0.55')}`,
                pointerEvents: 'none',
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
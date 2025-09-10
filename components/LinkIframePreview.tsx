"use client"

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = {
  href: string
  children: ReactNode
  width?: number
  height?: number
  className?: string
}

export default function LinkIframePreview({ href, children, width = 420, height = 280, className }: Props) {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const hoverTimer = useRef<number | null>(null)
  const loadTimeout = useRef<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  function handleEnter() {
    // cancel pending close
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    hoverTimer.current = window.setTimeout(() => {
      setOpen(true)
      // if iframe doesn't load quickly, assume blocked
      loadTimeout.current = window.setTimeout(() => {
        if (!loaded) setFailed(true)
      }, 2500)
    }, 200)
  }

  function handleLeave() {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    if (loadTimeout.current) window.clearTimeout(loadTimeout.current)
    // delay close slightly so the user can move pointer into the iframe without it closing
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setOpen(false)
      setLoaded(false)
      setFailed(false)
    }, 300)
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className ?? ''} outline-none`}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        {children}
      </a>

      {open && (
        <motion.div
          role="dialog"
          aria-hidden={!open}
          style={{ width: `min(${width}px, 92vw)`, height: `${height}px`, maxWidth: '92vw', maxHeight: '60vh' }}
          className="absolute top-[120%] left-1/2 -translate-x-1/2 z-50 rounded overflow-hidden shadow-lg bg-white"
          onMouseEnter={() => {
            // keep open while pointer is over preview
            if (closeTimer.current) window.clearTimeout(closeTimer.current)
          }}
          onMouseLeave={handleLeave}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.12 }}
        >
          {/* loader overlay centered */}
          {!loaded && !failed && (
            <motion.div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border-4 border-primary/25 border-t-primary rounded-full animate-spin" />
                <div className="text-sm text-slate-600">Laster forhåndsvisning…</div>
              </div>
            </motion.div>
          )}

          {failed && (
            <motion.div className="absolute inset-0 flex items-center justify-center z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}
            >
              <div className="p-3 text-sm text-slate-600">Forhåndsvisning ikke tilgjengelig (siden blokkerer embedding)</div>
            </motion.div>
          )}

          <iframe
            title={`preview-${href}`}
            src={href}
            style={{ width: '100%', height: '100%', border: 0, display: loaded ? 'block' : 'none' }}
            sandbox="allow-forms allow-same-origin allow-scripts"
            onLoad={() => {
              setLoaded(true)
              if (loadTimeout.current) window.clearTimeout(loadTimeout.current)
            }}
          />
        </motion.div>
      )}
    </span>
  )
}

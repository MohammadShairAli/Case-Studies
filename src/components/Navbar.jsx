import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ project }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('')

  // ── Scrolled state ───────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Active section highlight ─────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'))
      // Find the section whose top is closest to (but still at or above) the navbar
      let best = null
      let bestTop = -Infinity
      sections.forEach(s => {
        const top = s.getBoundingClientRect().top
        // Section must have entered the top 30% of viewport
        if (top <= window.innerHeight * 0.3 && top > bestTop) {
          bestTop = top
          best = s.id
        }
      })
      // If nothing passed the threshold yet (user at very top), clear
      if (!best) {
        // Pick section closest to top without being negative (hero)
        const first = sections[0]
        if (first && first.getBoundingClientRect().top <= window.innerHeight) {
          best = first.id
        }
      }
      if (best) setActive(best)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Run once on mount to set initial state
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Logo styled title ────────────────────────────────────
  const renderLogo = () => {
    const { title } = project.meta
    if (title.includes('BlenSpark')) {
      const parts = title.split('BlenSpark')
      return (
        <>
          {parts[0]}
          <span className="text-blen font-bold">Blen</span>
          <span className="text-spark font-bold">Spark</span>
          {parts[1]}
        </>
      )
    }
    return title
  }

  const navLinks = [
    { href: '#overview',    label: 'Overview' },
    { href: '#performance', label: 'Benchmarks' },
    ...(project.screenshots?.length ? [{ href: '#screenshots', label: 'Screens' }] : []),
    ...(project.liveDemo?.images?.length ? [{ href: '#demo', label: 'Demo' }] : []),
    { href: '#phases',      label: 'Process' },
    { href: '#tech',        label: 'Tech Stack' },
    ...(project.roi ? [{ href: '#roi', label: 'ROI Summary' }] : []),
  ]

  return (
    <nav
      id="navbar"
      className={`
        fixed top-0 left-0 right-0 z-50 h-16 flex items-center
        px-4 sm:px-6 lg:px-10 transition-all duration-300
        bg-[rgba(250,250,248,0.85)] backdrop-blur-[12px]
        ${scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'}
      `}
    >
      <div className="w-full max-w-container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-[0.95rem] sm:text-[1rem] text-muted tracking-tight max-w-[230px] sm:max-w-[320px] truncate"
        >
          {renderLogo()}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-2">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => { setActive(id); setMenuOpen(false) }}
                  className={`
                    nav-link
                    ${isActive ? 'active' : ''}
                  `}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-[2px] bg-primary rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-primary rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[2px] bg-primary rounded-sm transition-all duration-300" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            return (
              <a
                key={href}
                href={href}
                onClick={() => { setActive(id); setMenuOpen(false) }}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}

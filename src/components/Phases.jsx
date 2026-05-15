import { useEffect } from 'react'

export default function Phases({ phases }) {
  // ── Phase-number parallax on scroll ─────────────────────
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('.phase-num-parallax').forEach(el => {
        const rect = el.getBoundingClientRect()
        const offset = (window.innerHeight / 2 - rect.top) * 0.06
        el.style.transform = `translateY(${offset}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-surface" id="phases">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-3">
          How I Did It
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[1.15] text-primary mb-8 sm:mb-12 text-[clamp(1.8rem,4vw,2.8rem)]">
          The {phases.length}-Phase Pipeline
        </h2>

        {phases.map((phase, idx) => {
          const isReverse = idx % 2 === 1
          return (
            <div
              key={idx}
              className={`
                animate-reveal
                grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center
                py-10 sm:py-14 lg:py-[72px] border-b border-border last:border-b-0
                ${isReverse ? 'md:[direction:rtl]' : ''}
              `}
            >
              {/* Content */}
              <div className={isReverse ? 'md:[direction:ltr]' : ''}>
                <div
                  className="phase-num-parallax font-display font-extrabold text-[3.5rem] sm:text-[5rem] leading-none text-surface-alt mb-2.5"
                >
                  {phase.number}
                </div>
                <div className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent mb-2.5">
                  {phase.label}
                </div>
                <h3 className="font-display text-[1.5rem] font-bold tracking-[-0.02em] leading-[1.25] mb-3.5">
                  {phase.title}
                </h3>
                <p className="text-secondary text-[0.95rem] mb-6">
                  {phase.description}
                </p>

                <ul className="flex flex-col gap-3.5">
                  {phase.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 items-start text-[0.9rem] text-secondary leading-[1.6]">
                      {/* Blue dot */}
                      <span className="
                        w-2 h-2 rounded-full bg-accent flex-shrink-0
                        mt-[8px]
                      " />
                      <span>
                        <strong className="text-primary mr-1">{b.bold}</strong>
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={isReverse ? 'md:[direction:ltr]' : ''}>
                <div className="
                  rounded-md overflow-hidden shadow-lg border border-border
                  transition-all duration-300 hover:shadow-xl hover:scale-[1.01]
                ">
                  <img src={phase.image} alt={phase.imageAlt} className="w-full" loading="lazy" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

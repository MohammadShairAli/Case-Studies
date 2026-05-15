import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to elements with
 * className "animate-reveal" inside the given container ref.
 * Adds "visible" class when they enter the viewport.
 */
export function useReveal(dep = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-reveal:not(.visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(
              entry.target.parentElement.querySelectorAll('.animate-reveal:not(.visible)')
            )
            const idx = siblings.indexOf(entry.target)
            setTimeout(() => entry.target.classList.add('visible'), idx * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, dep) // eslint-disable-line react-hooks/exhaustive-deps
}

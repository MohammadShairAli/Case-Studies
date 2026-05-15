import { useEffect } from 'react'
import Navbar      from '../components/Navbar'
import Hero        from '../components/Hero'
import Executive   from '../components/Executive'
import Performance from '../components/Performance'
import Phases      from '../components/Phases'
import TechStack   from '../components/TechStack'
import ROI         from '../components/ROI'
import { useReveal } from '../hooks/useReveal'

export default function CaseStudy({ project }) {
  // Update document title and favicon dynamically
  useEffect(() => {
    document.title = project.meta.browserTabTitle

    const existingFavicon = document.querySelector("link[rel='icon']")
    if (existingFavicon) {
      existingFavicon.href = project.meta.favicon
    } else {
      const link = document.createElement('link')
      link.rel  = 'icon'
      link.href = project.meta.favicon
      document.head.appendChild(link)
    }

    // Reset scroll-reveal when project changes
    document.querySelectorAll('.animate-reveal').forEach(el => {
      el.classList.remove('visible')
    })
  }, [project])

  // Wire up scroll-reveal (re-runs on project change)
  useReveal([project])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar      project={project} />
      <Hero        hero={project.hero} />
      <Executive   executive={project.executive} />
      <Performance performance={project.performance} />
      <Phases      phases={project.phases} />
      <TechStack   techStack={project.techStack} />
      {/* ROI section only renders if the project has roi data */}
      <ROI         roi={project.roi} />
    </div>
  )
}

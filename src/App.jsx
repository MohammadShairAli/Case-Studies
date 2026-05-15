import { Routes, Route, Navigate } from 'react-router-dom'
import CaseStudy from './pages/CaseStudy'
import projects  from './data/projects'

// ── 404 page ──────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] font-body">
      <h1 className="text-[2rem] font-bold text-primary mb-4">404 — Page Not Found</h1>
      <a href="/" className="text-accent hover:underline">← Go Home</a>
    </div>
  )
}

export default function App() {
  // Default project is always the first one in the registry
  const defaultProject = projects[0]

  return (
    <Routes>
      {/* Root → first project */}
      <Route
        path="/"
        element={<Navigate to={`/project/${defaultProject.slug}`} replace />}
      />

      {/* Auto-generate a route per project — fully dynamic */}
      {projects.map(({ slug, data }) => (
        <Route
          key={slug}
          path={`/project/${slug}`}
          element={<CaseStudy project={data} />}
        />
      ))}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

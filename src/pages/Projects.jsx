import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../hooks/useProjects'

export default function Projects() {
  const { projects, loading, error } = useProjects()

  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-label">02 / WORK</div>
        <h2 className="sec-title">all projects</h2>

        {error && <p className="error-msg">failed to load: {error}</p>}

        {loading ? (
          <div className="skeleton-list">
            {[1, 2, 3].map((i) => <div key={i} className="skeleton-card" />)}
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}

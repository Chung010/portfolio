import { Link } from 'react-router-dom'
import SkillsBanner from '../components/SkillsBanner'
import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../hooks/useProjects'

export default function Home() {
  const { projects, loading } = useProjects()
  const featured = projects.filter((p) => p.highlight).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-tag">available for learn and work</div>
          <h1>
            <span className="hi">hey, i'm</span>
            <span className="name">Pao Bunyaphon.</span>
          </h1>
          <p className="hero-sub">
            <span>Developers</span> &amp; <span>Software engineer</span><br />
            I build secure, fast, and beautiful web experiences.
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn btn-primary">view my work</Link>
            <Link to="/contact"  className="btn btn-outline">get in touch</Link>
          </div>
        </div>
      </section>

      <SkillsBanner />

      {/* Featured projects preview */}
      <section className="section">
        <div className="wrap">
          <div className="sec-label">featured work</div>
          <h2 className="sec-title">projects</h2>

          {loading ? (
            <div className="skeleton-list">
              {[1, 2].map((i) => <div key={i} className="skeleton-card" />)}
            </div>
          ) : (
            <div className="projects-grid">
              {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          )}

          <div style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-outline">see all projects →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

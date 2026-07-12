import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function About() {
  const [experience, setExperience] = useState([])
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAll() {
      const [expRes, actRes] = await Promise.all([
        supabase.from('experience').select('*').order('start_year', { ascending: false }),
        supabase.from('activities').select('*').order('year', { ascending: false }),
      ])
      setExperience(expRes.data || [])
      setActivities(actRes.data || [])
      setLoading(false)
    }
    fetchAll()
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <div className="sec-label">01 / ABOUT</div>
          <div className="about-hero">
            <div>
              <h2 className="sec-title" style={{ marginBottom: '1rem' }}>Banyaphon Jansommit</h2>
              <p className="about-role">
                Studying at<span className="dot">·</span> Prince of Songkla University
              </p>
              <p className="about-bio">
                สวัสดีครับ ผม บัญญพนต์ จันทร์สมมิตร เรียกผมว่า "เปา" ได้ครับ กำลังศึกษาอยูที่มหาวิทยาลัยสงขลานครินทร์ มีความสนใจและความมุ่งมั่นที่อยากจะหาประสบการณ์ในการพัฒนาเว็บไซต์ที่สวยงาม 
                รวดเร็ว ตอบโจทย์ผู้ใช้งาน และมีความปลอดภัย ปัจจุบันกำลังศึกษาอยู่ชั้นปีที่ 4 และผ่านการฝึกงานช่วงฤดูรร้อนที่ผ่านมาโดยทำงานกับบริษัทจริง และตัวผมยังมีความสนใจที่อยากจะเรียนรู้ระบบทางด้านความปลอดภัยครับ

              </p>
              <div className="about-actions">
                <a
                  className="btn btn-primary"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  download resume ↓
                </a>
                <a
                  className="btn btn-outline"
                  href="https://github.com/Chung010"
                  target="_blank"
                  rel="noreferrer"
                >
                  github ↗
                </a>
              </div>
            </div>
            <div className="about-info-grid">
              <div className="info-card">
                <span className="info-label">GPAX</span>
                <span className="info-val">3.01</span>
              </div>
              <div className="info-card">
                <span className="info-label">status</span>
                <span className="info-val" style={{ color: 'var(--accent)' }}>available ●</span>
              </div>
              <div className="info-card">
                <span className="info-label">education</span>
                <span className="info-val">Computer Science</span>
              </div>
              <div className="info-card">
                <span className="info-label">interests</span>
                <span className="info-val">Web · Security · Database</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="wrap">
          <div className="sec-label">02 / EXPERIENCE</div>
          <h2 className="sec-title">work &amp; internships</h2>
          {loading ? (
            <div className="skeleton-list">
              {[1, 2].map(i => <div key={i} className="skeleton-card" />)}
            </div>
          ) : experience.length === 0 ? (
            <p className="empty-msg">// no experience entries yet — add via Supabase</p>
          ) : (
            <div className="timeline">
              {experience.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-body">
                    <div className="timeline-head">
                      <div>
                        <div className="timeline-title">{exp.role}</div>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-period">
                        {exp.start_year}{exp.end_year ? ` — ${exp.end_year}` : ' — present'}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="timeline-desc">{exp.description}</p>
                    )}
                    {exp.tags && (
                      <div className="proj-tags" style={{ marginTop: '.75rem' }}>
                        {exp.tags.map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section">
        <div className="wrap">
          <div className="sec-label">03 / ACTIVITIES</div>
          <h2 className="sec-title">activities &amp; achievements</h2>
          {loading ? (
            <div className="skeleton-list">
              {[1, 2, 3].map(i => <div key={i} className="skeleton-card" style={{ height: '80px' }} />)}
            </div>
          ) : activities.length === 0 ? (
            <p className="empty-msg">// no activities yet — add via Supabase</p>
          ) : (
            <div className="activity-grid">
              {activities.map(act => (
                <div key={act.id} className="activity-card">
                  <div className="activity-head">
                    <span className="activity-type">{act.type}</span>
                    <span className="activity-year">{act.year}</span>
                  </div>
                  <div className="activity-name">{act.name}</div>
                  {act.description && (
                    <p className="activity-desc">{act.description}</p>
                  )}
                  {act.result && (
                    <span className="activity-result">{act.result}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

const SKILLS = [
  'React','JavaScript','TypeScript','HTML/CSS','Node.js',
  'Python','Cybersecurity','Penetration Testing','CTF','Git','Linux','Networking',
]

export default function SkillsBanner() {
  const doubled = [...SKILLS, ...SKILLS]

  return (
    <div className="skills-bar">
      <div className="skills-scroll">
        {doubled.map((skill, i) => (
          <span key={i} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  )
}

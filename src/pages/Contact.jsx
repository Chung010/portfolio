import { Mail, Phone,  } from 'lucide-react'
import { FaGithub, FaFacebook } from 'react-icons/fa'

const contacts = [
  { icon: Mail,       label: 'banyaphonjan@gmail.com',          href: 'mailto:banyaphonjan@gmail.com' },
  { icon: Mail,   label: 'bunyaphon2911@gmail.com', href: 'mailto:bunyaphon2911@gmail.com' },
  { icon: FaGithub,   label: 'github.com/Chung010',      href: 'https://github.com/Chung010' },
  { icon: Phone,      label: '+66 080-429-5514',         href: 'tel:+66804295514' },
  { icon: FaFacebook, label: 'เปาเปา ซาลาเปา',    href: 'https://www.facebook.com/peapea.salapea.460246?locale=th_TH' },
  
]
export default function Contact() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-label">03 / CONTACT</div>
        <div className="contact-grid">
          <div>
            <div className="contact-cta">
              Contact<br />Me <span>UwU</span>
            </div>
            <p className="contact-sub">
              open to internships, collaborations,<br />and interesting projects.
            </p>
          </div>
          <div className="contact-links">
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                className="c-link"
                href={href}
                target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                rel="noreferrer"
              >
                <div className="c-link-icon">
                  <Icon size={16} />
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
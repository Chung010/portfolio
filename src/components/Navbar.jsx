import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/',         label: 'home'     },
  { to: '/about',    label: 'about'    },
  { to: '/projects', label: 'projects' },
  { to: '/contact',  label: 'contact'  },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="wrap navbar-inner">
        <Link to="/" className="logo">Hello PortFolio</Link>
        <div className="nav-links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${pathname === to ? 'nav-link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

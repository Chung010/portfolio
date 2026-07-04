# Portfolio — Structure Guide

```
portfolio/
├── src/
│   ├── components/        # UI components (reusable)
│   │   ├── Navbar.jsx
│   │   ├── GlitchLoader.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillsBanner.jsx
│   ├── pages/             # Full page views
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── lib/               # External services
│   │   └── supabase.js    ← Supabase client (ใส่ keys ที่นี่)
│   ├── hooks/             # Custom React hooks
│   │   └── useProjects.js ← fetch projects จาก Supabase
│   ├── styles/            # Global CSS
│   │   └── globals.css
│   └── App.jsx            # Root component + routing
├── .env                   ← SUPABASE_URL + SUPABASE_ANON_KEY
├── index.html
├── vite.config.js
└── package.json
```

## Quick Start
```bash
npm install
cp .env.example .env   # ใส่ Supabase keys
npm run dev
```

## Supabase Setup
1. ไปที่ supabase.com → สร้าง project ใหม่ฟรี
2. ไปที่ SQL Editor → รัน schema จาก `supabase_schema.sql`
3. ก็อป Project URL + anon key ใส่ .env

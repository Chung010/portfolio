-- เพิ่ม table experience
create table experience (
  id uuid default gen_random_uuid() primary key,
  role text not null,
  company text not null,
  start_year int not null,
  end_year int,
  description text,
  tags text[],
  created_at timestamp with time zone default now()
);

-- เพิ่ม table activities
create table activities (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  type text not null, -- เช่น 'CTF', 'Hackathon', 'Club', 'Award'
  year int,
  description text,
  result text,        -- เช่น '1st place', 'participant'
  created_at timestamp with time zone default now()
);

-- อัปเดต projects ให้มี github_url
alter table projects add column if not exists github_url text;
alter table projects add column if not exists live_url text;

-- Sample experience
insert into experience (role, company, start_year, end_year, description, tags) values
  ('Frontend Developer Intern', 'Company B', 2025, null, 'Building real-world web products during summer internship.', array['React','JavaScript','Git']);

-- Sample activities
insert into activities (name, type, year, description, result) values
  ('CTF Competition', 'CTF', 2025, 'National cybersecurity CTF challenge.', 'Top 20'),
  ('Web Dev Club', 'Club', 2024, 'Member of university web development club.', null);

-- RLS policies
alter table experience enable row level security;
create policy "Public read experience" on experience for select using (true);

alter table activities enable row level security;
create policy "Public read activities" on activities for select using (true);

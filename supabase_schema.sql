-- Run this in Supabase SQL Editor

create table projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  description text,
  year int,
  tags text[],
  github_url text,
  live_url text,
  highlight boolean default false,
  created_at timestamp with time zone default now()
);

-- Sample data
insert into projects (name, description, year, tags, highlight) values
  ('Portfolio Site', 'Personal portfolio built with React + Supabase. Minimal dark theme.', 2025, array['React','Supabase','CSS'], true),
  ('CTF Writeups', 'Collection of cybersecurity CTF challenge writeups and tools.', 2025, array['Python','Cybersecurity','CTF'], true);

-- Allow public read (no auth needed to view projects)
alter table projects enable row level security;
create policy "Public read" on projects for select using (true);

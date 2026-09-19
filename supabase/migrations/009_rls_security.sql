-- Enable Row Level Security

alter table profiles enable row level security;
alter table reports enable row level security;
alter table leads enable row level security;

-- Profiles: users can view their own profile
create policy "Users can view own profile"
on profiles
for select
using (auth.uid() = id);

-- Reports: users can access own reports
create policy "Users can view own reports"
on reports
for select
using (auth.uid() = user_id);

create policy "Users can create own reports"
on reports
for insert
with check (auth.uid() = user_id);

-- Leads: only authenticated admins should manage leads
create policy "Admins can manage leads"
on leads
for all
using (
 exists(
  select 1 from profiles
  where profiles.id = auth.uid()
  and profiles.role = 'admin'
 )
);

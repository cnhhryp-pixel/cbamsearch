-- Lead capture table

create table if not exists leads (
 id uuid primary key default gen_random_uuid(),
 name text,
 email text,
 company text,
 product text,
 cn_code text,
 country text,
 created_at timestamp default now()
);

create index if not exists leads_email_idx on leads(email);
create index if not exists leads_created_at_idx on leads(created_at);

-- CBAMSearch SaaS database foundation

create table if not exists profiles (
 id uuid primary key,
 email text,
 company text,
 plan text default 'free',
 created_at timestamp default now()
);

create table if not exists projects (
 id uuid primary key default gen_random_uuid(),
 user_id uuid,
 product_name text,
 cn_code text,
 country_origin text,
 sector text,
 quantity text,
 status text default 'draft',
 created_at timestamp default now()
);

create table if not exists reports (
 id uuid primary key default gen_random_uuid(),
 project_id uuid,
 report_type text default 'cbam-assessment',
 status text default 'draft',
 pdf_url text,
 created_at timestamp default now()
);

create table if not exists payments (
 id uuid primary key default gen_random_uuid(),
 user_id uuid,
 amount numeric,
 currency text default 'EUR',
 provider text default 'paypal',
 payment_status text default 'pending',
 created_at timestamp default now()
);
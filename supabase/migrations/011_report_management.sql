-- Report management enhancement

alter table reports
add column if not exists version integer default 1,
add column if not exists product_name text,
add column if not exists cn_code text,
add column if not exists file_url text,
add column if not exists updated_at timestamp default now();

create index if not exists reports_user_status_idx on reports(user_id,status);
create index if not exists reports_version_idx on reports(version);

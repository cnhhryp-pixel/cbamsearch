-- CBAM report workflow foundation

alter table reports
add column if not exists user_id uuid;

alter table reports
add column if not exists payment_status text default 'pending';

alter table reports
add column if not exists price numeric default 49;

create index if not exists reports_user_id_idx
on reports(user_id);

-- Lead CRM fields

alter table leads
add column if not exists lead_status text default 'new',
add column if not exists notes text,
add column if not exists follow_up_date date;

create index if not exists leads_status_idx on leads(lead_status);

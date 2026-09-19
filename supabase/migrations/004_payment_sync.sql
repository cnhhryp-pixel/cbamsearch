-- Payment synchronization fields

create table if not exists payments (
 id uuid primary key default gen_random_uuid(),
 user_id uuid,
 report_id uuid,
 provider text default 'paypal',
 order_id text,
 amount numeric default 49,
 currency text default 'EUR',
 status text default 'pending',
 created_at timestamp default now()
);

create index if not exists payments_user_id_idx on payments(user_id);
create index if not exists payments_report_id_idx on payments(report_id);

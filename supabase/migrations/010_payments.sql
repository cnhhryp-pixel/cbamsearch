-- Payment tracking table

create table if not exists payments (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references auth.users(id) on delete cascade,
 report_id uuid,
 paypal_order_id text,
 amount numeric default 49,
 currency text default 'EUR',
 status text default 'pending',
 created_at timestamp default now(),
 updated_at timestamp default now()
);

create index if not exists payments_user_idx on payments(user_id);
create index if not exists payments_status_idx on payments(status);
create index if not exists payments_order_idx on payments(paypal_order_id);

-- Role based access control

create table if not exists profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 email text,
 role text default 'user',
 created_at timestamp default now()
);

create index if not exists profiles_role_idx on profiles(role);

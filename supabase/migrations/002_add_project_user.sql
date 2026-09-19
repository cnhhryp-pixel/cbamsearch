-- Link CBAM projects with authenticated users

alter table projects
add column if not exists user_id uuid;

create index if not exists projects_user_id_idx
on projects(user_id);

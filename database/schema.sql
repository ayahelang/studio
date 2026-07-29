create table users (

id uuid primary key,

email text unique not null,

full_name text,

avatar_url text,

role text default 'Viewer',

created_at timestamptz default now()

);

create table users (

id uuid primary key,

email text unique not null,

full_name text,

avatar_url text,

role text default 'Viewer',

created_at timestamptz default now()

);

create table if not exists roles(
    id bigint generated always as identity primary key,
    name varchar(50) unique not null,
    description text,
    created_at timestamptz default now()
);

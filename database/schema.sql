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

create table if not exists permissions(
    id bigint generated always as identity primary key,
    code varchar(100) unique not null,
    name varchar(100) not null,
    description text,
    created_at timestamptz default now()
);

create table if not exists role_permissions(
    role_id bigint not null references roles(id) on delete cascade,
    permission_id bigint not null references permissions(id) on delete cascade,
    primary key(role_id,permission_id)
);

create table if not exists teams(
    id uuid default gen_random_uuid() primary key,
    name varchar(100) not null,
    description text,
    owner_id uuid references users(id),
    created_at timestamptz default now()
);

create table if not exists teams(
    id uuid default gen_random_uuid() primary key,
    name varchar(100) not null,
    description text,
    owner_id uuid references users(id),
    created_at timestamptz default now()
);

create table if not exists profiles(
    id uuid primary key references auth.users(id) on delete cascade,
    full_name text not null default '',
    avatar_url text,
    email text not null unique,
    role_id bigint references roles(id) on delete set null,
    is_active boolean default true,
    last_login timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);


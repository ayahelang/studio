create extension if not exists pgcrypto;

create table if not exists roles(
    id bigint generated always as identity primary key,
    name varchar(50) unique not null,
    description text,
    created_at timestamptz default now()
);

create table if not exists profiles(
    id uuid primary key references auth.users(id) on delete cascade,
    full_name text not null default '',
    avatar_url text,
    email text unique not null,
    role_id bigint references roles(id) on delete set null,
    is_active boolean default true,
    last_login timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists teams(
    id uuid default gen_random_uuid() primary key,
    name varchar(100) not null,
    description text,
    owner_id uuid references profiles(id) on delete set null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists team_members(
    team_id uuid references teams(id) on delete cascade,
    profile_id uuid references profiles(id) on delete cascade,
    role_id bigint references roles(id),
    joined_at timestamptz default now(),
    primary key(team_id,profile_id)
);

create table if not exists playlists(
    id uuid default gen_random_uuid() primary key,
    team_id uuid references teams(id) on delete cascade,
    title varchar(200) not null,
    description text,
    thumbnail text,
    visibility varchar(20) default 'private',
    created_by uuid references profiles(id),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists projects(
    id uuid default gen_random_uuid() primary key,
    playlist_id uuid references playlists(id) on delete cascade,
    title varchar(200) not null,
    description text,
    thumbnail text,
    status varchar(30) default 'draft',
    created_by uuid references profiles(id),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists episodes(
    id uuid default gen_random_uuid() primary key,
    project_id uuid references projects(id) on delete cascade,
    episode_number integer not null,
    title varchar(200) not null,
    description text,
    script text,
    duration integer default 0,
    status varchar(30) default 'draft',
    created_by uuid references profiles(id),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists uploads(
    id uuid default gen_random_uuid() primary key,
    episode_id uuid references episodes(id) on delete cascade,
    uploader_id uuid references profiles(id),
    filename text not null,
    storage_path text not null,
    file_size bigint default 0,
    mime_type varchar(100),
    uploaded_at timestamptz default now()
);

create table if not exists assignments(
    id uuid default gen_random_uuid() primary key,
    project_id uuid references projects(id) on delete cascade,
    episode_id uuid references episodes(id) on delete cascade,
    assignee_id uuid references profiles(id) on delete cascade,
    assigned_by uuid references profiles(id),
    status varchar(20) default 'assigned',
    due_date timestamptz,
    created_at timestamptz default now()
);

create table if not exists youtube_channels(
    id uuid default gen_random_uuid() primary key,
    owner_id uuid references profiles(id),
    channel_name varchar(200) not null,
    channel_id varchar(100),
    thumbnail text,
    created_at timestamptz default now()
);

create table if not exists youtube_videos(
    id uuid default gen_random_uuid() primary key,
    upload_id uuid references uploads(id) on delete cascade,
    youtube_channel_id uuid references youtube_channels(id),
    youtube_video_id varchar(100),
    title text,
    description text,
    privacy_status varchar(20) default 'private',
    published_at timestamptz,
    created_at timestamptz default now()
);

create table if not exists activity_logs(
    id bigint generated always as identity primary key,
    profile_id uuid references profiles(id),
    action varchar(100),
    target_table varchar(100),
    target_id text,
    description text,
    created_at timestamptz default now()
);

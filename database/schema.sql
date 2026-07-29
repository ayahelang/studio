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

create table if not exists permissions(
    id bigint generated always as identity primary key,
    code varchar(100) unique not null,
    name varchar(100) not null,
    description text,
    created_at timestamptz default now()
);

create table if not exists role_permissions(
    role_id bigint references roles(id) on delete cascade,
    permission_id bigint references permissions(id) on delete cascade,
    primary key(role_id,permission_id)
);

create table if not exists project_members(
    project_id uuid references projects(id) on delete cascade,
    profile_id uuid references profiles(id) on delete cascade,
    role_id bigint references roles(id),
    created_at timestamptz default now(),
    primary key(project_id,profile_id)
);

create table if not exists tags(
    id uuid default gen_random_uuid() primary key,
    name varchar(100) unique not null,
    color varchar(20) default '#2563eb',
    created_at timestamptz default now()
);

create table if not exists episode_tags(
    episode_id uuid references episodes(id) on delete cascade,
    tag_id uuid references tags(id) on delete cascade,
    primary key(episode_id,tag_id)
);

create table if not exists comments(
    id uuid default gen_random_uuid() primary key,
    episode_id uuid references episodes(id) on delete cascade,
    profile_id uuid references profiles(id),
    message text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table if not exists notifications(
    id uuid default gen_random_uuid() primary key,
    profile_id uuid references profiles(id) on delete cascade,
    title varchar(200),
    message text,
    is_read boolean default false,
    created_at timestamptz default now()
);

create table if not exists publish_queue(
    id uuid default gen_random_uuid() primary key,
    upload_id uuid references uploads(id) on delete cascade,
    youtube_channel_id uuid references youtube_channels(id),
    scheduled_at timestamptz,
    status varchar(20) default 'waiting',
    retry_count integer default 0,
    created_at timestamptz default now()
);

create table if not exists transcoding_jobs(
    id uuid default gen_random_uuid() primary key,
    upload_id uuid references uploads(id) on delete cascade,
    status varchar(20) default 'waiting',
    progress integer default 0,
    started_at timestamptz,
    finished_at timestamptz,
    created_at timestamptz default now()
);

create table if not exists invitations(
    id uuid default gen_random_uuid() primary key,
    email text not null,
    invited_by uuid references profiles(id),
    team_id uuid references teams(id),
    token text unique,
    expired_at timestamptz,
    accepted boolean default false,
    created_at timestamptz default now()
);

create table if not exists app_settings(
    id bigint generated always as identity primary key,
    setting_key varchar(100) unique,
    setting_value text,
    updated_at timestamptz default now()
);

create table if not exists api_keys(
    id uuid default gen_random_uuid() primary key,
    provider varchar(50),
    key_name varchar(100),
    encrypted_value text,
    created_by uuid references profiles(id),
    created_at timestamptz default now()
);

create table if not exists workflow_statuses(
    id smallint generated always as identity primary key,
    code varchar(30) unique not null,
    name varchar(100) not null,
    sort_order smallint default 0
);

alter table episodes
add column if not exists workflow_status_id smallint
references workflow_statuses(id);

create table if not exists storage_files(
    id uuid default gen_random_uuid() primary key,
    upload_id uuid references uploads(id) on delete cascade,
    provider varchar(30) default 'supabase',
    bucket varchar(100),
    object_path text not null,
    public_url text,
    checksum varchar(128),
    created_at timestamptz default now()
);

create table if not exists upload_chunks(
    id uuid default gen_random_uuid() primary key,
    upload_id uuid references uploads(id) on delete cascade,
    chunk_number integer not null,
    chunk_size bigint default 0,
    uploaded boolean default false,
    created_at timestamptz default now(),
    unique(upload_id,chunk_number)
);

create table if not exists upload_sessions(
    id uuid default gen_random_uuid() primary key,
    profile_id uuid references profiles(id),
    upload_id uuid references uploads(id),
    started_at timestamptz default now(),
    finished_at timestamptz,
    status varchar(20) default 'uploading'
);

create table if not exists publish_logs(
    id uuid default gen_random_uuid() primary key,
    publish_queue_id uuid references publish_queue(id) on delete cascade,
    status varchar(30),
    message text,
    created_at timestamptz default now()
);

create table if not exists webhook_logs(
    id uuid default gen_random_uuid() primary key,
    provider varchar(50),
    event_name varchar(100),
    payload jsonb,
    received_at timestamptz default now()
);


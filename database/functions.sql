create extension

if not exists

pgcrypto;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
    insert into public.profiles(
        id,
        full_name,
        avatar_url,
        email,
        role_id,
        last_login
    )
    values(
        new.id,
        coalesce(new.raw_user_meta_data->>'full_name',''),
        new.raw_user_meta_data->>'avatar_url',
        new.email,
        5,
        now()
    )
    on conflict(id)
    do update set
        full_name=excluded.full_name,
        avatar_url=excluded.avatar_url,
        email=excluded.email,
        last_login=now();
    return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at=now();
    return new;
end;
$$;

drop trigger if exists profiles_updated_at on profiles;

create trigger profiles_updated_at
before update on profiles
for each row
execute function public.set_updated_at();

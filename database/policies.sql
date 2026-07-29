alter table users

enable row level security;

create policy "Users can view their own profile"
on profiles
for select
using(auth.uid()=id);

create policy "Users can update their own profile"
on profiles
for update
using(auth.uid()=id);

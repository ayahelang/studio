insert into users(

id,

email,

full_name,

role

)

values(

gen_random_uuid(),

'owner@example.com',

'Owner',

'Owner'

);


insert into roles(name,description)
values
('Owner','Pemilik aplikasi'),
('Supervisor','Pengawas tim'),
('Editor','Editor video'),
('Publisher','Publisher YouTube'),
('Viewer','Hanya melihat data')
on conflict(name) do nothing;

insert into permissions(code,name)
values
('dashboard.view','Dashboard'),
('project.view','Lihat Project'),
('project.create','Buat Project'),
('project.edit','Edit Project'),
('episode.create','Buat Episode'),
('episode.edit','Edit Episode'),
('youtube.publish','Publish YouTube'),
('team.manage','Kelola Tim')
on conflict(code) do nothing;

insert into workflow_statuses(code,name,sort_order)
values
('draft','Draft',1),
('assigned','Assigned',2),
('working','Working',3),
('uploaded','Uploaded',4),
('review','Under Review',5),
('revision','Need Revision',6),
('approved','Approved',7),
('scheduled','Scheduled',8),
('published','Published',9)
on conflict(code) do nothing;

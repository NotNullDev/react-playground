drop table if exists notes;
create table notes(
  id text primary key default(gen_random_uuid()),
  title text not null,
  body text not null,
  created_at timestamp not null default(now()),
  updated_at timestamp not null default(now())
);


insert into notes (title, body) values ('Note 1', 'This is the body of note 1');
insert into notes (title, body) values ('Note 2', 'This is the body of note 2');

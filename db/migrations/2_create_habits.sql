DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name varchar(200),
    frequency int,
    time int,
    comment varchar(500),
    is_complete boolean default false,
    user_id int
);


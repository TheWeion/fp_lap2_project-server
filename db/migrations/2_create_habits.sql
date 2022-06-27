DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name varchar(200),
    frequency int,
    time timestamp,
    user_id int
);


DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(200) UNIQUE,
    email varchar(100),
    password varchar(50),
);


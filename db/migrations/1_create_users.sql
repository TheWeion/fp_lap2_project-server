DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(200) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(500) NOT NULL,
    created_at timestamp NOT NULL DEFAULT now()
);
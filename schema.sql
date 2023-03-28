-- tabla usada para el CRUD

CREATE TABLE users (
	id smallserial primary key,
	name varchar(255) NOT NULL,
	email varchar(255) NOT null unique,
	status smallint NOT NULL
);

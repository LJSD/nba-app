DROP DATABASE IF EXISTS userSignUp_db;

CREATE DATABASE NBA_Stats;
USE NBA_Stats;
CREATE TABLE account
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
DROP TABLE users;
SELECT * FROM accounts;
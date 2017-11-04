CREATE DATABASE userSignUp_db;
USE userSignUp_db;

CREATE TABLE userInfo
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE playerAstrology
(
	id int NOT NULL AUTO_INCREMENT,
	starSign varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
	players varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
SELECT * FROM playerAstrology;


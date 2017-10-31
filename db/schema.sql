CREATE DATABASE userSignUp_db;
USE userSignUp_db;

CREATE TABLE userInfo
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
SELECT * FROM userInfo;
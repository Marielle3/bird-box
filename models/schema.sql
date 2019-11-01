DROP DATABASE IF EXISTS coffee_rideDB;
CREATE DATABASE coffee_rideDB;

USE coffee_rideDB;

CREATE TABLE registrations (
  userid INTEGER(11) NOT NULL,
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL,
  username VARCHAR(255) NULL,
  PRIMARY KEY (userid)
);

CREATE TABLE messaging (
  messageid INTEGER(11) NOT NULL,
  messageText VARCHAR(255) NULL,
  currentDate TIMESTAMP,
  PRIMARY KEY(messageid)
);

CREATE TABLE rides (
   rideid INTEGER(11) NOT NULL,
   PRIMARY KEY(rideid)
);




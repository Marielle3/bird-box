DROP DATABASE IF EXISTS coffee_rideDB;
CREATE DATABASE coffee_rideDB;

USE coffee_rideDB;

CREATE TABLE riders (
  username VARCHAR(100) NOT NULL,
  password PASSWORD NOT NULL,
  chat TEXT NOT NULL,
  favorite_place VARCHAR(200) NOT NULL,
  current_date TIMESTAMP,
  PRIMARY KEY (username)
);


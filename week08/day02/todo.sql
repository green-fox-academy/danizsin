CREATE DATABASE IF NOT EXISTS todoapp;

CREATE TABLE IF NOT EXISTS todos (
  'todoid' INT(9) NOT NULL AUTO_INCREMENT,
  'todo' VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY('todoid')
);

INSERT INTO todos (todoid, todo) VALUES (1, "Baking"), (2, "Washing the dishes");
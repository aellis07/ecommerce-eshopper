-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL (8,4) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT ,
    FOREIGN KEY (category_id)
    REFERENCES category(id)
    ON DELETE SET NULL
);

CREATE TABLE tag(
    id INT NOT NULL PRIMARY KEY,
    tag_name VARCHAR(10)
);
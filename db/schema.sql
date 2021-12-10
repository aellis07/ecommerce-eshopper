-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE Category (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Product(
    id INT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL (8,4) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT ,
    FOREIGN KEY (category_id)
    REFERENCES Category(id)
    ON DELETE SET NULL
);

CREATE TABLE Tag(
    id INT NOT NULL PRIMARY KEY,
    tag_name VARCHAR(10)
);

CREATE TABLE ProductTag(
    id INT NOT NULL PRIMARY KEY,
    product_id INT,
    tag_id INT, 
    FOREIGN KEY (product_id)
    FOREIGN KEY (tag_id)
    REFERENCES Product(id)
    REFERENCES Tag(id)
    ON DELETE SET NULL
 
);
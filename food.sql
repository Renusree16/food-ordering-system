CREATE DATABASE fooddb;
USE fooddb;

CREATE TABLE foods(
    foodid INT AUTO_INCREMENT PRIMARY KEY,
    foodname VARCHAR(100) NOT NULL,
    category ENUM('Veg','Non Veg') NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    available BOOLEAN NOT NULL
    image VARCHAR(255)
);

INSERT INTO foods(foodname,category,price,description,available)
VALUES
('Veg Biryani','Veg',180,'Delicious Veg Biryani',TRUE),
('Chicken Biryani','Non Veg',250,'Spicy Chicken Biryani',TRUE),
('Paneer Pizza','Veg',220,'Cheesy Paneer Pizza',FALSE),
('Burger','Veg',120,'Crispy Burger',TRUE),
('Chicken Fried Rice','Non Veg',190,'Special Fried Rice',TRUE);
ALTER TABLE foods
ADD image VARCHAR(255);
DROP DATABASE IF EXISTS `meal_reservation`;
CREATE DATABASE IF NOT EXISTS `meal_reservation`;
USE `meal_reserrvation`;


CREATE TABLE `meal`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(50) NOT NULL,
`description` TEXT NOT NULL,
`location` VARCHAR(100) NOT NULL,
`when` DATETIME NOT NULL,
 `max-reservations` INT NOT NULL,
 `price` DECIMAL(3, 1) NOT NULL,
 `created-date` DATE DEFAULT(CURRENT_DATE) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservation` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`number-of-guests` INT NOT NULL,
`meal_id` INT NOT NULL,
`created-date` DATE NOT NULL,
`contact-phonenumber` VARCHAR(20) NOT NULL,
`contact-email` varchar(30) NOT NULL,
CONSTRAINT `fk_reservation_meal` 
    FOREIGN KEY (`meal_id`) 
    REFERENCES `meal` (`id`)  
    ON DELETE CASCADE 
    ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `review` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `description` TEXT NOT NULL,
  `meal_id` INT NOT NULL,
  `stars` INT NOT NULL,
  `created_date` DATE DEFAULT(CURRENT_DATE) NOT NULL,
  CONSTRAINT `fk_review_meal` 
     FOREIGN KEY (`meal_id`) 
     REFERENCES `meal` (`id`)
     ON DELETE CASCADE ON 
     UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Meal

-- Get all meals
SELECT * FROM `meal`;
SELECT `id`, `title`, FROM `meal`;


-- Add a new meal
INSERT INTO `meal` (`id`, `location`,`title`, `description`, `max-reservations`, `price`, )
    

-- Get a meal with any id, fx 1
SELECT * FROM `meal`
WHERE `id` = 1;


-- Delete a meal with any id, fx 1
DELETE FROM `meal`
WHERE `id` = 1;


--Reservation

-- Get all reservations
SELECT * FROM `reservation`;

-- Add a new reservation
INSERT INTO `reservation` (`id`,`meal_id`, `number-of-guests`, `contact-phonenumber`, `contact-email`)
          
            
-- Get a reservation with any id, fx 1
SELECT * FROM `reservation`
WHERE `id` = 1;

-- Update a reservation with any id, fx 1
UPDATE `reservation`
WHERE `id` = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM `reservation`
WHERE `id` = 1;

-- Review

-- Get all reviews
SELECT * FROM `review`;

-- Add a new review
INSERT INTO `review` (`id`, `title`, `description`,`meal_id` ,`stars`,)
            

-- Get a review with any id, fx 1
SELECT * FROM `review`
WHERE `id` = 1;

-- Update a review with any id, fx 1
UPDATE`review`
WHERE `id` = 1;

-- Delete a review with any id, fx 1
DELETE FROM `review`
WHERE `id` = 1;




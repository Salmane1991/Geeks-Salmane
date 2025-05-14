SELECT *
FROM customer;
SELECT first_name || ' ' || last_name AS full_name
FROM customer;
SELECT DISTINCT create_date
FROM customer;
SELECT *
FROM customer
ORDER BY first_name DESC;
SELECT film_id,
    title,
    description,
    release_year,
    rental_rate
FROM film
ORDER BY rental_rate ASC;
SELECT address,
    phone
FROM address
WHERE district = 'Texas';
SELECT *
FROM film
WHERE film_id IN (15, 150);
SELECT film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE title = 'Titanic';
SELECT film_id,
    title,
    description,
    length,
    rental_rate
FROM film
WHERE title LIKE 'Ti%';
SELECT film_id,
    title,
    rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;
SELECT film_id,
    title,
    rental_rate
FROM film
WHERE rental_rate > (
        SELECT MAX(rental_rate)
        FROM (
                SELECT rental_rate
                FROM film
                ORDER BY rental_rate ASC
                LIMIT 10
            ) AS first_ten
    )
ORDER BY rental_rate ASC
LIMIT 10;
SELECT customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM customer
    JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;
SELECT *
FROM film
WHERE film_id NOT IN (
        SELECT film_id
        FROM inventory
    );
SELECT city.city,
    country.country
FROM city
    JOIN country ON city.country_id = country.country_id;
SELECT customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date,
    staff.staff_id
FROM customer
    JOIN payment ON customer.customer_id = payment.customer_id
    JOIN staff ON payment.staff_id = staff.staff_id
ORDER BY staff.staff_id;
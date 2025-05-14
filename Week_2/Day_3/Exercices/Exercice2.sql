UPDATE film SET language_id = 2 WHERE film_id IN (1, 2, 3);
UPDATE film SET language_id = 3 WHERE film_id IN (4, 5);
DROP TABLE IF EXISTS customer_review CASCADE;
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;
SELECT film.title, film.replacement_cost FROM rental JOIN inventory ON rental.inventory_id = inventory.inventory_id JOIN film ON inventory.film_id = film.film_id WHERE rental.return_date IS NULL ORDER BY film.replacement_cost DESC LIMIT 30;
SELECT DISTINCT film.title FROM film JOIN film_actor ON film.film_id = film_actor.film_id JOIN actor ON film_actor.actor_id = actor.actor_id WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';
SELECT title FROM film WHERE length < 60 AND rating = 'R';
SELECT DISTINCT film.title FROM film JOIN inventory ON film.film_id = inventory.film_id JOIN rental ON inventory.inventory_id = rental.inventory_id JOIN payment ON rental.rental_id = payment.rental_id JOIN customer ON rental.customer_id = customer.customer_id WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND payment.amount > 4.00 AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
SELECT DISTINCT film.title FROM film JOIN inventory ON film.film_id = inventory.film_id JOIN rental ON inventory.inventory_id = rental.inventory_id JOIN customer ON rental.customer_id = customer.customer_id WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%') ORDER BY film.replacement_cost DESC LIMIT 1;

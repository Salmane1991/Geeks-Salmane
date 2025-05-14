SELECT * FROM language;
SELECT film.title, film.description, language.name
FROM film
INNER JOIN language ON film.language_id=language.language_id;
SELECT film.title, film.description, language.name
FROM language
LEFT JOIN film ON  language.language_id=film.language_id;
CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL
);
INSERT INTO new_film(name)
VALUES 
  ('My friend'),
  ('30 millions'),
  ('casanegra'),
  ('Nayda');
CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INTEGER   REFERENCES new_film(id) ON DELETE CASCADE,
language_id  INTEGER  REFERENCES language(language_id),
title VARCHAR(100),
score INTEGER CHECK (score BETWEEN 1 AND 10),
review_text TEXT,
last_update DATE

);
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES 
(4,2,'Nayda', 6,'Not that realstic as advertised',CURRENT_DATE),
(1,1,'My friend',8, $$Very Funny but can't watch it with family$$, CURRENT_DATE);

DELETE FROM new_film
WHERE name='Nayda';

SELECT * FROM customer_review;




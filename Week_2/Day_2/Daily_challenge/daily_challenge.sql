Q1) Expectation : The result will be 3 rows cause they are not null.However after execution it produces 0.
   SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
Q2)- Expectation: 3 cause when we do COUNT(*) we also inlcude the rows with null values.However, the answer was 2.
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
Q3) Expectation: 2 cause 6 and 7 are not in (5 , null).
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
 Q4)-Expectation:2 cause 6 and 7 are not in 5.
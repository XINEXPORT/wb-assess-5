SELECT * FROM cupcakes; SELECT * FROM orders; SELECT * FROM customers;

--#1
SELECT * FROM customers ORDER BY email asc;

--#2
SELECT * FROM customers JOIN orders ON customers.id=orders.customer_id WHERE customers.fname LIKE '%Elizabeth%' AND customers.lname LIKE '%Crocker%';

--# 3 Something is wrong with this query. Returning 256 instead of 209.
SELECT SUM (num_cupcakes) FROM orders WHERE orders.processed='t';

--#4
SELECT name, SUM (num_cupcakes) FROM cupcakes LEFT JOIN orders ON orders.cupcake_id = cupcakes.id GROUP BY cupcakes.name;

--5
SELECT SUM (orders.num_cupcakes) AS Total, customers.fname,customers.lname, customers.email FROM customers JOIN orders ON orders.customer_id = customers.id GROUP BY customers.fname, customers.lname, customers.email;

--#6
SELECT DISTINCT customers.email AS Email,customers.fname,customers.lname, cupcakes.name, orders.processed FROM customers JOIN orders ON orders.customer_id=customers.id JOIN cupcakes ON cupcakes.id=orders.cupcake_id WHERE cupcakes.name LIKE '%fun%' AND orders.processed = 't';



Database:

- Collection of data.
- Data is either
  - structured
    - tables (rows and columns)
    - SQL: Structured Query Language
    - MySQL, PostgreSQL, SQLite, Oracle, MS SQL Server, etc.
  - unstructured.
    - JSON, XML, etc.
    - NoSQL: Not Only SQL
    - MongoDB, CouchDB, Cassandra, Elsticsearch, etc.

SQL Vs NoSQL Applications:

- SQL databases are best suited for applications like
  - E-commerce applications
  - Banking applications
  - Financial applications
  - etc.
- NoSQL databases are best suited for applications like
  - Social media applications
  - Gaming applications
  - etc.

SQL Queries:

To check the version of the database:

select version();

To show all databases:

show databases;

To create a database:

create database database_name;

To delete a database:

drop database database_name;

To view the selected database:

select database();

To use a database:

use database_name;

To show all tables in a database:

show tables;

To create a table:

create table table_name(
column1 datatype,
column2 datatype,
...
);

Example:

create table users(
id int,
name varchar(255),
email varchar(255),
age int
);

To view the structure of a table:

describe table_name;

or

desc table_name;

To insert data into a table:

insert into table_name(column1, column2, ...)
values(value1, value2, ...);

Example:

insert into users(id, name, email, age)
values(1, 'John Doe', 'john@example.com', 25);

To view all data in a table:

select \* from table_name;

To add a constraint to a column in a created table:

alter table table_name add constraint constraint_name constraint_type(column_name, ...);

Example:

alter table users add constraint pk_id primary key(id);

To delete all the records in a table:(truncate)

delete from table_name;

Insert multiple records into a table:

insert into table_name(column1, column2, ...)
values(value1, value2, ...),
(value1, value2, ...),
...;

Example:

insert into users(id, name, email, age)
values(1, 'John Doe', 'john@example.com', 25),
(2, 'Jane Doe', 'jane@example.com', 23),
(3, 'John Smith', 'smith@example.com', 30);

To update a record in a table:

update table_name
set column1=value1, column2=value2, ...
where condition;

select queries:

To select all columns from a table:

select \* from table_name;

To select specific columns from a table:

select column1, column2, ...
from table_name;

example:

select name, email from users;

To select observations based on a condition:

where clause:

select \* from table_name
where condition;

example:

select \* from users
where age > 25;

To select observations based on multiple conditions:

select \* from table_name
where condition1 and condition2;

example:

select \* from users
where age > 25 and name='John Doe';

using or:

select \* from table_name
where condition1 or condition2;

example:

select \* from users
where age > 25 or name='John Doe';

using in operator:

select \* from table_name
where column_name in (value1, value2, ...);

example:

select \* from users
where age in (25, 30);

using not in operator:

select \* from table_name
where column_name not in (value1, value2, ...);

example:

select \* from users
where age not in (25, 30);

using between operator:

select \* from table_name
where column_name between value1 and value2;

example:

select \* from users
where age between 25 and 30;

using like operator:

select \* from table_name
where column_name like pattern;

example:

select \* from users
where name like 'J%';

This will select all the names starting with 'J'.

select names that starts with 'J' and ends with 'e':

select \* from users
where name like 'J%e';

distinct:

select distinct column_name from table_name;

example:

select distinct(age) from users;

create table products(
id int primary key,
name varchar(255),
price float,
quantity int,
branch varchar(255),
customerName varchar(255)
);

insert into products(id, name, price, quantity, branch, customerName) values
(1, 'Laptop', 50000, 10, 'Mumbai', 'John Doe'),
(2, 'Mobile', 20000, 20, 'Delhi', 'Jane Doe'),
(3, 'Tablet', 10000, 30, 'Bangalore', 'John Smith'),
(4, 'Desktop', 30000, 40, 'Chennai', 'Jane Smith'),
(5, 'Smartwatch', 15000, 50, 'Kolkata', 'John Doe'),
(6, 'Headphones', 5000, 60, 'Mumbai', 'Jane Doe'),
(7, 'Earphones', 2000, 70, 'Delhi', 'John Smith'),
(8, 'Keyboard', 3000, 80, 'Bangalore', 'Jane Smith'),
(9, 'Mouse', 1000, 90, 'Chennai', 'John Doe'),
(10, 'Monitor', 15000, 100, 'Kolkata', 'Jane Doe'),
(11, 'Printer', 20000, 110, 'Mumbai', 'John Smith'),
(12, 'Scanner', 5000, 120, 'Delhi', 'Jane Smith'),
(13, 'Projector', 30000, 130, 'Bangalore', 'John Doe'),
(14, 'Speaker', 2000, 140, 'Chennai', 'Jane Doe'),
(15, 'Router', 3000, 150, 'Kolkata', 'John Smith'),
(16, 'Modem', 1000, 160, 'Mumbai', 'Jane Smith'),
(17, 'Switch', 15000, 170, 'Delhi', 'John Doe'),
(18, 'Hub', 5000, 180, 'Bangalore', 'Jane Doe'),
(19, 'Firewall', 2000, 190, 'Chennai', 'John Smith'),
(20, 'Access Point', 3000, 200, 'Kolkata', 'Jane Smith');

group by:

to group the data based on a column (to summarize the data).

To get the total quantity of products in each branch:

select branch, sum(quantity) from products group by branch;

Exercise:

1. Get the total amount spent by each customer.
2. Get the total amount spent by each customer in each branch.
3. Get the top 3 customers who spent the most amount.
4. Get the second top 2 customers who spent the most amount.
5. Get the average amount spent by customers in each branch.
6. Get the total amount spent by customers who spent more than 10000.

Mumbai John Doe 50000
Mumbai Jane Doe 5000
Mumbai John Smith 20000
Mumbai Jane Smith 1000

Normalization: (to reduce redundancy)

- Normalization is a process of organizing the data in a database.
- Normalization is used to eliminate redundancy and dependency by dividing large tables into smaller tables and defining relationships between them.
- The main aim of Normalization is to add, delete or modify a field in a table without altering the data present in other tables.

For example:

Let us take the products table above.

products(
id int primary key,
name varchar(255),
price float,
quantity int,
branch varchar(255),
customerName varchar(255)
);

The above table is not normalized because the branch and customerName columns are dependent on each other.

To normalize the above table, we can create four tables: products, branches, customers, and sales.

products(
id int primary key,
name varchar(255),
price float,
quantity int
);

branches(
id int primary key,
name varchar(255)
);

customers(
id int primary key,
name varchar(255)
);

sales(
id int primary key,
productId int,
branchId int,
customerId int
);

Now, the products table is independent of the branch and customerName columns.

The branches and customers tables are independent of each other.

The sales table contains the productId, branchId, and customerId columns.

The sales table is used to store the sales data.

The sales table is dependent on the products, branches, and customers tables.

products table:

id name price quantity
P1 Laptop 50000 10
P2 Mobile 20000 20
P3 Tablet 10000 30
P4 Desktop 30000 40
P5 Smartwatch 15000 50
P6 Headphones 5000 60
P7 Earphones 2000 70
P8 Keyboard 3000 80
P9 Mouse 1000 90
P10 Monitor 15000 100
P11 Printer 20000 110
P12 Scanner 5000 120
P13 Projector 30000 130
P14 Speaker 2000 140
P15 Router 3000 150
P16 Modem 1000 160
P17 Switch 15000 170
P18 Hub 5000 180
P19 Firewall 2000 190
P20 Access Point 3000 200

insert into products(id, name, price, quantity) values
(1, 'Laptop', 50000, 10),
(2, 'Mobile', 20000, 20),
(3, 'Tablet', 10000, 30),
(4, 'Desktop', 30000, 40),
(5, 'Smartwatch', 15000, 50),
(6, 'Headphones', 5000, 60),
(7, 'Earphones', 2000, 70),
(8, 'Keyboard', 3000, 80),
(9, 'Mouse', 1000, 90),
(10, 'Monitor', 15000, 100),
(11, 'Printer', 20000, 110),
(12, 'Scanner', 5000, 120),
(13, 'Projector', 30000, 130),
(14, 'Speaker', 2000, 140),
(15, 'Router', 3000, 150),
(16, 'Modem', 1000, 160),
(17, 'Switch', 15000, 170),
(18, 'Hub', 5000, 180),
(19, 'Firewall', 2000, 190),
(20, 'Access Point', 3000, 200);

branches table:

id name
1 Mumbai
2 Delhi
3 Bangalore
4 Chennai
5 Kolkata

insert into branches(id, name) values
(1, 'Mumbai'),
(2, 'Delhi'),
(3, 'Bangalore'),
(4, 'Chennai'),
(5, 'Kolkata');

customers table:

id name
1 John Doe
2 Jane Doe
3 John Smith
4 Jane Smith

insert into customers(id, name) values
(1, 'John Doe'),
(2, 'Jane Doe'),
(3, 'John Smith'),
(4, 'Jane Smith');

sales table:

id productId branchId customerId
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
5 5 5 1
6 6 1 2
7 7 2 3
8 8 3 4
9 9 4 1
10 10 5 2
11 11 1 3
12 12 2 4
13 13 3 1
14 14 4 2
15 15 5 3
16 16 1 4
17 17 2 1
18 18 3 2
19 19 4 3
20 20 5 4

insert into sales(id, productId, branchId, customerId) values
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4),
(5, 5, 5, 1),
(6, 6, 1, 2),
(7, 7, 2, 3),
(8, 8, 3, 4),
(9, 9, 4, 1),
(10, 10, 5, 2),
(11, 11, 1, 3),
(12, 12, 2, 4),
(13, 13, 3, 1),
(14, 14, 4, 2),
(15, 15, 5, 3),
(16, 16, 1, 4),
(17, 17, 2, 1),
(18, 18, 3, 2),
(19, 19, 4, 3),
(20, 20, 5, 4);

Now, the products table is independent of the branch and customerName columns.
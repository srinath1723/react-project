# MYSQL 2024-06-11
- compariction chart link("https://github.com/rvsp/database/blob/master/sql-mongo_comparison.md")

**Database:**
    
   - Collection of data.m Data is either structure tables (rows and columns)
    SQL: Structured Query Language
    MySQL, PostgreSQL, SQLite, Oracle, MS SQL Server, etc.
        unstructured.
        JSON, XML, etc.
        NoSQL: Not Only SQL
        MongoDB, CouchDB, Cassandra, Elsticsearch, etc.
        SQL Vs NoSQL Applications:
        SQL databases are best suited for applications like
        E-commerce applications
        Banking applications
        Financial applications
        etc.
        NoSQL databases are best suited for applications like
        Social media applications
        Gaming applications
        etc.

 **SQL Queries:**
   
   * To check the version of the database:
         select version();
   
   * To show all databases:
         show databases;
   
   * To create a database:
         create database database_name;

   * To delete a database:
         drop database database_name;

   * To view the selected database:
         select database();

   * To use a database:
         use database_name;

   * To show all tables in a database:
         show tables;

   * To create a table:
         create table table_name( column1 datatype, column2 datatype, ... );

   **Example:**
         create table users( id int, name varchar(255), email varchar(255), age int );

   * To view the structure of a table:
         describe table_name;
         or
         desc table_name;

   * To insert data into a table:
         insert into table_name(column1, column2, ...) values(value1, value2, ...);
 
   **Example:**
         insert into users(id, name, email, age) values(1, 'John Doe', 'john@example.com', 25);

   * To view all data in a table:
         select * from table_name;

   * To add a constraint to a column in a created table:
         alter table table_name add constraint constraint_name constraint_type(column_name, ...);
   
   **Example:**
         alter table users add constraint pk_id primary key(id);

   * To delete all the records in a table:(truncate)
         delete from table_name;
 
   * Insert multiple records into a table:
         insert into table_name(column1, column2, ...) values(value1, value2, ...), (value1, value2, ...), ...;

   **Example:**
         insert into users(id, name, email, age) values(1, 'John Doe', 'john@example.com', 25), (2, 'Jane Doe',
         'jane@example.com', 23), (3, 'John Smith', 'smith@example.com', 30);

   * To update a record in a table:
         update table_name set column1=value1, column2=value2, ... where condition;

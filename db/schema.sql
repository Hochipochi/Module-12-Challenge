DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

USE library_db;

CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR(100) NOT NULL,
    employee_last_name VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    FOREIGN KEY (department_name) REFERENCES departments(department_id) ON DELETE SET NULL,
    FOREIGN KEY (role_name) REFERENCES roles(role_id) ON DELETE SET NULL,
    FOREIGN KEY (employee_salary) REFERENCES roles(role_salary) ON DELETE SET NULL,
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(100) NOT NULL,
    role_salary INT NOT NULL,
);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
);

create table Country (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    code varchar(5) NOT NULL,
    CONSTRAINT country_PK PRIMARY KEY (id)
);


create table CategoryType (
    id_category_type int NOT NULL AUTO_INCREMENT,
    country_code varchar(5) NOT NULL,
    name varchar(255) NOT NULL,
    active bit NOT NULL,
    CONSTRAINT category_type_PK PRIMARY KEY (id_category_type)
);


create table Category(
    id_category int NOT NULL AUTO_INCREMENT,
    id_category_type int NOT NULL,
    name varchar(255) NOT NULL,
    active bit NOT NULL,
    CONSTRAINT category_PK PRIMARY KEY (id_category),
    FOREIGN KEY (id_category_type) REFERENCES CategoryType(id_category_type)
);

USE Casting;

CREATE TABLE user (
	id int not null  AUTO_INCREMENT primary key,
	username varchar(30) not null unique,
	email varchar(100) not null,
	password varchar(100) not null,
	phone varchar(9) null
);

CREATE TABLE actor (
	id int not null primary key,
	FOREIGN KEY fk_user(id) REFERENCES user(id),
	gender varchar(6) not null,
	race varchar(30) null,
	height float null,
	weight float null,
	bodytype varchar(30),
	preferredLocation varchar(5) null,
	TheatreFlag enum('T', 'F') null,
	FilmFlag enum('T', 'F') null,
	MusicalTheatreFlag enum('T', 'F') null,
	SingingTypes varchar(10) null,
	SingingYears int null,
	GymnasticFlag enum('T', 'F') null,
	CompensationDesired varchar(30)
);

CREATE TABLE actor_photos (
	id int not null AUTO_INCREMENT primary key,
	actorid int not null,
	foreign key fk_actor(actorid) REFERENCES actor(id),
	dataurl varchar(255)
);

  -- collection of skill fields and attributes

CREATE TABLE company(
	id int not null primary key,
	foreign key fk_company(id) REFERENCES user(id),
	name varchar(30),
	type varchar(30)
);

CREATE TABLE production(
	id int not null AUTO_INCREMENT primary key,
	companyid int not null,
	foreign key fk_company(companyid) REFERENCES company(id),
	name varchar(30),
	TheatreFlag enum('T', 'F') null,
	FilmFlag enum('T', 'F') null,
	MusicalTheatreFlag enum('T', 'F') null
);

CREATE TABLE part(
	id int not null AUTO_INCREMENT primary key,
	productionid int not null,
	foreign key fk_production(productionid) REFERENCES production(id),
	name varchar(30),
	gender varchar(6) not null,
	race varchar(30) null,
	height float null,
	weight float null,
	bodytype float null,
	SingingType varchar(10) null,
	GymnasticFlag enum('T', 'F') null,
	Compensation varchar(30)
);

CREATE TABLE audition(
	id int not null AUTO_INCREMENT primary key,
	productionid int not null,
	foreign key fk_production1(productionid) REFERENCES production(id),
	address varchar(200) null,
	latitude varchar(30) null,
	longitude varchar(30) null
);

CREATE TABLE auditionPart(
    id int not null AUTO_INCREMENT primary key,
    partid int not null,
    auditionid int not null,
    foreign key fk_production2(partid) REFERENCES part(id),
    foreign key fk_audition1(auditionid) REFERENCES audition(id) 
);

CREATE TABLE actor_audition(
    id int not null AUTO_INCREMENT primary key,
    actorid int not null,
    auditionid int not null,
    foreign key fk_actor2(actorid) REFERENCES actor(id),
    foreign key fk_audition2(auditionid) REFERENCES audition(id) 
);

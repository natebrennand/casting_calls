
CREATE TABLE user (
	id int constraint not null  AUTO_INCREMENT primary key,
	username varchar(30) not null constraint unique
	email varchar(100) not null
	password varchar(100) not null
)

CREATE TABLE actor (
	id int constraint not null AUTO_INCREMENT primary key
	foreign key (userid) REFERENCES user(id) not null
	gender varchar(6) not null
	race varchar(30) null
	height float null
	weight float null
	bodytype float null
)

CREATE TABLE actor_photos (
	    
)


CREATE TABLE actor_audition

  -- collection of skill fields and attributes

CREATE TABLE company
CREATE TABLE production
CREATE TABLE part
CREATE TABLE audition
CREATE TABLE cast


-- --  LOW PRIORITY

-- CREATE TABLE actor_alerts

-- CREATE TABLE sms_messages
-- CREATE TABLE sms_queue

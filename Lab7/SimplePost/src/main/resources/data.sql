INSERT into POST (id, title, content, author) VALUES (1, 'MIU','Life is structured in layers','Dean');
INSERT into POST (id, title, content, author) VALUES (2, 'React','React is a good SPA library','Dean');
INSERT into POST (id, title, content, author) VALUES (3, 'Spring','Spring is awesome','Dean');
INSERT into POST (id, title, content, author)  VALUES (4, 'SpringBoot','This is a module that works over spring modules','John');

INSERT into USER (id, name, username, password, IS_Enabled)  VALUES (111, 'Dean','dean','1234',true);
INSERT into USER (id, name, username, password, IS_Enabled)  VALUES (112, 'Zaineh','zaineh','1234',true);

INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (1, 'USER');
INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (2, 'ADMIN');

insert into USER_ROLES(USER_ID, ROLE_ID) values (111, 2);
insert into USER_ROLES(USER_ID, ROLE_ID) values (112, 1);


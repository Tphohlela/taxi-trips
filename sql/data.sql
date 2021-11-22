insert into routes(id,route_name,fare) values (1, 'Cape Town - Bellville',17);
insert into routes(id,route_name,fare) values (2, 'Cape Town - Gugulethu',15);
insert into routes(id,route_name,fare) values (3, 'Cape Town - Langa',15);
insert into routes(id,route_name,fare) values (4, 'Sandton - Randburg',17);
insert into routes(id,route_name,fare) values (5, 'Alexandra - Sandton',20);
insert into routes(id,route_name,fare) values (6, 'Sandton - Midrand',16);
insert into routes(id,route_name,fare) values (7, 'Umlazi - Durban Central',14);
insert into routes(id,route_name,fare) values (8, 'Durban Central - Umhlanga Rocks',20);
insert into routes(id,route_name,fare) values (9, 'Durban Central - Umbilo',18);

insert into taxis(id,reg) values (1, 'CA 123 123');
insert into taxis(id,reg) values (2, 'CJ 122 983');
insert into taxis(id,reg) values (3, 'CY 822 783');
insert into taxis(id,reg) values (4, 'BHG 567 GP');
insert into taxis(id,reg) values (5, 'NJO 345 GP');
insert into taxis(id,reg) values (6, 'TNP 699 GP');
insert into taxis(id,reg) values (7, 'ND 153 765');
insert into taxis(id,reg) values (8, 'NZ 045 952');
insert into taxis(id,reg) values (9, 'ND 980 231');

insert into region(id,area) values (1, 'Cape Town');
insert into region(id,area) values (2, 'Gauteng');
insert into region(id,area) values (3, 'Durban');

insert into trips(id,reg_id,route_id,region_id) values (1,1,1,1);
insert into trips(id,reg_id,route_id,region_id) values (2,1,2,1);
insert into trips(id,reg_id,route_id,region_id) values (3,1,3,1);
insert into trips(id,reg_id,route_id,region_id) values (4,4,6,2);
insert into trips(id,reg_id,route_id,region_id) values (5,4,4,2);
insert into trips(id,reg_id,route_id,region_id) values (6,4,4,2);
insert into trips(id,reg_id,route_id,region_id) values (7,4,5,2);
insert into trips(id,reg_id,route_id,region_id) values (8,9,9,3);
insert into trips(id,reg_id,route_id,region_id) values (9,9,7,3);
insert into trips(id,reg_id,route_id,region_id) values (10,9,7,3);
insert into trips(id,reg_id,route_id,region_id) values (11,2,3,1);
insert into trips(id,reg_id,route_id,region_id) values (12,2,2,1);
insert into trips(id,reg_id,route_id,region_id) values (13,2,1,1);
insert into trips(id,reg_id,route_id,region_id) values (14,5,6,2);
insert into trips(id,reg_id,route_id,region_id) values (15,5,5,2);
insert into trips(id,reg_id,route_id,region_id) values (16,5,4,2);
insert into trips(id,reg_id,route_id,region_id) values (17,8,8,3);
insert into trips(id,reg_id,route_id,region_id) values (18,8,9,3);
insert into trips(id,reg_id,route_id,region_id) values (19,8,9,3);
insert into trips(id,reg_id,route_id,region_id) values (20,3,3,1);
insert into trips(id,reg_id,route_id,region_id) values (21,3,2,1);
insert into trips(id,reg_id,route_id,region_id) values (22,6,4,2);
insert into trips(id,reg_id,route_id,region_id) values (23,6,5,2);
insert into trips(id,reg_id,route_id,region_id) values (24,6,5,2);
insert into trips(id,reg_id,route_id,region_id) values (25,7,9,3);
insert into trips(id,reg_id,route_id,region_id) values (26,7,8,3);
insert into trips(id,reg_id,route_id,region_id) values (27,7,7,3);
insert into trips(id,reg_id,route_id,region_id) values (28,3,2,1);








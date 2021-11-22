create table routes(
    id serial not null primary key,
    route_name text not null unique,
    fare decimal(10,2)
);

create table taxis(
    id serial not null primary key,
    reg text not null unique
);

create table region(
    id serial not null primary key,
    area text not null
);

create table trips(
    id serial not null primary key,
    reg_id int,
    route_id int,
    region_id int,
    foreign key (reg_id) references taxis(id),
    foreign key (route_id) references routes(id),
    foreign key (region_id) references region(id)
);



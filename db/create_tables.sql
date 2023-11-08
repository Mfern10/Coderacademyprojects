drop table items;
drop table categories;

create table categories (
    id serial primary key,

    name varchar(50) not null unique,
    description text
);

-- using multiple rows by comma seperation
insert into categories (name, description) values
    ('Electronics', 'Gadgets to make life easier'),
    ('Car Parts', 'Expensive stuff for the box with 4 wheels'),
    ('Sports', 'Get out and play!'),
    ('Video Games', 'Stay in and play!')
;

-- How to create a table
create table items (
    id serial primary key,

    name varchar(200) not null,
    description text not null,
    category_id integer not null,
-- How to create a foreign key
    foreign key (category_id) references categories (id) on delete cascade
);

insert into items (name, description, category_id) values 
    ('Skyrim', 'Awesome open-world RPG', 4),
    ('World of Warcraft', 'Popular MMORPG', 4),
    ('iPhone', 'Apple''s flagship smartphone', 1),
    ('Greg Norman golf clubs', 'At least you can look like a pro', 3)
;






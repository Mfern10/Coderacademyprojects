from flask import Blueprint
from setup import db, bcrypt
from models.user import User
from models.card import Card
from datetime import date
from models.comment import Comment

db_commands = Blueprint('db', __name__)

# adds a terminal function to run to create the table
@db_commands.cli.command('create')
def db_create():
    db.drop_all() # drops the tables when run so no duplicates
    db.create_all()
    print('Created tables')

# creates a terminal function to run that places data into the table
@db_commands.cli.command('seed')
def db_seed():
    users = [
        User(
            email = 'admin@spam.com',
            password=bcrypt.generate_password_hash('spinynorman').decode('utf8'),
            is_admin=True
        ),
        User(
            name='John Cleese',
            email='cleese@spam.com',
            password=bcrypt.generate_password_hash('tisbutascratch').decode('utf8'),
        )
    ]

    db.session.add_all(users)
    db.session.commit()

    cards= [
        Card(
            title = 'Start the project',
            description = 'Stage 1 - ERD Creation',
            status = 'Done',
            date_created = date.today(),
            user_id = users[0].id
        ),
        Card(
            title = 'ORM Queries',
            description = 'Stage 2 - Implement CRUD queries',
            status = 'In progress',
            date_created = date.today(),
            user_id = users[1].id
        ),
        Card(
            title = 'Marshmallow',
            description = 'Stage 3 - Implement JSONify of meodels',
            status = 'In progress',
            date_created = date.today(),
            user_id = users[0].id
        ),
    ]

    # adds the data then commits it to the database will now show in psql database
    db.session.add_all(cards)
    db.session.commit()

    comments = [
        Comment(
            message = "Comment 1",
            user_id = users[0].id,
            card_id=cards[1].id
        ),
                Comment(
            message = "Comment 2",
            user_id = users[1].id,
            card_id=cards[1].id
        ),
                Comment(
            message = "Comment 3",
            user_id = users[1].id,
            card_id=cards[0].id
        )
    ]

    db.session.add_all(comments)
    db.session.commit()
    


    print('Database seeded')
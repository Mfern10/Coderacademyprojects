from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow


app = Flask(__name__)

# Links the postgres DB and user to the flask application
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)
ma = Marshmallow(app)

class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')

# creates a model which represents a entity in the database/creates a table in postgres DB trello
class Card(db.Model):
    __tablename__ = 'cards' # sets the table name to follow convention

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    status = db.Column(db.String(30))
    date_created = db.Column(db.Date())


# adds a terminal function to run to create the table
@app.cli.command('db_create')
def db_create():
    db.drop_all() # drops the tables when run so no duplicates
    db.create_all()
    print('Created tables')

# creates a terminal function to run that places data into the table
@app.cli.command('db_seed')
def db_seed():
    cards= [
        Card(
            title = 'Start the project',
            description = 'Stage 1 - ERD Creation',
            status = 'Done',
            date_created = date.today()
        ),
        Card(
            title = 'ORM Queries',
            description = 'Stage 2 - Implement CRUD queries',
            status = 'In progress',
            date_created = date.today()
        ),
        Card(
            title = 'Marshmallow',
            description = 'Stage 3 - Implement JSONify of meodels',
            status = 'In progress',
            date_created = date.today()
        ),
    ]
    # adds the data then commits it to the database will now show in psql database
    db.session.add_all(cards)
    db.session.commit()

    print('Database seeded')

# selects all cards in a function and prints them out as a dictionary
@app.route('/cards')
def all_cards():
    # select * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)



@app.route('/')
def index():
    return '<h3>Hello, World!</h3>'


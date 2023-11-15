from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)

# Links the postgres DB and user to the flask application
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:spameggs123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)

# creates a model which represents a entity in the database/creates a table in postgres DB trello
class Card(db.Model):
    __tablename__ = 'cards' # sets the table name to follow convention
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
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
    card = Card(
        title = 'Start the project',
        description = 'Stage 1 - ERD Creation',
        date_created = date.today()
    )
    # adds the data then commits it to the database will now show in psql database
    db.session.add(card)
    db.session.commit()

    print('Database seeded')

@app.route('/')
def index():
    return '<h3>Hello, World!</h3>'

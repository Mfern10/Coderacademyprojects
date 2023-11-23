from flask import abort
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user import User
from setup import *
from models.card import Card, CardSchema
from blueprints.cli_bp import db_commands
from blueprints.users_bp import users_bp


def admin_required():
    # get users email from the JWT Subject
    user_email = get_jwt_identity()
    # Check database for that email address and retrieves it
    stmt = db.select(User).filter_by(email=user_email)
    # Gets instance of the user model
    user = db.session.scalar(stmt)
    # checks if the user is an admin if not returns error if yes continues
    if not (user and user.is_admin):
        abort(401)

@app.errorhandler(401)
def unauthorized(err):
    return {'error': 'You are not authorized to access this resource'}

# attach commands blueprint
app.register_blueprint(db_commands)

app.register_blueprint(users_bp)

@app.route('/cards')
@jwt_required()
def all_cards():
    admin_required()
    # select * from cards;
    stmt = db.select(Card) #.where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)

@app.route('/')
def index():
    return '<h3>Hello, World!</h3>'





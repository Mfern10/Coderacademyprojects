from flask_jwt_extended import get_jwt_identity
from setup import db
from os import abort
from models.user import User

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
from flask import Blueprint, request
from datetime import timedelta
from models.user import User, UserSchema
from setup import db, bcrypt
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token, jwt_required
from auth import admin_required

users_bp = Blueprint('users', __name__, url_prefix='/users')

# selects all comments in a function and prints them out as a dictionary
@users_bp.route('/register', methods = ['POST'])
def register():
    try:
        # Parse incoming POST body through the schema
        user_info = UserSchema(exclude=['id', 'is_admin']).load(request.json)
        # create a new user with the parsed data
        user = User(
            email=user_info['email'],
            password=bcrypt.generate_password_hash(user_info['password']).decode('utf8'),
            name=user_info.get('name', '')
        )
        
        # Add and commit the new user to the database
        db.session.add(user)
        db.session.commit()
        
        # Return the new user
        return UserSchema(exclude=['password']).dump(user), 201
    except IntegrityError:
        return {'error': 'Email address already in use'}, 409
    
# Create a login for users
@users_bp.route('/login', methods = ['POST'])
def login():
    # 1. parse incoming POST body through the schema
    user_info = UserSchema(exclude=['id', 'name', 'is_admin']).load(request.json)
    print(user_info)
    # 2. Select user with email that matches the on in the POST body
    # 3. Check password hash
    stmt = db.select(User).where(User.email == user_info['email'])
    user = db.session.scalar(stmt)
    if user and bcrypt.check_password_hash(user.password, user_info['password']):
        # 4. Create a JWT token
        token = create_access_token(identity=user.id, expires_delta=timedelta(hours=2))
        # 5. Return the token
        return {'token': token, 'user': UserSchema(exclude=['password', 'cards']).dump(user)}
    else:
        return {'error': 'Invalid email or password'}, 401
    
    # Get all users
@users_bp.route('/')
@jwt_required()
def all_users():
    admin_required()
    # select * from comments;
    stmt = db.select(User) #.where(db.or_(Comment.status != 'Done', Comment.id > 2)).order_by(Comment.title.desc())
    users = db.session.scalars(stmt).all()
    print(users[0].comments)
    return UserSchema(many=True, exclude=['password']).dump(users)
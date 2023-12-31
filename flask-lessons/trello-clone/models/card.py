from setup import db, ma
from datetime import datetime
from marshmallow import fields
from marshmallow.validate import OneOf, Regexp, Length, And

VALID_STATUSES = ( 'To Do', 'Done', "In Progress", 'Testing', 'Deployed', 'Cancelled')


# creates a model which represents a entity in the database/creates a table in postgres DB trello
class Card(db.Model):
    __tablename__ = 'cards' # sets the table name to follow convention

    id = db.Column(db.Integer, primary_key=True)
    
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text())
    status = db.Column(db.String(30), default='To Do')
    date_created = db.Column(db.Date(), default=datetime.now().strftime('%Y-%m-%d'))

    # Foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # SQLAlchemy relationship - nests an instance of another model
    user = db.relationship('User', back_populates='cards')
    comments = db.relationship('Comment', back_populates='card')

class CardSchema(ma.Schema):
    # Tell Marshmallow to nest a user schema instance when serializing
    user = fields.Nested('UserSchema', exclude=['password']) # Creates a nested field for user 
    comments = fields.Nested('CommentSchema', many=True, exclude=['card'])
    status = fields.String(validate=OneOf(VALID_STATUSES))
    # Title must contain only letters, numbers and spaces
    title = fields.String(required=True, validate=And(
            Regexp('^[0-9a-zA-Z ]+$', error='Title must contain only letters, numbers and spaces'),
            Length(min=3, error='Title must be at least 3 characters long')))
            

    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created', 'user', 'comments')
                        
from setup import db, ma
from datetime import datetime
from marshmallow import fields



# creates a model which represents a entity in the database/creates a table in postgres DB trello
class Comment(db.Model):
    __tablename__ = 'comments' # sets the table name to follow convention

    id = db.Column(db.Integer, primary_key=True)
    
    message = db.Column(db.Text(), nullable=False)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='comments')

    card_id = db.Column(db.Integer, db.ForeignKey('cards.id'), nullable=False)
    card = db.relationship('Card', back_populates='comments')

class CommentSchema(ma.Schema):
    # Tell Marshmallow to nest a user schema instance when serializing
    user = fields.Nested('UserSchema', only=['id', 'name']) # Creates a nested field for user 
    card = fields.Nested('CardSchema', only=['id', 'title'])

    class Meta:
        fields = ('id', 'message', 'user', 'card')
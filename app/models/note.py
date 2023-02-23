from .db import db, environment, SCHEMA, add_prefix_for_prod
from .note_tag import note_tags

class Note(db.Model):
    __tablename__ = 'notes'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    body = db.Column(db.String(10000), nullable=False)
    trash = db.Column(db.Boolean, default=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    notebook_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('notebooks.id')), nullable=False)

    user = db.relationship('User', back_populates='notes')
    notebook = db.relationship('Notebook', back_populates='notes')
    tags = db.relationship('Tag', secondary=note_tags, back_populates="notes")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'body': self.body,
            'trash': self.trash,
            'userId': self.user_id,
            'notebookId': self.notebook_id
        }

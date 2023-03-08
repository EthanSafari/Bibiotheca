import datetime
from .db import db, environment, SCHEMA, add_prefix_for_prod
from .note_tag import note_tags
class Tag(db.Model):
    __tablename__ = 'tags'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='tags')
    notes = db.relationship('Note', secondary=note_tags, back_populates="tags")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'userId': self.user_id,
            'notes': [note.to_dict() for note in self.notes],
        }

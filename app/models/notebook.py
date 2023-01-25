from .db import db, environment, SCHEMA, add_prefix_for_prod

class Notebook(db.Model):
    __tablename__ = 'notebooks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    trash = db.Column(db.Boolean, default=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='notebooks')
    notes = db.relationship('Note', back_populates='notebook')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'trash': self.trash,
            'userId': self.id
        }

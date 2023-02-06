# from .db import db, environment, SCHEMA, add_prefix_for_prod

# class Tag(db.Model):
#     __tablename__ = 'tags'

#     if environment == 'production':
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
#     note_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('notes.id')), nullable=False)

#     user = db.relationship('User', back_populates='notes')
#     note = db.relationship('Note', back_populates='tags')

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'userId': self.user_id,
#             'noteId': self.note_id
#         }

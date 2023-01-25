from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from app.models import Note
from wtforms.validators import DataRequired, Length


class NoteForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    body = StringField('Body', validators=[DataRequired(), Length(min= 1, max= 10000, message=None)])
    trash = BooleanField('Trash', default= False, validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
    notebook_id = IntegerField('Notebook ID', validators=[DataRequired()])

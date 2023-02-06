from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired


class TagForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
    note_id = IntegerField('Note ID', validators=[DataRequired()])

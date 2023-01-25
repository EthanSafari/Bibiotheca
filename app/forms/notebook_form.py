from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from app.models import Notebook
from wtforms.validators import DataRequired


class NotebookForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    trash = BooleanField('Trash', default= False)
    user_id = IntegerField('User ID', validators=[DataRequired()])

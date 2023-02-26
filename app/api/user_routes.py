from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Notebook, Note, Tag

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/notebooks')
@login_required
def get_notebooks_by_user_id(id):
    notebooks = Notebook.query.filter(Notebook.user_id == id).all()

    # notebook_list = list()

    # for notebook in notebooks:
    #     notebook_dict = notebook.to_dict()
    #     notebook_dict['notes'] = [note.to_dict() for note in notebook.notes]
    #     notebook_list.append(notebook_dict)

    # return { 'notebooks': notebook_list }

    return { 'notebooks' : [notebook.to_dict() for notebook in notebooks] }


@user_routes.route('/<int:id>/notes')
@login_required
def get_notes_by_user_id(id):
    notes = Note.query.filter(Note.user_id == id).all()
    return { 'notes' : [note.to_dict() for note in notes] }

@user_routes.route('/<int:id>/tags')
@login_required
def get_tags_by_user_id(id):
    tags = Tag.query.filter(Tag.user_id == id).all()
    return { 'tags' : [tag.to_dict() for tag in tags] }

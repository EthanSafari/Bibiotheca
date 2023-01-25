from flask import Blueprint, jsonify, session, request
from app.models import Note, db
from app.forms.note_form import NoteForm
from flask_login import login_required


note_routes = Blueprint('note', __name__)


@note_routes.route('/', methods=['POST'])
@login_required
def add_note_route():
    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_note = Note()
        form.populate_obj(new_note)

        db.session.add(new_note)
        db.session.commit()
        return new_note.to_dict()
    else:
        return form.errors


@note_routes.route('/<int:note_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def notebook_by_id(note_id):
    note = Note.query.get(note_id)

    if note:
        if request.method == 'GET':
            return note.to_dict()

        if request.method == 'PUT':
            form = NoteForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                note.name = form.data['name']
                note.body = form.data['body']
                note.trash = form.data['trash']
                db.session.commit()
                return note.to_dict()
            else:
                return form.errors

        if request.method == 'DELETE':
            db.session.delete(note)
            db.session.commit()
            return {'message': 'Successfully Deleted'}

    else:
        return { "error": "Note not found", "errorCode" : 404 }, 404

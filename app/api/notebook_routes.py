from flask import Blueprint, jsonify, session, request
from app.models import Notebook, db
from app.forms.notebook_form import NotebookForm
from flask_login import login_required

notebook_routes = Blueprint('notebook', __name__)

@notebook_routes.route('/', methods=['POST'])
@login_required
def add_notebook_route():
    form = NotebookForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_notebook = Notebook()
        form.populate_obj(new_notebook)

        db.session.add(new_notebook)
        db.session.commit()
        return new_notebook.to_dict()
    else:
        return form.errors



@notebook_routes.route('/<int:notebook_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def notebook_by_id(notebook_id):
    notebook = Notebook.query.get(notebook_id)

    if notebook:
        if request.method == 'GET':
            return notebook.to_dict()

        if request.method == 'PUT':
            form = NotebookForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                notebook.name = form.data['name']
                notebook.trash = form.data['trash']
                db.session.commit()
                return notebook.to_dict()
            else:
                return form.errors

        if request.method == 'DELETE':
            db.session.delete(notebook)
            db.session.commit()
            return {'message': 'Successfully Deleted'}

    else:
        return { "error": "Notebook not found", "errorCode" : 404 }, 404

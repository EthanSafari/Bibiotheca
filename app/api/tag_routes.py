from flask import Blueprint, request
from app.models import Tag, db
from app.forms.tag_form import TagForm
from flask_login import login_required


tag_routes = Blueprint('tag', __name__)


@tag_routes.route('/', methods=['POST'])
@login_required
def add_tag_route():
    form = TagForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_tag = Tag()
        form.populate_obj(new_tag)

        db.session.add(new_tag)
        db.session.commit()
        return new_tag.to_dict()
    else:
        return form.errors


@tag_routes.route('/<int:tag_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def tag_by_id(tag_id):
    tag = Tag.query.get(tag_id)

    if tag:
        if request.method == 'GET':
            return tag.to_dict()

        if request.method == 'PUT':
            form = TagForm()
            form['csrf_token'].data = request.cookies['csrf_token']
            if form.validate_on_submit():
                tag.name = form.data['name']
                db.session.commit()
                return tag.to_dict()
            else:
                return form.errors

        if request.method == 'DELETE':
            db.session.delete(tag)
            db.session.commit()
            return {'message': 'Successfully Deleted'}

    else:
        return { "error": "Note not found", "errorCode" : 404 }, 404

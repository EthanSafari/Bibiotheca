from flask import Blueprint, jsonify, session, request
from app.models import Notebook, db

notebook_routes = Blueprint('notebook', __name__)

@notebook_routes.route('/', methods=['GET', 'POST'])
def basic_notebook_routes():
    if request.method == 'GET':
        

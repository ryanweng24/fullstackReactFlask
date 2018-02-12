from server import app
from flask import render_template

@app.route('/')
def index():
	home = {'title': 'Home', 'username': 'Miguel'}
	return json.dumps(home)


@app.route('/hello')
def hello():
	return 'Hello, World!'
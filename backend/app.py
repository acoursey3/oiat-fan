from flask import Flask, jsonify, request, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import io

app = Flask(__name__)
CORS(app)
password = os.getenv("MYSQL_ROOT_PASSWORD")
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://root:{password}@mysql-db/datababe'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(120), unique = True, nullable = True)
    
    def __repr__(self):
        return (f'<User {self.username}>')

class Egg(db.Model):
    __tablename__ = 'eggs'
    name = db.Column(db.String(16), primary_key=True)
    image = db.Column(db.LargeBinary, nullable=False)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()


@app.route('/api/add_user', methods = ['POST'])
def add_user():
    username = request.json['username']
    email = request.json['email']
    
    new_user = User(username = username, email = email)
    
    db.session.add(new_user)
    db.session.commit()
    
    return (jsonify({'message': 'User added successfully'}), 201)

@app.route('/api/users', methods = ['GET'])
def get_users():
    users = User.query.all()
    return (jsonify([{'username': user.username, 'email': user.email} for user in users]))

@app.route('/api/get_egg_image/<name>')
def get_egg_image(name):
    egg = Egg.query.filter_by(name = name).first()
    if egg and egg.image:
        return send_file(
            io.BytesIO(egg.image),
            mimetype='image/png'  # Adjust the mimetype according to your image format
        )
    else:
        return 'Image not found', 404


@app.route('/api/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'GET':
        return jsonify(message='Hello from the backend!')

    if request.method == 'POST':
        data = request.get_json()
        name = data.get('name', 'Guest')
        return jsonify(message=f'Hello, {name}!')

if __name__ == '__main__':
    db.create_all() # Create tables if they don't exist
    app.run(host='0.0.0.0', port=5000)

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

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

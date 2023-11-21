from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'GET':
        return jsonify(message='Hello from the backend!')

    if request.method == 'POST':
        data = request.get_json()
        name = data.get('name', 'Guest')
        return jsonify(message=f'Hello, {name}!')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

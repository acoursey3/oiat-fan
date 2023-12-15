import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  async function add_user() {
    const user_data = {'username': null, 'email': null};

    user_data['username'] = document.getElementById('username').value;
    user_data['email'] = document.getElementById('email').value;

    try {
      const response = await fetch('http://localhost:5000/api/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user_data),
      });

      const data = await response.json();
      setBackendMessage("User added successfully");
    } catch (error) {
      setBackendMessage("Ya boi done goofed");
    }
  }

  return (
    <div>
      <h1>Frontend</h1>
      <input type="text" id="username" />
      <input type="text" id="email" />
      <button onClick={add_user}>Add User</button>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;

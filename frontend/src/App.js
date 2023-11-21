import './App.css';
import { useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'nico' }),
      });
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Frontend</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={postData}>Post Data</button>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;

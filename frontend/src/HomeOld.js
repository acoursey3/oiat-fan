import './Home.css';
import { useState, useEffect } from 'react';

function Home() {
  const [backendMessage, setBackendMessage] = useState('');
  const website_title = "One in a Website";
  const glyphcard_button_title = "Glyphcards";

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
		<div id='Header'>
			<div id='Title-Background'></div>
			<h1 id='Title'> { website_title } </h1>
			<button className='Header-Button' id='Glyphcard-Button'> { glyphcard_button_title } </button>
		</div>
		
	</div>
  );
//   return (
//     <div>
//       <h1>Frontend</h1>
//       <input type="text" id="username" />
//       <input type="text" id="email" />
//       <button onClick={add_user}>Add User</button>
//       <p>{backendMessage}</p>
//     </div>
//   );
}

export default Home;

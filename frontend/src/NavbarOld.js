import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const website_title = "One in a Website";
  const glyphcard_button_title = "Glyphcards";

  return (
	<div className='Navbar'>
		<div id='Title-Background'></div>
		<h1 id='Title'> { website_title } </h1>
		<button className='Header-Button' id='Glyphcard-Button'> { glyphcard_button_title } </button>
	</div>
  );
}

export default Navbar;

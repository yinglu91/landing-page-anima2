import React from 'react';
import { Link } from 'react-router-dom';

// rafce
const Navbar = () => {
  return (
    <ul>
      <li>
        {/* Endpoint to route to LandingPage component */}
        <Link to='/landing-page'>Landing Page</Link>
      </li>
      <li>
        {/* Endpoint to route to ToDoListDesign component */}
        <Link to='/to-do-list-design'>To Do</Link>
      </li>
    </ul>
  );
};

export default Navbar;

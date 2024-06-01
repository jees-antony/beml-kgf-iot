
import React from 'react';

const Navbar = ({ toggleNav }) => {
  return (
    <div>
      <span style={{ fontSize: '30px', cursor: 'pointer', margin:'5px'}} onClick={toggleNav}>&#9776; Dashboard</span>
    </div>
  );
};

export default Navbar;


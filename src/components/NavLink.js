import React from 'react';

const styles = {
  padding: 8,
  margin: 8,
  color: '#6c63ff',
};


function NavLink ({ to, label }) {
  return(
    <a href={to} style={ styles }> {label} </a>
  );
}

export default NavLink;
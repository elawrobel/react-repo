import React from 'react';

const styles = {
  padding: 8,
  margin: 8,
};


function NavLink ({ to, label }) {
  return(
    <a href={to} style={ styles }> {label} </a>
  );
}

export default NavLink;
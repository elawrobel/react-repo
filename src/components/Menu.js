import React from 'react';

const styles = {
  padding: 13,
};


function Menu ( { children } ) {
  return(
    <nav style={styles} className="menu">
      { children }
    </nav>
  );
}

export default Menu;
import React from 'react';

import {
  Link
} from 'react-router-dom';

import Logo from './Logo';
import Menu from './Menu';
// import NavLink from './NavLink';

const styles = {
  backgroundColor: 'rgb(210 218 226 / 48%)',
  padding: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  link: {
    padding: 10,
    color: '#000',
  },
};


function Header () {
  return(
    <div style={styles} className="header">
      <Logo />
      <Menu>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/articles">Artykuły</Link>
        <Link style={styles.link} to="/contact">Kontakt</Link>
      </Menu>
    </div>
  );
}

export default Header;
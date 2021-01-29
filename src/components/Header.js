import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import NavLink from './NavLink';

import {
  Link
} from 'react-router-dom';

const styles = {
  backgroundColor: 'rgb(210 218 226 / 48%)',
  padding: 8,
  display: 'flex',
  justifyContent: 'space-between',
  aligneItems: 'center',
};


function Header () {
  return(
    <div style={styles} className="header">
      <Logo />
      <Menu>
        <NavLink to="/contact" label="Link 1" />
        <NavLink to="/" label="Link 2" />
        <NavLink to="/" label="Link 3" />
      </Menu>
    </div>
  );
}

export default Header;
import React from 'react';

import Uuid from './Uuid';


const styles = {
  border: '1px solid #808e9b',
  backgroundColor: '#e6e6e6',
  padding: 8,
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  p:{
    color: '#1e272e',
    fontSize: '10px',
    fontWeight: 'bold',
    margin: 0,
  },
};

function Footer () {
  return(
    <footer style={styles}>
      <p style={styles.p}>Copy: Ela Wróbel 2020/2021</p>
      <Uuid />
    </footer>
  );
}

export default Footer;
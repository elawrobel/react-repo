import React from 'react';

import logoImg from './assets/logo.png';

const styles = {
  height: 50,
};


function Logo () {
  return(
    <div className="Logo">
      <img src={logoImg} alt="logo" style={styles} />
    </div>
  );
}

export default Logo;
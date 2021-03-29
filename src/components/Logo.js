import React from 'react';

import logoImg from './assets/images/logo_2.svg';

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
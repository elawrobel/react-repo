import React, { Fragment } from 'react';

import heroImg from '../components/assets/images/hero.svg';
import Features from '../components/Features';
import About from '../components/About';

function Home () {

  const styles = {
    width: '100%',
  };

  return(
    <Fragment>
      <header>	
        <div className="container">
          <div className="row">
            <div className="hero_full">
              <img src={heroImg} alt="hero" style={styles} />
            </div>
          </div>
        </div>
      </header>
      <Features />
      <About />
    </Fragment>
  );
}

export default Home;
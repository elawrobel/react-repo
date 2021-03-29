import React from 'react';

import aboutImgFirst from '../components/assets/images/aboutImgFirst.svg';
import aboutImgSec from '../components/assets/images/aboutImgSec.svg';
import aboutImgThird from '../components/assets/images/aboutImgThird.svg';

const styles = {
  marginTop: '24px',
  padding: '24px',

  card:{
    display: 'flex',
    align: 'center',
    justifyContent: 'center',
  },

  img:{
    width: '200px',
  },
};

function About () {
  return(
    <section className="section" style={styles} >
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={styles.card}>
            <img src={aboutImgFirst} alt="lorem ipsum" style={styles.img} />
          </div>
          <div className="col-md-4" style={styles.card}>
            <img src={aboutImgSec} alt="loorem ipsum" style={styles.img} />
          </div>
          <div className="col-md-4" style={styles.card}>
            <img src={aboutImgThird} alt="lorem ipsum" style={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
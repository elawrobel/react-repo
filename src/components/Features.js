import React from 'react';

const styles = {
  marginTop: '24px',
  backgroundColor: 'rgb(230 230 230 / 52%)',


  intro:{
    backgroundColor: '#ffffff',
    padding: '24px',
    margin: '24px',
  },

  p:{
    color: '#1e272e',
    fontSize: '16px',
    margin: 0,
  },
};

function Features () {
  return(
    <section className="section_features" style={ styles }>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={ styles.intro }>
              <h2>Loorem ipsum dolor sit amet!</h2>
              <p style={ styles.p }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
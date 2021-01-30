import React from 'react';

function Home () {

  const styles = {
    border: '1px solid #808e9b',
    backgroundColor: 'rgb(210 218 226 / 48%)',
    padding: 8,
    backgroundImage: 'url(https://picsum.photos/1000/450?grayscale)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:' 50%',
    backgroundSize: 'cover',
    minHeight: '450px',
    container:{
      padding: '160px 0 160px',
    },
    content:{
      background: 'rgb(255 255 255 / 55%)',
      padding: '7px 0',
      lineHeight: '1.4',
    }
  };

  return(
    <header>	
      <div class="hero_full" style={styles}>
        <div class="hero_full__inner" style={styles.container}>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8 offset_hero--md" style={styles.content}>
                <h1 class="hero_full__title" >Title</h1>
                <div class="hero_full__text">Lorem ipsum dolor  psum dolor psum dolor psum dolor psum dolor psum dolor psum dolor psum dolor </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
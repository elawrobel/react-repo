import React, { Fragment, useState } from 'react';

import './App.css';

// CSS in JS
const red = '#f53b57';

const styles = {
  backgroundColor: '#808e9b',
  border: '1px solid black',
  padding: 8,
  color: '#d2dae2',
  para: {
    color: red
  }
}

// class News extends React.Component{

//   state = {
//     date: new Date(),
//     score: 5
//   };

//   // change state score - asynchronic 
//   componentDidMount(){
//     let loading = true;
//     this.setState({ score: 7 }, () => {
//       loading = false;
//     });
//   }

//   render() {
//     const { header, intro } = this.props;
//     const { score } = this.state;

//     return(
//       <div className="news">
//       <h2>{ header }</h2>
//       <p style={styles}>{ intro }</p>
//       <p style={styles.para}>{ score }</p>
//     </div>
//     );
//   }
// }

function News( { header, intro } ) {
  const [ score, setScore ] = useState(5);

  return(
    <div className="news">
      <h2>{ header }</h2>
      <p style={styles}>{ intro }</p>
      <p style={styles.para}>{ score }</p>
    </div>
  );
}

const data = [
  {
    header: 'Nagłówek 1', intro: 'Intro 1',
  }, {
    header: 'Nagłówek 2', intro: 'Intro 2',
  }, {
    header: 'Nagłówek 3', intro: 'Intro 3',
  }
];


function App() {
  return(
    <Fragment>
      { data.map( (elem, index) => (
        <News key={`news-${index}`} header={elem.header} intro={elem.intro} />
      )) }
    </Fragment>
  );
}

export default App;

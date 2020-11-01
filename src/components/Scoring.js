import React from 'react' ;

const styles = {
  color: '#1e272e',
  fontSize: 10,
  fontWeight: 'bold',
};

const Scoring = ({ score }) => <p style={ styles }>Ocena: { score } </p>;

export default Scoring;
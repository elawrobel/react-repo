import React from 'react';

import { v4 as uuidv4 } from 'uuid';

function Uuid() {
  const displayUuid = () => uuidv4();

  const styles = {
    border: '1px solid #808e9b',
    backgroundColor: 'rgb(210 218 226 / 48%)',
    padding: 8,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    p:{
      color: '#1e272e',
      fontSize: '10px',
      fontWeight: 'bold',
    },
  };

  return (
    <footer style={styles} className="Uuid">
      <p style={styles.p}>Your Version 4 UUID: {displayUuid()}</p>
    </footer>
  );
}
export default Uuid;
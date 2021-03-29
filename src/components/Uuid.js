import React from 'react';

import { v4 as uuidv4 } from 'uuid';

function Uuid() {
  const displayUuid = () => uuidv4();

  const styles = {
    border: '1px solid #808e9b',
    backgroundColor: '#e6e6e6',
    padding: 8,
    margin: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    p:{
      color: '#1e272e',
      fontSize: '10px',
      margin: 0,
    },
  };

  return (
    <div style={styles} className="Uuid">
      <p style={styles.p}>Twoja wersja 4 UUID: {displayUuid()}</p>
    </div>
  );
}
export default Uuid;
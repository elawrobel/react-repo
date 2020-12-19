import React, { useEffect, useState } from 'react';


const styles = {
  border: '1px solid #808e9b',
  backgroundColor: 'rgb(210 218 226 / 48%)',
  padding: 8,
  textAlign: 'right',
  fontSize: '10px',
};


const Timer = () => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <div style={styles}>Jesteś na tej stronie juz {count} sekund</div>;
};

export default Timer;
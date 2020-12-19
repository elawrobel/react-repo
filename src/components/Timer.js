import React, { useEffect, useState } from 'react';

const styles = {
  border: '1px solid #808e9b',
  backgroundColor: 'rgb(210 218 226 / 48%)',
  padding: 8,
  textAlign: 'right',
  fontSize: '10px',
};

// Function component
const Timer = () => {
  const [ count, setCount ] = useState(0);

  // change second into minutes/hours
  function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
  
    const hDisplay = h > 0 ? h + (h === 1 ? ' godzinę, ' : ' godzin, ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' minutę, ' : ' minut, ') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? ' sekundę ' : ' sekund') : '';
    return hDisplay + mDisplay + sDisplay; 
  }

  useEffect(() => {
    window.setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <div style={styles}>Jesteś na tej stronie juz {secondsToHms(count)}</div>;
};

export default Timer;
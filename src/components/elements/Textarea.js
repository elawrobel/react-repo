import React from 'react';

import palette from '../assets/palette';

function Textarea(props) {
  const { color, bgColor, borderSize, borderRadius, borderColor } = props;

  const styles = {
    padding: '10px 20px',
    border: `${borderSize}px solid ${palette(borderColor)}`,
    borderRadius: `${borderRadius}px`,
    color: palette(color),
    outline: 0,
    backgroundColor: palette(bgColor),
    display: 'flex',
    width: '70%',
    container: {
      padding: 10
    },
    label:{
      color: '#1E272E',
      fontSize: '12px',
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Text:</label>
      <textarea style={styles} />
    </div>
  );
}

Textarea.defaultProps = {
  color: 'clouds',
  bgColor: 'alizarin',
  borderSize: 1,
  borderRadius: 5,
  borderColor: 'silver'
};

export default Textarea;

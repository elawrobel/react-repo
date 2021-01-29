import React from 'react';

import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Textarea from '../components/elements/Textarea';


function Contact () {

  const styles = {
    border: '1px solid #808e9b',
    backgroundColor: 'rgb(210 218 226 / 48%)',
    padding: 8,
  };

  return(
    <div style={styles}>
      <h4>Contact !</h4>
      <form >
        <Input
          color="concrete"
          bgColor="clouds"
          borderSize={1}
          borderRadius={4}
          borderColor="darkGrey"
        />
        <Textarea
          color="midnightBlue"
          bgColor="clouds"
          borderSize={1}
          borderRadius={4}
          borderColor="darkGrey"
        /> 
      </form>
      <Button color="black" bgColor="transparent" icon="cat">
        Send it to me!
      </Button>
    </div>
  );
}

export default Contact;
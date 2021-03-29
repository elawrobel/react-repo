import React, { Fragment } from 'react';

import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Textarea from '../components/elements/Textarea';

import Employees from '../components/CardPeople/Employees';
// import data from '../components/CardPeople/data';

import employeeImg from '../components/assets/images/employee.svg';

const data = [
  { 
    id: 1, 
    name: 'Katarzyna', 
    imageURL: employeeImg,
    info: 'CEO',
    contact: 'katarzyna@nazwafirmy.pl'
  },
  { 
    id: 2, 
    name: 'Joanna', 
    imageURL: employeeImg,
    dob: 'CTO',
    contact: 'joanna@nazwafirmy.pl'
  },
  { 
    id: 3, 
    name: 'Maria', 
    imageURL: employeeImg,
    dob: 'IT',
    contact: 'maria@nazwafirmy.pl'
  }
];

function Contact () {

  const styles = {
    border: '1px solid #808e9b',
    backgroundColor: 'rgb(210 218 226 / 48%)',
    padding: 8,
    marginTop: '16px',
  };

  return(
    <Fragment>
      <div style={styles}>
        <h4>Nasz zespół</h4>
        <Employees data={data} />
      </div>
      <div style={styles}>
        <h4>Skontaktuj się z nam!</h4>
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
    </Fragment>
  );
}

export default Contact;
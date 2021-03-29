import React from 'react';

import { Card } from '../components/Card';
import Title from '../components/Title';

const data = [
  { 
    id: 1, 
    name: 'Katarzyna', 
    image: 'https://picsum.photos/300/200',
    position: 'CEO',
    contact: 'katarzyna@nazwafirmy.pl'
  },
  { 
    id: 2, 
    name: 'Joanna', 
    image: 'https://picsum.photos/300/200',
    position: 'CTO',
    contact: 'joanna@nazwafirmy.pl'
  },
  { 
    id: 3, 
    name: 'Jan', 
    image: 'https://picsum.photos/300/200',
    position: 'IT',
    contact: 'jan@nazwafirmy.pl'
  }
];

const styles = {
  padding: 16,
};

function Employee () {
  return(
    <div>
      <Title headline='O nas' />
      <div className="row" style={styles}>
        { data.map( ( elem ) => (
          <Card
            key={`employee-${ elem.id }`}
            headline={elem.name}
            image={elem.image}
            excerpt={elem.position}
            showMore={elem.contact}
          />
        )) }
      </div>
    </div>
  );
}

export default Employee;


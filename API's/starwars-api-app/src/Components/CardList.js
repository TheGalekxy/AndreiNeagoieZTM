import React from 'react';
import { people } from '../people'; // redundant because we destructure it below in the "const Cardlist"
import Card from './Card';

const CardList = ({ people }) => {
    return (
        <div>
            {
                people.map((user, i) => { // second part of a map is always the index (i)
                    return ( 
                        <Card 
                        key={people[i].url} 
                        species={people[i].species} 
                        name={people[i].name} 
                        gender={people[i].gender} 
                        weight={people[i].mass}
                        />
                        );
                    })
}
            
        </div>
    );
    
}

export default CardList;
import React from 'react';

const Card = ({name, gender, weight, species}) => {
    
    return (
        <div className='tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${species}?200x200`} alt='robots'/>
            <div>
                <h2> {name} </h2>
                <p> Gender: {gender} </p>
                <p> Weight: {weight} </p>
            </div>
        </div>
    );
}

export default Card
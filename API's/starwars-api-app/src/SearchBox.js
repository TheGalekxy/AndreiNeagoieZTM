import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-light-gray w-20 tc"
            type="search" 
            placeholder="Search Star Wars Characters"
            onChange={searchChange}
         />
        </div>
        
    );
}


export default SearchBox
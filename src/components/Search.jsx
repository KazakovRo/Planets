import React from 'react'

const Search = ( { handleSearch } ) => {

    console.log(handleSearch)
    
    return (
        <input 
            type="text"
            className="search-planet" 
            placeholder="Search planet by name or atmosphere ..."
            onChange={ ({target: {value}}) => handleSearch(value) }
        >
        </input>
    )
}

export default Search
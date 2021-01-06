'use strict'

import React from 'react'

const Search = ({handleSearch, isDisabled}) => (
    <div className="search">
     <input 
     type='search' 
     placeholder='Digite o nome do usuario no GitHub'
     disabled={isDisabled}
     onKeyUp={handleSearch}
     />
    </div>
)

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search

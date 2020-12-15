'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = ({handleSearch, isDisabled}) => (
    <div className='search'>
     <input 
     type='search' 
     placeholder='Digite o nome do usuario no GitHub'
     disabled={isDisabled}
     onKeyUp={handleSearch}
     />
    </div>
)

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired
}

export default Search

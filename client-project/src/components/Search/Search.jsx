import React from 'react'
import "./Search.scss"

const Search = ({ handleSearch }) => {
  return (
    <div>
      <form class="search">
        <input type="text" placeholder="Search Our Products" onInput={handleSearch} />
      </form>
    </div>
  )
}

export default Search;
import React from 'react'
import "./Search.scss"

const Search = ({ handleSearch }) => {
  return (
    <div class="container d-flex flex-row-reverse">
      <form className="search">
        <input type="text" placeholder="Search Our Products" onInput={handleSearch} />
      </form>
    </div>
  )
}

export default Search;
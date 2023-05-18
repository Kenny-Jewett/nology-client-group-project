import React from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';

const Nav = ({ handleSearch }) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container d-flex flex-row">

          <div class="" >
            <Hamburger />
          </div>
          <div class="" >
            <Search handleSearch={handleSearch} />
          </div>

        </div>
      </nav>




    </>
  )
}

export default Nav;
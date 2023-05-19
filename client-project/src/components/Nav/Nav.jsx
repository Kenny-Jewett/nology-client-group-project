import React from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import "boxicons";


const Nav = ({ handleSearch }) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div className="container table-row">
          <div class="col-lg">
            <Hamburger />
          </div>
          <div class="col-lg">
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="col-lg">
            <Search handleSearch={handleSearch} />
          </div>
          <div class="col-lg">
            <Cart />
          </div>
        </div>
      </nav >
    </>
  )
}

export default Nav;
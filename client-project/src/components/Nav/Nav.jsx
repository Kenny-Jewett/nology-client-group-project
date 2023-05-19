import React from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import "boxicons";


const Nav = ({ handleSearch }) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div className="container">
          <div class="row inline-flex">
            <Hamburger />
          </div>
          <div class="inline-flex">
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="row justify-content-end">
            <Search handleSearch={handleSearch} />
          </div>
          <div class="row justify-content-end">
            <Cart />
          </div>
        </div>
      </nav >
    </>
  )
}

export default Nav;
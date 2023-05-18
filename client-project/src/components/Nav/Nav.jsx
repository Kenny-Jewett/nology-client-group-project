import React from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';
import "boxicons";


const Nav = ({ handleSearch }) => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div className="container ">
          <div class="row justify-content-start">
            <Hamburger />
          </div>
          <div class="col-7">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
          <div class="row justify-content-around">
            <Search handleSearch={handleSearch} />
          </div>
          <div class="row justify-content-around">
            <a href=""><box-icon name="cart-alt"></box-icon></a>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Nav;
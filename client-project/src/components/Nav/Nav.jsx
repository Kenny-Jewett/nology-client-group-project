import React, { useState } from 'react'
import "./Nav.scss"
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import CactusElectronics from "./images/CactusElectronics.png";
import "boxicons";



const Nav = ({ handleSearch }) => {

  return (
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-white">
        <div className="d-inline-flex p-2 flex-row">
          <div class="d-inline-flex p-2 align-self-start">
            <Link to='/'><img src={CactusElectronics} alt="Logo"></img></Link>
            <p class="name h5 d-inline-flex p-2 align-self-start">Cactus Electronics</p>
          </div>
          <div class="p-2 text-start">
            <Hamburger />
          </div>

        </div>
        <div className="d-inline-flex p-2 flex-row">
          <div class="d-inline-flex p-2 flex-row align-self-end">
            <Search handleSearch={handleSearch} />
          </div>

          <div class="d-inline-flex p-2 flex-row align-self-end">
            <Link to='/cart'><box-icon name="cart-alt"></box-icon></Link>

          </div>
        </div>
      </nav >
    </div>

    // const Nav = () => {
    //   const[open,setOpen] = useState(false)
    //   const showModal = () =>{
    //     setOpen(true);
    //   }

    //   const closeModal = () =>{
    //     setOpen(false);
    //   }
    //   return (
    //     <div>
    //       <button className='btn btn-secondary' onClick={showModal}>Cart</button>
    //       <Cart open={open} closeModal={closeModal}/>
    //     </div>
  )
}

export default Nav;
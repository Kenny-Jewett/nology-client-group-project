import React,{useState} from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import "boxicons";
import {Link} from 'react-router-dom';


const Nav = ({ handleSearch }) => {
  const[open,setOpen] = useState(false)
    const showModal = () =>{
       setOpen(true);
     }

     const closeModal = () =>{
        setOpen(false);
       }
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
          <div class="row justify-content-around">
            {/* <a href=""><box-icon name="cart-alt"></box-icon></a> */}
            <Link  to = '/cart'onClick={showModal}>Cart</Link>
           
          </div>
        </div>
      </nav >
    </>

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
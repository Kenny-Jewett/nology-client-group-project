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
          <div class="form-inline my-2 my-lg-0">
            <Search handleSearch={handleSearch} />
          </div>
          <div class="row justify-content-around">
            <a href=""><box-icon name="cart-alt"></box-icon></a>
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
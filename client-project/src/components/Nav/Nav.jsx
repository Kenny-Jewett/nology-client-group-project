import React, { useState } from 'react'
import Cart from '../Cart/Cart'
const Nav = () => {
  const[open,setOpen] = useState(false)
  const showModal = () =>{
    setOpen(true);
  }

  const closeModal = () =>{
    setOpen(false);
  }
  return (
    <div>
      <button className='btn btn-secondary' onClick={showModal}>Cart</button>
      <Cart open={open} closeModal={closeModal}/>
    </div>
  )
}

export default Nav
import React from 'react'
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = ({open,closeModal}) => {
  const cartList = useSelector(store => store.cart.items);
  const closeButton = () =>{
    closeModal();
  }

  return (
    <div>
    <button className='btn btn-primary float-right mr-2' data-toggle = "modal"
    data-target='#cartModal'>Cart</button>
    
    <div className={open ? 'md-show' : 'modal'}>
    
      <div className='modal-dialog modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header mx-auto'>
               <h5 className='modal-title fw-bold'> Your cart </h5>
               <button className='close btn btn-light' data-dismiss="modal" onClick={closeButton}> &times;</button>
          </div>
          <div className='d-flex p-2 border'>
          
             <p className='col-sm-10 fw-bold'>Product</p>
             <p className='col-sm-2 fw-bold'>Price </p>
             <hr></hr>
          </div>
          {cartList.map((obj)=>(
            <CartItem productName= {obj.productName} imgUrl = {obj.imgUrl} price = {obj.price} key={obj.productId } itemQuantity={obj.itemQuantity}/>
            
          ))}
          <div className='d-flex p-2border'>
          
          <p className='col-sm-9'>Subtotal</p>
          <p className='col-sm-3'>Price </p>
          <hr></hr>
       </div>
        </div>
      </div>

    </div>
    </div>
  
  )
}

export default Cart
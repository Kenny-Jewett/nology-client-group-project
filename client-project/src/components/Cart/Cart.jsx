import React from 'react'
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = ({ open, closeModal }) => {
  const cartList = useSelector(store => store.cart.items);
  const closeButton = () => {
    closeModal();
  }

  return (
 <div>
    <h3 className='text-center m-3'>Your cart</h3>
    <div className='d-flex p-2'>
        <p className='col-sm-7 fw-bold'>Product</p>
        <p className='col-sm-3 fw-bold'>Price </p>
    </div>
        
        <div className='d-flex flex-column'>
        {cartList.map((obj) => (
              <CartItem productName={obj.productName}
                imgUrl={obj.imgUrl}
                price={obj.price}
                key={obj.productId}
                itemQuantity={obj.itemQuantity}
                productId={obj.productId} />
           ))}
          </div>
           <div className='d-flex p-2 border'>
              <p className='col-sm-10'>Subtotal</p>
              <p className='col-sm-2'>Price </p>

            </div>
            <button className='btn btn-secondary btn-sm'>Checkout</button>
          </div>
        
    
  
      

          
           
      

      
  

  )
}

export default Cart
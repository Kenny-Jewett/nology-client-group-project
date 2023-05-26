import React, { useEffect } from 'react'
import CartItem from '../CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubTotal } from '../../utils/cartSlice';
import './Cart.css';
import { loadCartItems,updateLoadingStatus } from '../../utils/cartSlice';
import { Link } from 'react-router-dom';


const Cart = () => {
  const cartList = useSelector(store => store.cart.items);
  const subTotal = useSelector(store => store.cart.subTotal);
  const loading = useSelector(store => store.cart.loading);
  //console.log('Subtotal inside cart component',subTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Entered useEffect');
    loadCart();
  }, [subTotal]);

  useEffect(() => {
    calculateSubTotal();
  }, [loading])

  const loadCart = async () => {
    try {
      let response = await fetch("http://localhost:3070/api/products/cart");
      let result = await response.json();
      console.log(result);
      dispatch(loadCartItems(result));
      dispatch(updateLoadingStatus());
    } catch (error) {
      console.log(error);
    }
  }

  const calculateSubTotal = () => {
    let tempSubTotal = 0;
    cartList.map((item) => {
      //console.log("Before", tempSubTotal);
      //console.log(item.cartQuantity, item.cartPrice);
      tempSubTotal = tempSubTotal + (parseInt(item.cartQuantity) * parseFloat(item.cartPrice));
      //console.log("After", tempSubTotal);
    })
    console.log("After map method", tempSubTotal);
    dispatch(updateSubTotal(tempSubTotal));
  }

  return (
    <div>
      <h3 className='text-center m-3'>Your cart</h3>
      <div className='mx-auto'>
        <div className='d-flex p-2'>
          <p className='col-sm-7 fw-bold'>Product</p>
          <p className='col-sm-3 fw-bold'>Price </p>
        </div>

        <div className='d-flex flex-column'>
          {cartList.map((obj) => (
            <CartItem productName={obj.cartName}
              imgUrl={obj.cartImage}
              price={obj.cartPrice}
              key={obj.productId}
              cartQuantity={obj.cartQuantity}
              productId={obj.productId}
              id={obj.id}
            />
          ))}
        </div>
        <div className='d-flex p-2 border'>
          <p className='col-sm-7'>SubTotal</p>
          <p className='col-sm-3'>{subTotal.toFixed(2)} </p>

        </div>
        <div className='text-center mb-5 mt-5'><Link to={cartList.length==0 ? '#':'/checkout'} > <button className='btn btn-secondary btn-lg text-center' disabled>Proceed to Checkout</button> </Link> </div>
      </div>
    </div>
  )
}

export default Cart
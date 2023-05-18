import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../utils/cartSlice';
import { useSelector } from 'react-redux';

import './CartItem.css'
import inventorySlice from '../../utils/inventorySlice';

const CartItem = ({productName,imgUrl,price,itemQuantity,productId}) => {

  let [counter,setCounter] = useState(1);
  const inventoryList = useSelector(store => store.inventory.items);

  const dispatch = useDispatch();
  const deleteOrder = (productId) =>{
    console.log(productId);
    dispatch(removeOrder(productId));
  }

  const incrementBtn = () =>{
    counter = counter + 1;
    setCounter(counter);
  }

  const decrementBtn = () =>{
    if(counter == 1)
    return;
    else
    { counter = counter-1;
    setCounter(counter)
  }}
  return (
    // Outer flexbox
    <div className='d-flex border  p-3'>
    <div className='col-sm-4'><img className = "img-thumbnail" src={imgUrl} alt={productName}></img></div>
    {/* Product name-incr/decre buttons/trash => flex-column */}
    <div className=' col-sm-6 d-flex flex-column text-center'>
    <div className=''><h6>{productName}</h6></div>
    {/* incre/decre button row flex */}
    <div className='d-flex justify-content-center'><button className='btn btn-light' onClick={decrementBtn}>-</button> <p className="text-center inline-block">{counter}</p> <button onClick = {()=>incrementBtn(productId)} className='btn btn-light'>+</button></div>
    <div className='mt-2 cursor-pointer'><i onClick = {()=>deleteOrder(productId)} className="fa-solid fa-trash-can fa-lg"></i></div>
    </div>

    <div className='col-sm-2'><p>${price * counter.toFixed(2)}</p></div>
</div>
  )
}

export default CartItem;
import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeOrder, updateSubTotal,updateCart } from '../../utils/cartSlice';
import { useSelector} from 'react-redux';
import './CartItem.css'
import inventorySlice from '../../utils/inventorySlice';

const CartItem = ({productName,imgUrl,price,cartQuantity,productId}) => {
  
  let [counter,setCounter] = useState(cartQuantity);

  const inventoryList = useSelector(store => store.inventory.items);
  const cartSubTotal = useSelector(store => store.cart.subTotal);
  

  const dispatch = useDispatch();
  const deleteOrder = (productId) =>{
    
     saveDeleteToDB(productId);
  }

  const saveDeleteToDB = async(productId) =>{

    try {
      const response =  await fetch(`http://localhost:3070/api/products/cart/${productId}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body:null
      })
      console.log(response);
      dispatch(removeOrder(productId));
    } catch (error) {
      console.log(error);
    }
   
  }

  const incrementBtn = (price,id) =>{
    let temp = counter + 1;
    //console.log('temp inside incrementBtn', temp);
    setCounter(temp);
    let tempSubTotal = parseInt(cartSubTotal + parseInt(price));
    dispatch(updateSubTotal(tempSubTotal));
    updateToDB(id,temp);
  }
 const updateToDB = async(id,counter) =>{
  console.log('Entered updateDB');
    try {
        const response =  await fetch(`http://localhost:3070/api/products/cart/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({cartQuantity:counter}) 
      })
      console.log(response);
      dispatch(updateCart({id,counter}))
    } catch (error) {
      console.log(error)
    }
 }


  const decrementBtn = (price,id) =>{
    console.log(price);
    console.log(cartSubTotal);
    if(counter == 1)
    return;
    else
    { let temp = counter-1;
    setCounter(temp);
    dispatch(updateSubTotal(cartSubTotal - parseInt(price)));
    updateToDB(id,temp);
  }}

  
  return (
    // Outer flexbox
    <div className='d-flex'>
    <div className='col-sm-3'><img className = "img-thumbnail" src={imgUrl} alt={productName}></img></div>
    {/* Product name-incr/decre buttons/trash => flex-column */}
    <div className=' col-sm-4 d-flex flex-column text-center'>
    <div className=''><h6>{productName}</h6></div>
    {/* incre/decre button row flex */}
    <div className='d-flex justify-content-center'><button className='btn btn-light' onClick={()=>decrementBtn(price,productId)}>-</button> <p className="text-center inline-block">{counter}</p> <button onClick = {()=>incrementBtn(price,productId)} className='btn btn-light'>+</button></div>

    <div className='mt-2 cursor-pointer'><i onClick = {()=>deleteOrder(productId)} className="fa-solid fa-trash-can fa-lg"></i></div>
    </div>

    <div className='col-sm-3'><p>${parseInt(price * counter).toFixed(2)}</p></div>
</div>
  )
}

export default CartItem;
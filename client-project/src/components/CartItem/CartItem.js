import React from 'react'

const CartItem = ({productName,imgUrl,price,itemQuantity}) => {
  return (
    // Outer flexbox
    <div className='d-flex border  p-3'>
    <div className='col-sm-4'><img className = "img-thumbnail" src={imgUrl} alt={productName}></img></div>
    {/* Product name-incr/decre buttons/trash => flex-column */}
    <div className=' col-sm-6 d-flex flex-column text-center'>
    <div className=''><h6>{productName}</h6></div>
    {/* incre/decre button row flex */}
    <div className='d-flex justify-content-center'><button className='btn btn-light'>+</button> <p className="text-center inline-block">{itemQuantity}</p> <button className='btn btn-light'>-</button></div>
    <div className='mt-2'><i className="fa-solid fa-trash-can fa-lg"></i></div>
    </div>

    <div className='col-sm-2'><p>${price * itemQuantity}</p></div>
</div>
  )
}

export default CartItem
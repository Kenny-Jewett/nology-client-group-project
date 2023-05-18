import React from 'react'

const Checkout = () => {
  return (
    <div class="card text-center mx-auto mt-5 p-4  mb-3" style={{width: '30rem'}}>
    <div class="card-body">
    <h5 class="card-title">Congrats!!! Order successful</h5>
    <p class="card-text">Thank you for your order</p>
    <p className='card-text'>Your order number is: {Math.floor(Math.random() * 10000) + 1}</p>
    <a>Continue shopping</a>
   </div>
  </div>
  )
}

export default Checkout


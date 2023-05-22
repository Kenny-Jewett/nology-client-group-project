import React from 'react'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../utils/cartSlice';
import { useSelector } from 'react-redux';


const Card = ({ image, company, product, productType, description, price, quantity, entireProduct }) => {
  const dispatch = useDispatch();

  const handleBuyNow = (product) => {
    console.log(product);    
    dispatch(addOrder(product))
    const {productId} = product
    console.log(productId);
    const cartData = {"productId": productId, "cartQuantity": 2}

    postCart(cartData)
  }

  const postCart = async (data) => {
    try {
      const response =  await fetch("http://localhost:3070/api/products/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),        
      });
      const result = await response.json();     
      console.log("Success:", result);
    }catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='col-lg-4'>
      <div className='card'>
        <img src={image} alt={product} className="card-img-top" />      
        <section className='card-body'>
          <div className='card-header'>
            <h3 className='card-title'>{product}</h3>
            <h5 className='card-subtitle'>{company}</h5>
          </div>
          <article>
            <p className='card-text'>{productType}</p>
            <p>{description}</p>
            <h4>Price: {price}</h4>
            <p>{quantity}</p>                    
          </article>
          <div className='card-footer'>
            <button type='button' className='btn btn-primary btn-lg' onClick={() => handleBuyNow(entireProduct)}>BUY NOW!</button>
          </div>  
        </section>
      </div>
    </div>
  )
}

export default Card
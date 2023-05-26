import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../../utils/cartSlice';

const Card = ({ image, company, product, productType, description, price, entireProduct }) => {  
  const dispatch = useDispatch();
  const cartSlice = useSelector(store => store.cart.items)


  const handleBuyNow = (product) => {        
    const {productId} = product    
    const cartData = {"productId": productId, "cartQuantity": 1}
    postCart(cartData, product)    
  }

  const postCart = async (data, product) => {
    if (cartSlice.find((e) => e.productId === product.productId)) {     
      
      return
    } else {      
      try {
        const response =  await fetch("http://3.22.75.219:3070/api/products/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),        
        });
        const result = await response.json();     
        console.log("Success:", result); 
        const temp = {
          cartImage:product.productImage,
          cartName:product.productCompany,
          cartPrice:product.productPrice,
          cartQuantity:1,
          productId:product.productId,
        } 
        dispatch(addOrder(temp))
               
      }catch (error) {
        console.error(error);
      }
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
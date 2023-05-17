import React from 'react'

const Card = ({ image, company, product, productType, description, price, quantity }) => {
  return (
    <div className='col'>
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
            <button type='button' className='btn btn-primary btn-lg'>BUY NOW!</button>
          </div>  
        </section>
      </div>
    </div>
  )
}

export default Card
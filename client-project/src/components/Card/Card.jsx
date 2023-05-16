import React from 'react'

const Card = ({ image, company, product, productType, description, price, quantity }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2>Test Header</h2>
      <section>
        <h3>{company}</h3>
        <h3>{product}</h3>
        <p>{productType}</p>
        <article>
          <p>{description}</p>
          <h4>Price: {price}</h4>
          <p>{quantity}</p>
          <h4>Rating</h4>
        </article>
      </section>
    </div>
  )
}

export default Card
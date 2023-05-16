import React from 'react'
import Card from '../Card/Card.jsx'

const Carddetails = () => {

  const productData = [{
	image : "image",
    companyName : "companyName",
    productName : "productName",
    productType : "productType",
    description : "description",
    price : "price",
    quantity : "quantity"    
    },
	{
	image : "image2",
	companyName : "companyName2",
	productName : "productName2",
	productType : "productType2",
	description : "description2",
	price : "price2",
	quantity : "quantity2"	
	}]

    const productList = productData?.map((product, id) =>
		(<Card
			image={product.image} 
			company={product.companyName}
			product={product.productName}
			productType={product.productType}
			description={product.description}
			price={product.price}
			quantity={product.quantity}
			key={id}
		/>)
    
    )

  return (
    <div>
		{productList}
	</div>  
    
  )
}

export default Carddetails
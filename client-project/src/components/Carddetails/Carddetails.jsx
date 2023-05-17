import React from 'react'
import Card from '../Card/Card.jsx'

const Carddetails = () => {

  const productData = [{
		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
    	companyName : "companyName",
    	productName : "productName",
    	productType : "productType",
    	description : "description",
    	price : "price",
    	quantity : "quantity"    
    },
	{
		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
		companyName : "companyName",
		productName : "productName",
		productType : "productType",
		description : "description",
		price : "price",
		quantity : "quantity"	
	},
	{
		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
		companyName : "companyName",
		productName : "productName",
		productType : "productType",
		description : "description",
		price : "price",
		quantity : "quantity"	
	},
	{
		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
		companyName : "companyName",
		productName : "productName",
		productType : "productType",
		description : "description",
		price : "price",
		quantity : "quantity"	
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
    <div className="container text-center">
		<div className='row gap-3'>			
		{productList}			
		</div>
	</div>  
    
  )
}

export default Carddetails
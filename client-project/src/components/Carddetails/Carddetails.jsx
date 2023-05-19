import React, { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
import { useSelector } from 'react-redux'

const Carddetails = () => {

	 const productData = useSelector(store => store.inventory.items);


	// const [ productData, setProductData] = useState();

	// const apiURL = "http://localhost:3070/api/products/"

	// const getProduct = async () => {
	// 	const url = apiURL;
	// 	const res =  await fetch(url);
	// 	const data = await res.json();

	// 	setProductData(data)
	// };

	// useEffect(() => {getProduct(apiURL)}, []);





//   const productData = [{
// 		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
//     	companyName : "companyName",
//     	productName : "productName",
//     	productType : "productType",
//     	description : "description",
//     	price : "price",
//     	quantity : "quantity"    
//     },
// 	{
// 		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
// 		companyName : "companyName",
// 		productName : "productName",
// 		productType : "productType",
// 		description : "description",
// 		price : "price",
// 		quantity : "quantity"	
// 	},
// 	{
// 		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
// 		companyName : "companyName",
// 		productName : "productName",
// 		productType : "productType",
// 		description : "description",
// 		price : "price",
// 		quantity : "quantity"	
// 	},
// 	{
// 		image : "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png",
// 		companyName : "companyName",
// 		productName : "productName",
// 		productType : "productType",
// 		description : "description",
// 		price : "price",
// 		quantity : "quantity"	
// 	}]

    const productList = productData?.map((product, id) =>
		(<Card
			image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"} 
			company={product.productCompany}
			product={product.productName}
			productType={product.productType}
			description={product.productDescription}
			price={product.productPrice}
			quantity={product.productQuantity}
			key={id}
		/>)
    
    )

  return (
    <div className='container text-center'>
		<div className='row'>			
			{productList}			
		</div>
	</div>  
    
  )
}

export default Carddetails
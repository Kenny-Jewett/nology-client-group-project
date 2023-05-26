import React, { useEffect } from 'react'
import Card from '../Card/Card.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems, loadLaptops } from '../../utils/inventorySlice'

const Carddetails = () => {

	const dispatch = useDispatch();
	const productData = useSelector(store => store.inventory.items);
	const productLaptops = useSelector(store => store.inventory.laptops);
	const productHeadphones = useSelector(store => store.inventory.headphones);
	const productSmartWatches = useSelector(store => store.inventory.smartwatches);
	const productSpeakers = useSelector(store => store.inventory.speakers);

	const apiURL = "http://3.22.75.219:3070/api/products/"
	const apiURLLaptops = "http://3.22.75.219:3070/api/products/laptops"

	const inventory = async () => {
		const url = apiURL;
		const res = await fetch(url);
		const data = await res.json();
		dispatch(loadItems(data))

	};

	const loadLaptops = async () => {
		const url = apiURLLaptops;
		const res = await fetch(url);
		const data = await res.json();
		dispatch(loadLaptops(data))

	};

	useEffect(() => { inventory() }, []);

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
		entireProduct={product}
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
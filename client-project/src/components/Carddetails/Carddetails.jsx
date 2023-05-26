import React, { useEffect } from 'react'
import Card from '../Card/Card.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { loadItems } from '../../utils/inventorySlice'

const Carddetails = () => {

	const dispatch = useDispatch();
	const productData = useSelector(store => store.inventory.items);
	// const productLaptops = useSelector(store => store.inventory.laptops);
	// const productHeadphones = useSelector(store => store.inventory.headphones);
	// const productSmartwatches = useSelector(store => store.inventory.smartwatches);
	// const productSpeakers = useSelector(store => store.inventory.speakers);

	const apiURL = "http://localhost:3070/api/products/"
	// const apiURLLaptops = "http://localhost:3070/api/products/laptops"
	// const apiURLHeadphones = "http://localhost:3070/api/products/headphones"
	// const apiURLSmartwatches = "http://localhost:3070/api/products/smartwatches"
	// const apiURLSpeakers = "http://localhost:3070/api/products/speakers"

	const inventory = async () => {
		const url = apiURL;
		const res = await fetch(url);
		const data = await res.json();
		console.log(data)
		dispatch(loadItems(data))

	};

	// const loadLaptops = async () => {
	// 	const url = apiURLLaptops;
	// 	const res = await fetch(url);
	// 	const data = await res.json();
	// 	console.log(data)
	// 	dispatch(loadLaptops(data))

	// };

	// const loadHeadphones = async () => {
	// 	const url = apiURLHeadphones;
	// 	const res = await fetch(url);
	// 	const data = await res.json();
	// 	dispatch(loadHeadphones(data))

	// };

	// const loadSmartwatches = async () => {
	// 	const url = apiURLSmartwatches;
	// 	const res = await fetch(url);
	// 	const data = await res.json();
	// 	dispatch(loadSmartwatches(data))

	// };
	// const loadSpeakers = async () => {
	// 	const url = apiURLSpeakers;
	// 	const res = await fetch(url);
	// 	const data = await res.json();
	// 	dispatch(loadSpeakers(data))

	// };

	useEffect(() => { inventory() }, []);
	// useEffect(() => { loadLaptops() }, []);
	// useEffect(() => { loadHeadphones() }, []);
	// useEffect(() => { loadSmartwatches() }, []);
	// useEffect(() => { loadSpeakers() }, []);

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
	/>))

	// const productLaptopsList = productLaptops?.map((product, id) =>
	// (<Card
	// 	image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
	// 	company={product.productCompany}
	// 	product={product.productName}
	// 	productType={product.productType}
	// 	description={product.productDescription}
	// 	price={product.productPrice}
	// 	quantity={product.productQuantity}
	// 	key={id}
	// 	entireProduct={product}
	// />))

	// const productHeadphonesList = productHeadphones?.map((product, id) =>
	// (<Card
	// 	image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
	// 	company={product.productCompany}
	// 	product={product.productName}
	// 	productType={product.productType}
	// 	description={product.productDescription}
	// 	price={product.productPrice}
	// 	quantity={product.productQuantity}
	// 	key={id}
	// 	entireProduct={product}
	// />))

	// const productSmartwatchesList = productSmartwatches?.map((product, id) =>
	// (<Card
	// 	image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
	// 	company={product.productCompany}
	// 	product={product.productName}
	// 	productType={product.productType}
	// 	description={product.productDescription}
	// 	price={product.productPrice}
	// 	quantity={product.productQuantity}
	// 	key={id}
	// 	entireProduct={product}
	// />))

	// const productSpeakersList = productSpeakers?.map((product, id) =>
	// (<Card
	// 	image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
	// 	company={product.productCompany}
	// 	product={product.productName}
	// 	productType={product.productType}
	// 	description={product.productDescription}
	// 	price={product.productPrice}
	// 	quantity={product.productQuantity}
	// 	key={id}
	// 	entireProduct={product}
	// />))


	return (
		<div className='container text-center'>
			<div className='row'>
				{productList}
			</div>
			{/* <div className='row'>
				{productLaptopsList}
			</div>
			<div className='row'>
				{productHeadphonesList}
			</div>
			<div className='row'>
				{productSmartwatchesList}
			</div>
			<div className='row'>
				{productSpeakersList}
			</div> */}
		</div>

	)
}

export default Carddetails
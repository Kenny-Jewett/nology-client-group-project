import React, { useEffect } from 'react'
import { loadLaptops, loadHeadphones, loadSmartwatches, loadSpeakers } from '../../utils/inventorySlice'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'


const Products = () => {

    const userSelection = useSelector(store => store.inventory.userSelection);
    console.log(userSelection)
    let apiURL;

    const productLaptops = useSelector(store => store.inventory.laptops);
    const productHeadphones = useSelector(store => store.inventory.headphones);
    const productSmartwatches = useSelector(store => store.inventory.smartwatches);
    const productSpeakers = useSelector(store => store.inventory.speakers);
    const dispatch = useDispatch()

    switch (userSelection) {
        case "laptops":
            apiURL = "http://localhost:3070/api/products/laptops";
            break;

        case "smartwatches":
            apiURL = "http://localhost:3070/api/products/smartwatches";
            break;

        case "headphones":
            apiURL = "http://localhost:3070/api/products/headphones";
            break;

        case "speakers":
            apiURL = "http://localhost:3070/api/products/speakers";
            break

        default:
            console.log('Invalid link click');
    };

    useEffect(() => {
        console.log("test")
        productsInventory(apiURL);
    }, [userSelection])

    const productsInventory = async (apiURL) => {
        const url = apiURL;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        dispatch(loadLaptops(data))
    };

    return (
        <div>
            <div className='row'>
                {productLaptops?.map((product) => (
                    <Card image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
                        company={product.productCompany}
                        product={product.productName}
                        productType={product.productType}
                        description={product.productDescription}
                        price={product.productPrice}
                        quantity={product.productQuantity}
                        key={product.productId}
                        entireProduct={product} />
                ))}
            </div>
        </div>
    )
}

export default Products;
import React, { useEffect } from 'react'
import { loadLaptops } from '../../utils/inventorySlice'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'


const Products = () => {

    const apiURLLaptops = "http://3.22.75.219:3070/api/products/laptops"
    const apiURLSmartwatches = "http://3.22.75.219:3070/api/products/smartwatches"
    const apiURLHeadphones = "http://3.22.75.219:3070/api/products/headphones"
    const apiURLSpeakers = "http://3.22.75.219:3070/api/products/speakers"
    const productLaptops = useSelector(store => store.inventory.laptops);
    const dispatch = useDispatch()

    useEffect(() => {
        laptopsInventory();
    }, [])

    const laptopsInventory = async () => {
        const url = apiURLLaptops;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        dispatch(loadLaptops(data))

    };
    return (
        <div>loading
            <div>{productLaptops.map((product) => (
                <Card image={"https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png"}
                    company={product.productCompany}
                    product={product.productName}
                    productType={product.productType}
                    description={product.productDescription}
                    price={product.productPrice}
                    quantity={product.productQuantity}
                    key={product.productId}
                    entireProduct={product} />
            ))}</div></div>
    )
}

export default Products;
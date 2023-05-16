import React from 'react'
import { useSelector } from 'react-redux'

const Landingpage = () => {

  const inventoryList = useSelector(store => store.inventory.items);

  return (
    <div>{inventoryList.map((obj)=>(
       <h1>{obj.productName}</h1>
    ))}</div>
  )
}

export default Landingpage;
import React from 'react'
import { useSelector } from 'react-redux'

const Landingpage = () => {

  const inventoryList = useSelector(store => store.inventory.items);

  return (
    <div></div>
  )
}

export default Landingpage;
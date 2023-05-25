import React from 'react'
import Filtertemplate from '../Filtertemplate/Filtertemplate'
import { useDispatch } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import { loadItems } from '../../utils/inventorySlice';

const Filter = () => {

const dispatch = useDispatch();

// const highestRated = async () => {
//   const url = "http://locahost:3070/api/products/filterByHighestRated"
//   const res =  await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   dispatch(loadItems(data))
// };
// const highLow = async () => {
//   const url = "http://locahost:3070/api/products/filterByPrice"
//   const res =  await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   dispatch(loadItems(data))
// };
// const lowHigh = async () => {
//   const url = "http://locahost:3070/api/products"
//   const res =  await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   dispatch(loadItems(data))
// };

// const handleFilters = (filterButton) => {
//   filterButton()
// }


  return (
  <div>
    <Stack direction='horizontal' gap ={3}>
      {/* <Filtertemplate name={"Highest Rated"} handleFunction = {handleFilters(highestRated)}/> 
      <Filtertemplate name={"Price: High-Low"} handleFunction = {handleFilters(highLow)}/> */}
      {/* <Filtertemplate name={"Price: Low-High"} handleFunction = {handleFilters(lowHigh)}/> */}
    </Stack>
  </div>
  )
}

export default Filter
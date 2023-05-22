import React from 'react'
import Filtertemplate from '../Filtertemplate/Filtertemplate'
import { useDispatch } from 'react-redux';

const Filter = () => {

//Need to add in actual endpoints for these filters
// These are temporary endpoints

const dispatch = useDispatch();

const highestRated = async () => {
  const url = "http://locahost:3070/api/products"
  const res =  await fetch(url);
  const data = await res.json();
  console.log(data);
  dispatch(loadItems(data))
};
const highLow = async () => {
  const url = "http://locahost:3070/api/products"
  const res =  await fetch(url);
  const data = await res.json();
  console.log(data);
  dispatch(loadItems(data))
};
const lowHigh = async () => {
  const url = "http://locahost:3070/api/products"
  const res =  await fetch(url);
  const data = await res.json();
  console.log(data);
  dispatch(loadItems(data))
};

const handleFilters = (filterButton) => {
  filterButton()
}


  return (
  <div>
    <div>
      <Filtertemplate name={"Highest Rated"} handleFunction = {handleFilters(highestRated)}/> 
      <Filtertemplate name={"Price: High-Low"} handleFunction = {handleFilters(highLow)}/>
       <Filtertemplate name={"Price: Low-High"} handleFunction = {handleFilters(lowHigh)}/>
    </div>
  </div>
  )
}

export default Filter
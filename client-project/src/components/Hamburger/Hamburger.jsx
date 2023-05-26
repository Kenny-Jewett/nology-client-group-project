import React from 'react';
import "./Hamburger.scss";
import { useDispatch } from "react-redux";
import { updateUserSelection } from '../../utils/inventorySlice';
import { Link } from 'react-router-dom';

const Hamburger = () => {

  const dispatch = useDispatch();

  const handlerBtn = (productType) => {
    console.log(productType)
    dispatch(updateUserSelection(productType));
  }

  return (
    <div class="container">
      <button class="onClick={() => dispatch({type: 'reset', payload:laptops navbar-toggle collapsed"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="toggle-icon top-bar"></span>
        <span class="toggle-icon middle-bar"></span>
        <span class="toggle-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/products"><a class="nav-link" onClick={() => handlerBtn("laptops")}>Laptops</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/products"><a class="nav-link" onClick={() => handlerBtn("headphones")}>Headphones</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/products"><a class="nav-link" onClick={() => handlerBtn("smartwatches")}>Smart Watches</a></Link>
          </li>
          <li class="nav-item">
            <Link to="/products"><a class="nav-link" onClick={() => handlerBtn("speakers")}>Speakers</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger;
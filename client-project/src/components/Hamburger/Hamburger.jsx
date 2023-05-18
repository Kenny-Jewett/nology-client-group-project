import React from 'react';
import "./Hamburger.scss";

const Hamburger = () => {
  return (
    <>
      <button class="navbar-toggler collapsed d-flex flex-column justify-content-around"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="#">Laptops</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Headphones</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Smart Watches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Speakers</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Hamburger;
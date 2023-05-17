import React from 'react';
import "./Nav.scss";

const Hamburger = () => {
  return (
    <>
      <nav class="navbarpy-5">
        <div class="container d-flex justify-content-start">
          <a class="navbar-brand">Logo</a>
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
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
        </div>
      </nav>
    </>
  )
}

export default Hamburger;
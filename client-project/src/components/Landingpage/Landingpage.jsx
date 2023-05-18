import React from 'react';
import "./Landingpage.scss";
import Filter from "../Filter/Filter";
import Carddetails from "../Carddetails/Carddetails";
import banner from "./images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector } from 'react-redux';


const Landingpage = () => {
  // const inventoryList = useSelector(store => store.inventory.items);
  return (
    <div>
      <img src={banner} alt="store banner" className="d-block w-100 fluid" />
      <section className='section'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className='main-heading'>Best Seller Products</h3>
              <div className="underline mx-auto"></div>
            </div>
            <Filter />
          </div>
          <Carddetails />
        </div>
      </section>
    </div>
  );
};

export default Landingpage
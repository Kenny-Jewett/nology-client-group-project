import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { Provider } from "react-redux";
import store from "./utils/store";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Cart from "./components/Cart/Cart";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Checkout from "./components/Checkout/Checkout";
import "boxicons";


const App = () => {
  const [filterBySearch, setFilterBySearch] = useState(false);

  useEffect(() => {
  }, [filterBySearch]);

  const handleSearch = (e) => {
    setFilterBySearch(e.target.value.toLowerCase());
  };

  return (
    <Router>
    <Provider store={store}>
     <Nav handleSearch={handleSearch} />
     <Routes>
      <Route path="/" element = {<Landingpage />}></Route>
      <Route path = "/cart" element = {<Cart />}></Route>
      <Route path = "/checkout" element = {<Checkout/>}></Route>
    </Routes>
    </Provider>
    </Router>
  );
};

export default App

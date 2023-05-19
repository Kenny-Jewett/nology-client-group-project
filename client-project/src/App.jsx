import React from "react";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { Provider } from "react-redux";
import store from "./utils/store";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Cart from "./components/Cart/Cart";


const App = () => {
  const [filterBySearch, setFilterBySearch] = useState(false);

  useEffect(() => {
  }, [filterBySearch]);

  const handleSearch = (e) => {
    setFilterBySearch(e.target.value.toLowerCase());
  };

  return (
    <Provider store={store}>
      <Nav handleSearch={handleSearch} />
      <Landingpage />
      <Cart />
    </Provider>
  );
};

export default App

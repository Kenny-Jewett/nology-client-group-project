import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Checkout />
       
    </Provider>
  );
}

export default App;

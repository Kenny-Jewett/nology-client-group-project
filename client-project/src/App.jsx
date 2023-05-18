import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Provider store={store}>
      <Nav />

    <Landingpage />
    
    </Provider>
  );
}

export default App;

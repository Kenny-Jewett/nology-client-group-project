import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Landingpage from './components/Landingpage/Landingpage.jsx';
function App() {
  return (
    <Provider store={store}>
    <Landingpage />
    </Provider>
  );
}

export default App;

import React from "react";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";



const App = () => {
  const [filterBySearch, setFilterBySearch] = useState(false);

  useEffect(() => {
  }, [filterBySearch]);

  const handleSearch = (e) => {
    setFilterBySearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Nav
        handleSearch={handleSearch} />
    </div>
  );
};

export default App;

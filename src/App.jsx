import React, { useState } from "react";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showNotFound, setShowNotFound] = useState(false);

  const handleShopNowClick = () => {
    console.log("Shop Now button clicked"); // Debugging log
    setShowNotFound(true);
  };

  return (
    <div className="app">
      <HomePage onShopNowClick={handleShopNowClick} />
      {showNotFound && <NotFound />}
    </div>
  );
}

export default App;
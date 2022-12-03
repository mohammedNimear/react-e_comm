import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Cart from "./Pages/Cart";
import Details from "./Pages/Details";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App ">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

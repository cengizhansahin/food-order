import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Dondurucu from "./components/Dondurucu";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

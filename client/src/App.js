import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const usersState = useSelector((state) => state.userReducer);
  const { users } = usersState;
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={users ? <HomePage /> : <Login />} />
        <Route path="/sepet" element={users ? <CartPage /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;

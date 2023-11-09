import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  // const usersState = useSelector((state) => state.userReducer);
  // const { users } = usersState;
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

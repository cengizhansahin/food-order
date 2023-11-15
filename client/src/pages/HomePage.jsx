import React, { useEffect } from "react";
import MenuList from "../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import Dondurucu from "../components/Dondurucu";
import { useNavigate } from "react-router-dom";
import { getAllBurgersAction } from "../actions/burgerAction";
function HomePage() {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.getAllBurgersReducer);
  const { burgers, loading } = burgerState;
  // console.log(burgers);
  const navigate = useNavigate();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (currentUser) {
      dispatch(getAllBurgersAction());
    } else {
      navigate("/login");
    }
  }, [currentUser]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? (
            <Dondurucu />
          ) : (
            burgers.map((menu) => (
              <div key={menu._id} className="col-md-3">
                <MenuList menu={menu} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

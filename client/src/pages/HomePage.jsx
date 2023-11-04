import React from "react";
import { menuler } from "../yemekData";
import MenuList from "../components/MenuList";
function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {menuler.map((menu) => (
            <div className="col-md-3">
              <MenuList menu={menu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

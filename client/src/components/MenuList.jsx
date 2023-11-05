import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cartActions";

function MenuList({ menu }) {
  const [ozellik, setOzellik] = useState("medium");
  const [miktar, setMiktar] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const adetHandler = (e) => {
    setMiktar(e.target.value);
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(menu, miktar, ozellik));
  };

  return (
    <div>
      <div className="card m-auto my-3" style={{ width: "18rem" }}>
        <img
          src={menu.img}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        />
        <div className="card-body">
          <div className="baslik mb-5" style={{ height: "50px" }}>
            <h4 className="card-title mb-5">{menu.ad}</h4>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h5>Özellik</h5>
              <select
                name=""
                id=""
                className="form-select my-2"
                value={ozellik}
                onChange={(e) => setOzellik(e.target.value)}
              >
                {menu.ozellik.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <h5>Miktar</h5>
              <input
                type="number"
                min={1}
                max={10}
                className="form-control mt-2"
                value={miktar}
                onChange={adetHandler}
              />
            </div>
          </div>

          <button className="btn btn-danger w-75 mt-3" onClick={addToCart}>
            Sepete Ekle
          </button>
        </div>
      </div>

      {/* Modal başlangıcı */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{menu.ad}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={menu.img}
            className="img-fluid"
            style={{ height: "300px" }}
            alt=""
          />
          <h1>Kategori: {menu.kategori}</h1>
          <p>{menu.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction } from "../actions/orderAction";

function UsersList() {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getAllOrdersReducer);
  const { orders } = ordersState;

  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [orders]);

  return (
    <div>
      <h3 className="text-dark my-3">Kullanıcılar Listesi</h3>
      <table className="table table-hovered table-dark table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>Sipariş ID</th>
            <th>Teslimat Mail</th>
            <th>Kullanıcı ID</th>
            <th>Fiyat</th>
            <th>Sipariş Tarihi</th>
            <th>Teslimat Durumu</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? "Teslim Edildi" : "Teslim Edilmedi"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

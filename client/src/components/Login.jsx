import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../actions/usersAction';
import { useNavigate } from "react-router-dom";


function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(mail, password))
  }
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="shadow p-3 rounded bg-white w-25">
        <form onSubmit={handleLogin}>
          <div className="form-group my-3">
            <label htmlFor="mail">Mailinizi Giriniz</label>
            <input
              type="text"
              className="form-control"
              id="mail"
              aria-describedby="mailDescription"
              placeholder="Lütfen Mailinizi Giriniz."
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Parolanızı Giriniz</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Lütfen Parolanızı Giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>)
}

export default Login
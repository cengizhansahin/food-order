import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const falanState = useSelector((state) => state.loginUserReducer);
  const { error, currentUser, success, loading } = falanState;
  const navigate = useNavigate();
  const girisHandler = () => {
    if (mail == "" || password == "") {
      Swal.fire("Eksik alanları doldurunuz");
    } else {
      const kullanici = {
        mail: mail,
        password: password,
      };
      dispatch(loginUserAction(kullanici));
      if (success == true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Giriş Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Giriş hatalı!",
        });
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container bg-warning w-50" style={{ height: "250px" }}>
        <h2 className="display-4">Kullanıcı Giriş Ekranı</h2>

        <input
          type="email"
          placeholder="Email giriniz"
          className="form-control "
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrenizi giriniz"
          className="form-control my-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-danger w-50 m-auto" onClick={girisHandler}>
          GİRİŞ YAP
        </button>
      </div>
    </div>
  );
}

export default Login;

import axios from "axios";
export const loginUserAction = (mail, password) => async (dispatch) => {
  dispatch({
    type: "REQUEST",
  });
  try {
    const response = await axios.post("http://localhost:4000/api/users/login", {
      mail: mail,
      password: password,
    });
    dispatch({
      type: "SUCCESS",
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {
    dispatch({
      type: "FAILED",
      payload: error,
    });
    alert("Kullanıcı adı veya parola hatalı!");
  }
};

export const registerUserAction =
  (name, mail, password) => async (dispatch) => {
    dispatch({
      type: "REQUEST",
    });
  };

import * as types from "../types";
import axios from "axios";

export function LoginUser(user, verifyToken) {
  return async (dispatch) => {
    let config = {
      headers: {
        "X-Recaptcha-Token": verifyToken,
      },
    };

    const payload = {
      username: user.email,
      password: user.password,
    };

    const url = `/auth/v1/user/login`;

    try {
      const res = await axios.post(url, payload, config);
      axios.defaults.headers["X-Id-Token"] = res.data.id_token;
      if (res.status === 200) {
        return dispatch({
          type: types.SET_USER,
          payload: {
            email: payload.username,
            token: res.data.id_token,
          },
        });
      }
    } catch (err) {
      console.log("Failed to login");
    }
  };
}

export function GetUserOrg(user) {
  return async (dispatch) => {
    const url = `/user/v1/user/${user}`;

    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        return dispatch({
          type: types.SET_ORG,
          payload: {
            org: res.data.organisation,
          },
        });
      }
    } catch (err) {
      console.log("Couldnt fetch org");
    }
  };
}

import axios from "axios";
import { getHeader } from "../constants/header";
import { BASE_URL } from "../constants/Urls";
import { goToHome, goToLogin, goToProfile, goToSignUpAdress } from "../routes/coordinator";


export const login = (body, history, setLoading, clear) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setLoading(false);
      goToHome(history);
      clear()
    })
    .catch((err) => {
      setLoading(false);
      alert(err.response.data.message);
    });
};

export const signUp = (body, history, setLoading, clear) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("tokenSignUp", res.data.token);
      alert("Conta criada com sucesso!");
      goToSignUpAdress(history);
      setLoading(false);
      clear()
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
};

export const createAddress = (body, history, setLoading, clear) => {
  setLoading(true);

  const getHeaderSignUp = () => {
    const tokenSignUp = localStorage.getItem('tokenSignUp')

    const header = {
      headers: {
        auth: tokenSignUp
      }
    }
    return header
  }

  axios
    .put(`${BASE_URL}/address`, body, getHeaderSignUp())
    .then((res) => {
      localStorage.removeItem("tokenSignUp");
      localStorage.setItem("token", res.data.token);
      alert("Endereço salvo!");
      goToHome(history);
      setLoading(false);
      clear()
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
};

export const updateAddress = (body, history, setLoading, clear) => {
  setLoading(true)
  axios
    .put(`${BASE_URL}/address`, body, getHeader())
    .then((res) => {
      clear()
      alert("Endereço salvo!");
      goToProfile(history);
      setLoading(false)
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false)
    });
};

export const getFullAddress = (setter, setLoading) => {
  setLoading(true)
  axios
    .get(`${BASE_URL}/profile/address`, getHeader())
    .then((res) => {
      setter(res.data.address);
      setLoading(false)
    })
    .catch((err) => {
      alert("Erro ao alterar Endereço");
      setLoading(false)
    });
};

export const logout = (history) => {
  localStorage.removeItem("token");
  goToLogin(history)
};

import { goBack } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { getHeader } from "../constants/header";

export const editProfile = (body, history, setLoading, clear) => {
    setLoading(true);
    axios
    .put(`${BASE_URL}/profile`, body, getHeader())
    .then((res) => {
        clear()
        alert("Perfil editado com sucesso")
        goBack(history);
        setLoading(false);
    })
    .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
    })
}

export const getProfile = (setProfile, setLoading) => {
    setLoading(true)
    axios.get(`${BASE_URL}/profile`, getHeader())
    .then((res) => {
      setProfile(res.data.user)
      setLoading(false)
    })
    .catch((err) => {
      alert("Erro ao alterar Perfil");
      setLoading(false)
    })
}
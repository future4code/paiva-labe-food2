import axios from "axios"
import { getHeader } from "../constants/header";
import { BASE_URL } from "../constants/Urls"


export const getRestaurants = (setRestaurants, setLoading) => {
    setLoading(true);
    axios.get(`${BASE_URL}/restaurants`, getHeader())
        .then((res) => {
            setRestaurants(res.data.restaurants)
            setLoading(false);
        })
        .catch((err) => {
            if (err.response.status === 401) {
            alert("Você precisa estar logado para acessar essa área!")
            } else {
                alert(err.message)
            }
            setLoading(false);
        })
}

export const getRestaurantsDetails = (setRestaurantDetail, id, setLoading) => {
    setLoading(true);
    axios.get(`${BASE_URL}/restaurants/${id}`, getHeader())
        .then((res) => {
            setRestaurantDetail(res.data.restaurant)
            setLoading(false);
        })
        .catch((err) => {
            alert(err.message)
            setLoading(false);
        })
}

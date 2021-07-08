import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';


const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [loading, setLoading] = useState(false);
    const [activeOrder, setActiveOrder] = useState([])
    const [currentCategory, setCurrentCategory] = useState("")
    const [ordersHistory, setOrdersHistory] = useState([])
    const [totalValue, setTotalValue] = useState(0)
    const [address, setAddress] = useState({})

    const setters = {
        setCart,
        setProfile,
        setRestaurantDetail,
        setRestaurants,
        setLoading,
        setCurrentCategory,
        setOrdersHistory,
        setActiveOrder,
        setCurrentCategory,
        setTotalValue,
        setAddress

    }

    const states = {
        cart,
        restaurants,
        profile,
        restaurantDetail,
        loading,
        currentCategory,
        ordersHistory,
        activeOrder,
        currentCategory,
        totalValue,
        address

    }

    return <GlobalStateContext.Provider
        value={{ setters, states }}
    >
        {props.children}
    </GlobalStateContext.Provider>
};

export default GlobalState;

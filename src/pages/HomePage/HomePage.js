import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import RestaurantTypeTabs from "../../components/RestaurantTypeTabs/RestaurantTypeTabs";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import { ContainerRestaurantCards } from "../style-Pages/style-Pages";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToSearch } from "../../routes/coordinator";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ActiveOrder from "../../components/ActiveOrder/ActiveOrder";
import { getRestaurants } from "../../services/restaurants";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Loading } from "react-loading-dot/lib";
import { getActiveOrders } from "../../services/order";
import GoToTop from "../../components/GoToTop/GoToTop";

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [filteredCategoryRestaurants, setFilteredCategoryRestaurants] =
    useState([]);
  const { states, setters } = useContext(GlobalStateContext);

  const actOrder = states.activeOrder;

  const order = () => {
    if (actOrder && actOrder.length !== 0) {
      return (
        <ActiveOrder
          name={actOrder.restaurantName}
          price={actOrder.totalPrice}
        />
      );
    }
  };

  const restaurantsList = states.restaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        title={restaurant.title}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        logoUrl={restaurant.logoUrl}
        history={history}
        id={restaurant.id}
      />
    );
  });

  const filter = () => {
    if (states.restaurants && states.restaurants.length > 0) {
      const filtered = states.restaurants.filter((restaurant) => {
        return restaurant.category.includes(states.currentCategory);
      });
      setFilteredCategoryRestaurants([...filtered]);
    }
  };

  const filteredRestaurantsList = filteredCategoryRestaurants.map(
    (restaurant) => {
      return (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          title={restaurant.title}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          logoUrl={restaurant.logoUrl}
          history={history}
          id={restaurant.id}
        />
      );
    }
  );

  const clearFilter = () => {
    setters.setRestaurants([]);
  };

  useEffect(() => {
    clearFilter();
    getRestaurants(setters.setRestaurants, setters.setLoading);
    getActiveOrders(setters.setActiveOrder);
    filter();
    setters.setCart([]);
  }, [states.currentCategory]);

  return (
    <div>
      <Header title={"Ifuture"} />
      <Box ml={2} mr={2}>
        <TextField
          onClick={() => goToSearch(history)}
          fullWidth
          margin="normal"
          placeholder="Busca"
          id="search-input"
          variant="outlined"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box ml={1}>
        <RestaurantTypeTabs />
      </Box>
      {states.restaurants && states.restaurants.length !== 0 && states.loading === false ?
        <ContainerRestaurantCards>
          {filteredRestaurantsList.length > 0
            ? filteredRestaurantsList
            : restaurantsList}
          {order()}
        </ContainerRestaurantCards>
        : <Loading />}

      <Footer history={history} colorHome={"primary"} />
      <GoToTop />
    </div>
  );
};

export default HomePage;

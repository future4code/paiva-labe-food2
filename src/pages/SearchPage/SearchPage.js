import React, { useContext, useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { ContainerRestaurantCards } from "../style-Pages/style-Pages";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useInput from "../../hooks/useInput";
import { useState } from "react";

const SearchPage = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, handleSearch] = useInput();

  const filter = () => {
    if (states.restaurants && states.restaurants.length > 0) {
      const filtered = states.restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredRestaurants([...filtered]);
    }
  };

  useEffect(() => {
    setters.setLoading(true);
    const delay = setTimeout(() => {
      filter();
      setters.setLoading(false);
    }, 2000);

    return () => clearTimeout(delay)
  }, [search]);

  const filteredState = filteredRestaurants.map((restaurant) => {
    return (
      <RestaurantCard
        key={restaurant.id}
        name={restaurant.name}
        title={restaurant.title}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        logoUrl={restaurant.logoUrl}
      />
    );
  });

  return (
    <div>
      <Box ml={2} mr={2}>
        <TextField
          onChange={handleSearch}
          fullWidth
          margin="normal"
          placeholder="Busca"
          id="input-searchpage"
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

      <ContainerRestaurantCards>
        {states.loading === true ? <p>animação carregando por cima</p> : null}
        {search && filteredState.length === 0 && states.loading === false ? <p>Não encontramos :(</p> : null}
        {search.length === 0 ? <p>Busque por nome de restaurante</p> : null}
        {search ? filteredState : null}
      </ContainerRestaurantCards>
    </div>
  );
};

export default SearchPage;
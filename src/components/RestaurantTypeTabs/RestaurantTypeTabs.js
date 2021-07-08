import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const RestaurantTypeTabs = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [value, setValue] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor={states.currentCategory === "" ? "neutral" : "primary"}
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Tab
          label="Burger"
          value="Hamburguer"
          onClick={
            states.currentCategory === "Hamburguer"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Hamburguer")
          }
        />
        <Tab
          label="Asiática"
          value="Asiática"
          onClick={
            states.currentCategory === "Asiática"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Asiática")
          }
        />
        <Tab
          label="Árabe"
          value="Árabe"
          onClick={
            states.currentCategory === "Árabe"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Árabe")
          }
        />
        <Tab
          label="Sorvetes"
          value="Sorvetes"
          onClick={
            states.currentCategory === "Sorvetes"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Sorvetes")
          }
        />
        <Tab
          label="Carnes"
          value="Carnes"
          onClick={
            states.currentCategory === "Carnes"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Carnes")
          }
        />
        <Tab
          label="Mexicana"
          value="Mexicana"
          onClick={
            states.currentCategory === "Mexicana"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Mexicana")
          }
        />
        <Tab
          label="Petiscos"
          value="Petiscos"
          onClick={
            states.currentCategory === "Petiscos"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Petiscos")
          }
        />
        <Tab
          label="Baiana"
          value="Baiana"
          onClick={
            states.currentCategory === "Baiana"
              ? () => setters.setCurrentCategory("")
              : () => setters.setCurrentCategory("Baiana")
          }
        />
      </Tabs>
    </div>
  );
};

export default RestaurantTypeTabs;

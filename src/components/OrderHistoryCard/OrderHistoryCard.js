import { Typography } from "@material-ui/core";
import React from "react";
import { ContainerCard } from "./style";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useContext } from "react";
import { fixPrice } from '../../constants/functions';

const OrderHistoryCard = () => {
  const { states } = useContext(GlobalStateContext);

  const dateConverter = (date) => {
    let dateNowConverter = new Date(date);
    return dateNowConverter.toString().substr(4, 11)
  };

  const ordersMap = states.ordersHistory.map((order) => {
    return (
      <ContainerCard key={order.createdAt} >
        <Typography variant={"body1"} color={"primary"}>
          {order.restaurantName}
        </Typography>
        <Typography variant={"body2"}>{dateConverter(order.createdAt)}</Typography>
        <Typography variant={"h6"}>SUBTOTAL R${fixPrice(order.totalPrice)}</Typography>
      </ContainerCard>
    );
  });

  return ordersMap;
};

export default OrderHistoryCard;

import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { StyledCard, DeliveryInfosContainer } from "./style";
import { goToRestaurant } from "../../routes/coordinator";

const RestaurantCard = (props) => {

  return (
    <div onClick={() => goToRestaurant(props.history, props.id)}>
      <StyledCard key={props.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="120"
            image={props.logoUrl}
            title={props.name}
          />
          <CardContent>
            <Typography color="primary" variant="body1" component="h2">
              {props.name}
            </Typography>

            <DeliveryInfosContainer>
              <Typography variant="body2" color="secondary" component="p">
                {props.deliveryTime - 10} - {props.deliveryTime} min
              </Typography>
              <Typography variant="body2" color="secondary" component="p">
                Frete R${props.shipping},00
              </Typography>
            </DeliveryInfosContainer>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </div>
  );
};

export default RestaurantCard;

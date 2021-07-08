import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { StyledCard, DeliveryInfosContainer } from "./style";

const RestaurantDetailsCard = (props) => {
  return (

    <StyledCard elevation='none' >
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
              {props.category}
            </Typography>

            <div>
              <Typography variant="body2" color="secondary" component="p">
                {props.deliveryTime - 10} - {props.deliveryTime} min
              </Typography>
              <Typography variant="body2" color="secondary" component="p">
                Frete R${props.shipping},00
              </Typography>
            </div>

            <Typography variant="body2" color="secondary" component="p">
              {props.address}
            </Typography>

          </DeliveryInfosContainer>
        </CardContent>
    </StyledCard>

  )
}

export default RestaurantDetailsCard

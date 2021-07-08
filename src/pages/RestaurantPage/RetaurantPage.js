import React, { useLayoutEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantDetailsCard from "../../components/RestaurantDetailsCard/RestaurantDetailsCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getRestaurantsDetails } from "../../services/restaurants";
import ItensCard from "../../components/ItensCard/ItensCard";
import { ItensCont, MainCont, HR, StyledTypo, ButtonCont } from "./style";
import Header from "../../components/Header/Header";
import { goBack, goToChart, goToHome } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import Button from "@material-ui/core/Button";
import GoToTop from "../../components/GoToTop/GoToTop";
import { Loading } from "react-loading-dot/lib";

const RetaurantPage = () => {
    useProtectedPage();
    const params = useParams();
    const history = useHistory();
    const { setters, states } = useContext(GlobalStateContext);

    const clearFilter = () => {
        setters.setRestaurantDetail([]);
    };

    useLayoutEffect(() => {
        getRestaurantsDetails(setters.setRestaurantDetail, params.id, setters.setLoading);
        clearFilter();
    }, [setters.setRestaurantDetail, params.id]);

    const restaurant = states.restaurantDetail;
    const categories = [];
    restaurant &&
        restaurant.products &&
        restaurant.products.forEach((item) => {
            categories.push(item.category);
        });

    const filteredList = categories.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });

    const itensList = filteredList.map((item) => {
        const list = restaurant.products.filter((prod) => prod.category === item);

        const productsList = list.map((prod) => {
            return (
                <ItensCard
                    key={prod.id}
                    name={prod.name}
                    description={prod.description}
                    photoUrl={prod.photoUrl}
                    price={prod.price}
                    id={prod.id}
                    button={true}
                />
            );
        });

        return (
            <ItensCont key={item}>
                <StyledTypo variant="body1" component="h2">
                    {" "}
                    {item}{" "}
                </StyledTypo>
                <HR />
                {productsList}
            </ItensCont>
        );
    });

    const verifyCart = () => {
        if (window.confirm("Há itens no seu carrinho, gostaria de remove-los?")) {
            setters.setCart([]);
            goBack(history);
        }
    };

    return (
        <MainCont>
            <Header
                buttonLeft={states.cart.length ? () => verifyCart() : () => goToHome(history)}
                title={'Restaurante'}
                icon={'back'}
            />
            <div>
                {states.loading === true ? <Loading /> : states.restaurantDetail &&
                    <RestaurantDetailsCard
                        name={restaurant.name}
                        category={restaurant.category}
                        deliveryTime={restaurant.deliveryTime}
                        logoUrl={restaurant.logoUrl}
                        shipping={restaurant.shipping}
                        address={restaurant.address}
                    />}

                {!states.loading && states.cart.length ? (
                    <ButtonCont>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => {
                                goToChart(history);
                            }}
                        >
                            Finalizar compra
                        </Button>
                    </ButtonCont>
                ) : (
                    ""
                )}
                {itensList}
            </div>
            <GoToTop />
        </MainCont>
    );
};

export default RetaurantPage;

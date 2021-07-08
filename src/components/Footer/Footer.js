import React, {useContext} from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { goToChart, goToHome, goToProfile } from '../../routes/coordinator';
import { StickFooter, StyledIconButton } from './style';
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Footer = ({ history, colorHome, colorShopping, colorProfile }) => {
    const { setters, states } = useContext(GlobalStateContext);

    const verifyCart = (goTo) => {
        if (window.confirm("Há itens no seu carrinho, gostaria de remove-los?")) {
            setters.setCart([])
            goTo(history)
        }
    }

    return (
        <div>
            <StickFooter>
                <StyledIconButton color={colorHome ? colorHome : 'secondary'} onClick={ states.cart.length ? () => verifyCart(goToHome) : () => goToHome(history)}>
                    <HomeOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color={colorShopping ? colorShopping : 'secondary'} onClick={() => goToChart(history)}>
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color={colorProfile ? colorProfile : 'secondary'} onClick={states.cart.length ? () => verifyCart(goToProfile) : () => goToProfile(history)}>
                    <PersonOutlineOutlinedIcon fontSize="large" />
                </StyledIconButton>
            </StickFooter>
        </div>
    );
};

export default Footer;
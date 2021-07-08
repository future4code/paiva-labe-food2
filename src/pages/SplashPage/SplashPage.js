import React from 'react';
import { Container } from './style';
import Logo from "../../assets/logo-future-eats.svg";
import { goToHome, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const SplashPage = () => {
    const token = localStorage.getItem('token')
    const history = useHistory()

    setTimeout(() => {
        if (token) {
            goToHome(history)
        } else {
            goToLogin(history)
        }
    }, 2500);

    return (
        <Container>
            <img src={Logo} />
        </Container>
    );
};

export default SplashPage;
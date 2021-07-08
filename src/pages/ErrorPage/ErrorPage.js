import React from 'react';
import logo from '../../assets/logo2x.png'
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { StyledButton, StyledImg } from './style';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/coordinator';

const ErrorPage = () => {
    const history = useHistory()

    return (
        <Box ml={3} mt={4} mr={12} >
            <StyledImg src={logo} />
            <Typography variant="h3" component="h2">
                Puxa, esta página não existe
            </Typography>
            <Typography color='secondary' variant="h5" component="h5">
                Confira se você digitou algo errado. Talvez o endereço não esteja mais disponível na web
            </Typography>
            <StyledButton color='primary' variant='contained' onClick={() => goToHome(history)} >
                Ir para o início
            </StyledButton>
        </Box>
    );
};

export default ErrorPage;
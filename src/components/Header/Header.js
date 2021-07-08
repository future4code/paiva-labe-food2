import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ContainerHead } from './style';
import { Button, Typography } from '@material-ui/core';

const Header = (props) => {
    return (
        <ContainerHead>
            {props.buttonLeft ?
                <Button onClick={props.buttonLeft}>
                    {props.icon === 'back' ? <ChevronLeftIcon fontSize={'large'} /> : <Typography variant={'button'} color={'primary'}>Logout</Typography>}
                </Button> :
                <Button disabled>
                </Button>}
            {props.title &&
                <Typography variant={'body1'}>{props.title}</Typography>}
            {props.buttonRight ?
                <Button onClick={props.buttonRight}>
                    <ChevronRightIcon fontSize={'large'} />
                </Button> :
                <Button disabled>
                </Button>
            }
        </ContainerHead>
    );
};

export default Header;
import React from 'react'
import { Card, InfoContainer, Icon } from './style'
import { fixPrice } from '../../constants/functions'

export default function ActiveOrder(props) {

    return (
        <Card>
            <Icon fontSize="large" />
            <InfoContainer>
                <p>Pedido em andamento</p>
                <p>{props.name}</p>
                <h3>SUBTOTAL R${fixPrice(props.price)}</h3>
            </InfoContainer>
        </Card>
    )
}

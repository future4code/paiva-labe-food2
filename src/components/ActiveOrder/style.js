import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';


export const Card = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
    padding-left:32px;
    height:7.3rem;
    background-color:#e8222e;
    position:fixed;
    bottom:60px;
    z-index:111;
    font-family:'Roboto';
    width: 100%;
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin-left:16px;
    p,h3{
        margin:4px;
    }
    p:nth-child(1){
        color:white;
    }
`

export const Icon = styled(AccessTimeIcon)`
    color:white;
`
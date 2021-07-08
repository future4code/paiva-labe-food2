import styled from "styled-components";
import { Button, FormControl, TextField } from "@material-ui/core";


export const SendButton = styled(Button)`
    width:20.5rem;
`


export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 15px;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
`

export const InputPassword = styled(FormControl)`
    width: 100%;
    margin-top: 10px;
`

export const Input= styled(TextField)`
    width: 100%;
`


export const Main = styled.div`
  font-family:'Roboto';
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  img{
      margin: 1.5rem 0;
  }
  
`




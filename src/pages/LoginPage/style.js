import { Button, FormControl, TextField } from "@material-ui/core";
import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5.5rem;
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

export const InputEmail = styled(TextField)`
    width: 100%;
`

export const InputPassword = styled(FormControl)`
    width: 100%;
    margin-top: 10px;
`

export const ContainerButton = styled(Button)`
    border-radius: 2px;
`
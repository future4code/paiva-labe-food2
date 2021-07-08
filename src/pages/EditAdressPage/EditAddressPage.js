import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { Main, Grid } from "./style";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import { goToProfile } from "../../routes/coordinator";
import { getFullAddress, updateAddress } from "../../services/user";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

const EditAddressPage = () => {

    const history = useHistory();
    const { states, setters } = useContext(GlobalStateContext);
    const address = states.address
    const [loading, setLoading] = useState(false)
    const [form, onChange, clear] = useForm({
        street: address.street,
        number: address.number,
        neighbourhood: address.neighbourhood,
        city: address.city,
        state: address.state,
        complement: address.complement,
    });

    useEffect(() => {
        getFullAddress(setters.setAddress, setLoading)
    }, []);

    const onSubmitForm = (event) => {
        event.preventDefault()
        updateAddress(form, history, setLoading, clear)
    };

    return (
        <Main>
            <Header
                buttonLeft={() => goToProfile(history)}
                title={'Endereço'}
                icon={'back'}
            />
            <form onSubmit={onSubmitForm}>
                <Grid>
                    <TextField
                        type="text"
                        name={"street"}
                        value={form.street}
                        onChange={onChange}
                        required
                        label="Logradouro"
                        placeholder="Rua/Av."
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        name={"number"}
                        value={form.number}
                        onChange={onChange}
                        required
                        label="Número"
                        placeholder="Número"
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        name={"complement"}
                        value={form.complement ? form.complement : ""}
                        onChange={onChange}
                        label="Complemento"
                        placeholder="Apto./Bloco"
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={onChange}
                        required
                        label="Bairro"
                        placeholder="Bairro"
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        name={"city"}
                        value={form.city}
                        onChange={onChange}
                        required
                        label="Cidade"
                        placeholder="Cidade"
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <TextField
                        type="text"
                        name={"state"}
                        value={form.state}
                        onChange={onChange}
                        required
                        label="Estado"
                        placeholder="Estado"
                        variant="outlined"
                    />
                </Grid>
                <Button type='submit' variant="contained" color="primary">
                    {loading ? <CircularProgress color={'inherit'} size={24} /> : 'Salvar'}
                </Button>
            </form>
        </Main>
    );
};

export default EditAddressPage;

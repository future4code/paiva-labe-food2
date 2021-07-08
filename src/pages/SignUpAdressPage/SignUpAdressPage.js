import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Main, Grid } from "./style";
import TextField from "@material-ui/core/TextField";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPageSignUpPage from "../../hooks/useUnprotectedSignUpPage";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { createAddress } from "../../services/user";

const SignUpAdressPage = () => {
  useUnprotectedPage();
  useUnprotectedPageSignUpPage()
  const { states, setters } = useContext(GlobalStateContext);

  const history = useHistory();
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createAddress(form, history, setters.setLoading, clear);
  };

  return (
    <Main>
      <Header
        title={'Meu endereço'}
      />
      {/* <strong>
        <p>Meu Endereço</p>
      </strong> */}
      <form onSubmit={onSubmitForm}>
        <Grid item>
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
        <Grid item>
          <TextField
            type=""
            name={"number"}
            value={form.number}
            onChange={onChange}
            required
            label="Número"
            placeholder="Número"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            type=""
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            label="Complemento"
            placeholder="Apto./Bloco"
            variant="outlined"
          />
        </Grid>
        <Grid item>
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
        <Grid item>
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
        <Grid item>
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {states.loading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            "Salvar"
          )}
        </Button>
      </form>
    </Main>
  );
};

export default SignUpAdressPage;

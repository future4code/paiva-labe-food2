import React, { useState, useContext } from "react";
import { Main, ContainerForm, Input, InputPassword, SendButton } from "./style";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import {
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  CircularProgress,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Header from "../../components/Header/Header";
import { goToLogin } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import useUnprotectedPageSignUpPage from "../../hooks/useUnprotectedSignUpPage";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const SignUpPage = () => {
  useUnprotectedPage();
  useUnprotectedPageSignUpPage()
  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const [confirm, setConfirm] = useState("");
  const [form, onChange, clear, setForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    showPassword: false,
    showConfirm: false,
  });

  const handleClickShowPassword = () => {
    setForm({ ...form, showPassword: !form.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirm = () => {
    setForm({ ...form, showConfirm: !form.showConfirm });
  };

  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (form.password !== confirm) {
      alert("Senhas não são iguais");
    } else {
      signUp(form, history, setters.setLoading, clear);
    }
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <Main>
      <Header buttonLeft={() => goToLogin(history)} icon={'back'} />
      <img src={logo} />
      <strong>
        <p>Cadastrar</p>
      </strong>
      <ContainerForm onSubmit={onSubmitForm}>
        <Input
          type="text"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
          label="Nome"
          placeholder="Nome e sobrenome"
          variant="outlined"
        />

        <Input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          label="E-mail"
          placeholder="email@email.com"
          variant="outlined"
        />

        <Input
          inputProps={{
            maxLength: 14,
            pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`,
          }}
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          required
          label="CPF"
          placeholder="000.000.000-00"
          variant="outlined"
        />

        <InputPassword variant="outlined">
          <InputLabel>Senha*</InputLabel>
          <OutlinedInput
            name="password"
            label="Senha"
            type={form.showPassword ? "text" : "password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Mínimo 6 caracteres"}
            required
            inputProps={{ minLength: 6 }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {form.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={65}
          />
        </InputPassword>
        <InputPassword variant="outlined">
          <InputLabel>Confirmar*</InputLabel>
          <OutlinedInput
            name="confirm-password"
            type={form.showConfirm ? "text" : "password"}
            value={form.confirm}
            onChange={handleConfirm}
            required
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownConfirm}
                >
                  {form.showConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={65}
          />
        </InputPassword>
        <SendButton type="submit" variant="contained" color="primary" fullWidth>
          {states.loading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            "Criar"
          )}
        </SendButton>
      </ContainerForm>
    </Main>
  );
};

export default SignUpPage;

import React, { useEffect, useState } from 'react';
import { Main, ContainerForm, Input, SendButton } from './style'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import { editProfile, getProfile } from '../../services/profile';
import { CircularProgress } from '@material-ui/core'
import Header from '../../components/Header/Header';
import { goToProfile } from '../../routes/coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { useContext } from 'react';


const ProfileEditPage = () => {
    useProtectedPage();
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const { states, setters } = useContext(GlobalStateContext);
    const profile = states.profile
    const [form, onChange, clear] = useForm({
        name: profile.name,
        email: profile.email,
        cpf: profile.cpf,
    })

    useEffect(() => {
        getProfile(setters.setProfile, setLoading)
    }, []);

    const onSubmitForm = (event) => {
        event.preventDefault()
        editProfile(form, history, setLoading, clear)
    }


    return (
        <Main>
            <Header
                buttonLeft={() => goToProfile(history)}
                title={'Editar Perfil'}
                icon={'back'}
            />
            <ContainerForm onSubmit={onSubmitForm}>
                <Input
                    type='text'
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    variant="outlined" />
                <Input
                    type='email'
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                    label="E-mail"
                    placeholder="email@email.com"
                    variant='outlined' />
                <Input
                    inputProps={{
                        maxLength: 14,
                        pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`
                    }}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    required
                    label="CPF"
                    placeholder="000.000.000-00"
                    variant="outlined" />
                <SendButton
                    type='submit'
                    variant="contained"
                    color="primary"
                    fullWidth>
                    {loading ? <CircularProgress color={'inherit'} size={24} /> : 'Salvar'}
                </SendButton>
            </ContainerForm>
        </Main>
    );
};

export default ProfileEditPage;
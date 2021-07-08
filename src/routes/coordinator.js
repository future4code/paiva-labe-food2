export const goToHome = (history) => {
    history.push('/home')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToProfile = (history) => {
    history.push('/perfil')
}

export const goToProfileEditPage = (history) => {
    history.push('/perfil/editar')
}

export const goToEditAddressPage = (history) => {
    history.push('/perfil/editar/endereco')
}


export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToChart = (history) => {
    history.push('/carrinho')
}

export const goToSignUpAdress = (history) => {
    history.push('/cadastro/endereco')
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToSearch = (history) => {
    history.push('/busca')
}

export const goBack = (history) => {
    history.goBack()
}


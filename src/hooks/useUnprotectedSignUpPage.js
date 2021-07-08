import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';

function useUnprotectedPageSignUpPage() {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('tokenSignUp')
        if(token) {
            history.push('/cadastro/endereco')
        }
    })
}

export default useUnprotectedPageSignUpPage;
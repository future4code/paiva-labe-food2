import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';

function useProtectedPage() {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            history.push('/login')
        }
    })
}

export default useProtectedPage;
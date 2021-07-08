import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';

function useUnprotectedPage() {
    const history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            history.push('/home')
        }
    })
}

export default useUnprotectedPage;
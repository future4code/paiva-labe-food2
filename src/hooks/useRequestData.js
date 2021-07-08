import axios from 'axios';
import { useEffect, useState } from 'react';
import { getHeader } from '../constants/header';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)


    const getRequest = () => {
 
        axios.get(url, getHeader())
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente')
            })
    }
    return [data, getRequest]
};

export default useRequestData;